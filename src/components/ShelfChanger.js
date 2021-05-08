import {useEffect, useState, useRef} from 'react'
import * as BooksAPI from '../BooksAPI'
import shelvesNames from '../ShelvesNames'

const useSelectChange = (shelf, book, setshelves) => {
    const hasJustMounted = useRef(true);
    useEffect(() => {

        hasJustMounted.current
        ? hasJustMounted.current = false
        : shelf !== book.shelf && BooksAPI.update(book, shelf)
            .then(res => {
                !res.error &&
                setshelves(res)
            })
    }, [shelf, book, setshelves]);
}

function ShelfChanger(props) {

    const {book, shelves, setshelves} = props;
    const [shelf, setshelf] = useState(book.shelf);



    useSelectChange(shelf, book, setshelves)


    return (
        <div className="book-shelf-changer">
            {
            book.shelf
            ?
             console.log(book.shelf)
             : book.shelf = Object.keys(shelves).filter((shelf, i) => shelves[shelf].includes(book.id))[0] || 'none'
            }
            <select
            defaultValue='move'
            onChange={(e)=>{
                setshelf(e.target.value);

            }}
            >

            <option style={{
                fontWeight:'Bold',
                color:'white',
                backgroundColor:'black'
                }}
                value="move"
                disabled>Move to...</option>


                {Object.keys(shelves).map((shelf)=>(
                    <option
                    disabled={book.shelf === shelf}
                    value={shelf}
                    key={shelf}>
                       {
                        book.shelf === shelf && '✓'
                    } {shelvesNames[shelf]}
                    </option>
                ))}
            <option
            style={{color:'red'}}
            disabled={book.shelf === 'none'}
            value="none">
            {book.shelf === 'none' && '✓'} None</option>
            </select>
        </div>
    )
}

export default ShelfChanger
