import {useEffect, useState, useRef} from 'react'
import * as BooksAPI from '../BooksAPI'
import {toast, Flip} from 'react-toastify'
import shelvesNames from '../ShelvesNames'

function ShelfChanger(props) {

    const {book, shelves, setshelves} = props;
    const [shelf, setshelf] = useState(book.shelf);

    const hasJustMounted = useRef(true);
    useEffect(() => {

        hasJustMounted.current
        ? hasJustMounted.current = false
        : shelf !== book.shelf  && BooksAPI.update(book, shelf)
            .then(res => {
                console.log(book.id, ': shelf is: ',shelf, 'book.shelf is: ', book.shelf)
                !res.error &&
                toast.info(`${shelf !== 'none'?`🔀 ${book.title} moved to shelf: ${shelvesNames[shelf]}!`:`⚠️ ${book.title} removed from shelf:${shelvesNames[book.shelf]}!`}`, {
                    position: "bottom-left",
                    transition: Flip
                    });
                setshelves(res)
            })
    }, [shelf, book, setshelves]);

    // setting shelf manually for search results
    book.shelf  = !book.shelf
    ? Object.keys(shelves).filter((shelf, i) => shelves[shelf].includes(book.id))[0] || 'none'
    : book.shelf;

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
