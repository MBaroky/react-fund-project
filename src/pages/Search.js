import {useState, useEffect, useRef} from 'react'
import {Link} from 'react-router-dom'
import * as BooksAPI from '../BooksAPI'
import BooksList from '../components/BooksList'

const Search = (props) => {
    const keywords = ['Android', 'Art', 'Artificial Intelligence', 'Astronomy', 'Austen', 'Baseball', 'Basketball', 'Bhagat', 'Biography', 'Brief', 'Business', 'Camus', 'Cervantes', 'Christie', 'Classics', 'Comics', 'Cook', 'Cricket', 'Cycling', 'Desai', 'Design', 'Development', 'Digital Marketing', 'Drama', 'Drawing', 'Dumas', 'Education', 'Everything', 'Fantasy', 'Film', 'Finance', 'First', 'Fitness', 'Football', 'Future', 'Games', 'Gandhi', 'Homer', 'Horror', 'Hugo', 'Ibsen', 'Journey', 'Kafka', 'King', 'Lahiri', 'Larsson', 'Learn', 'Literary Fiction', 'Make', 'Manage', 'Marquez', 'Money', 'Mystery', 'Negotiate', 'Painting', 'Philosophy', 'Photography', 'Poetry', 'Production', 'Programming', 'React', 'Redux', 'River', 'Robotics', 'Rowling', 'Satire', 'Science Fiction', 'Shakespeare', 'Singh', 'Swimming', 'Tale', 'Thrun', 'Time', 'Tolstoy', 'Travel', 'Ultimate', 'Virtual Reality', 'Web Development', 'iOS']
    const { shelves, setshelves} = props;
    const [searchList, setsearchList] = useState([]);
    const [text, settext] = useState('')
    const [error, seterror] = useState('');

    const isInitialMount = useRef(true);
    useEffect(() => {

        isInitialMount.current
        ? isInitialMount.current = false
        : text
        && BooksAPI.search(text)
        .then(res =>{
            if(!res.error){setsearchList(res); seterror('')}else{seterror(res.error)}
        })
        return ()=>{
            console.log('cleanup')
        }
    }, [text, shelves])
    return (
        <div className="search-books">
            <div className="search-books-bar">
              <Link className="close-search" to="../">Close</Link>
              <div className="search-books-input-wrapper resetable">
                <input
                value = {text}
                onChange = {(e)=>{settext(e.target.value)}}
                type="text"
                placeholder="Search by title or author"/>
                {
                    text !== '' &&
                    <button
                    onClick={()=>{settext('')}}
                    className="resetable__reset">

                        <i>×</i>
                    </button>
                }

              </div>
            </div>
            <div className="search-books-results">
                {
                (error === '' && searchList && text !=='')?
                (<BooksList list={searchList} shelves={shelves} setshelves={setshelves} />)
                :(
                <div
                className="centered">
                    <h2>{error ? 'wrong Query' : 'empty search'}</h2>
                    <p>use on of the following keywords</p>
                    <ul
                    style={{
                        listStyleType:'none'
                    }}>
                        {keywords.map((keyword, i) => (
                            <li key={i}
                            style={{
                                display:'inline-block',
                                margin:'0 10px 10px 0'
                            }}>
                                <button
                                onClick={(e)=>{settext(keyword)}}
                                >{keyword}</button>
                            </li>
                        ))}
                    </ul>
                </div>
                )
            }
            </div>
          </div>


    )
}

export default Search
