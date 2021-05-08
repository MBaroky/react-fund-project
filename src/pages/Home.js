
// import BooksList from '../components/BooksList';
import ShelComponent from '../components/ShelfComponent';
import {Link} from 'react-router-dom'


function Home(props) {
    const {shelves, booksList, setshelves, isLoading} = props;
    return (
        <div className="App">
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">

                    {isLoading
                        ? <h2 className="centered">___________Loading_________</h2>
                        :Object.keys(shelves).map(shelf=>{

                        let booksListPerShelf = booksList.filter(book => book.shelf === shelf)
                        return <ShelComponent key={shelf} shelf={shelf} setshelves={setshelves} list={booksListPerShelf} shelves={shelves} />
                    })}
                </div>
            </div>
            <div className="open-search">
                <Link to="/search">Add a book</Link>
            </div>
        </div>
    )
}

export default Home
