import {useEffect, useState, useRef} from 'react'
import * as BooksAPI from '../BooksAPI'
import shelvesNames from '../ShelvesNames'

const useSelectChange = (shelf, book, setshelves, shelves) => {
    const hasJustMounted = useRef(true);
    useEffect(() => {

        hasJustMounted.current
        ? hasJustMounted.current = false
        : shelf !== custSetShelf(book, shelves) && BooksAPI.update(book, shelf)
            .then(res => {
                !res.error &&
                setshelves(res)
            })
    }, [shelf, book, setshelves, shelves]);
}

const custSetShelf = (book, shelves) => {
    book.shelf  = !book.shelf ? Object.keys(shelves).filter((shelf, i) => shelves[shelf].includes(book.id))[0] || 'none'
    : book.shelf;
    return book.shelf
}

function ShelfChanger(props) {

    const {book, shelves, setshelves} = props;
    const [shelf, setshelf] = useState(custSetShelf(book, shelves));



    useSelectChange(shelf, book, setshelves)


    return (
        <div className="book-shelf-changer">
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
                    disabled={custSetShelf(book, shelves) === shelf}
                    value={shelf}
                    key={shelf}>
                       {
                        custSetShelf(book, shelves) === shelf && '✓'
                    } {shelvesNames[shelf]}
                    </option>
                ))}
            <option
            style={{color:'red'}}
            disabled={custSetShelf(book, shelves) === 'none'}
            value="none">
            {custSetShelf(book, shelves) === 'none' && '✓'} None</option>
            </select>
        </div>
    )
}

export default ShelfChanger
