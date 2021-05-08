// import React from 'react'

import shelvesNames from '../components/ShelvesNames'
import BooksList from "./BooksList";

function ShelComponent(props) {
    const {book, list, shelves, shelf, setshelves} = props;
    return (<div className="bookshelf">
        {/* current shelf title */}
        <h2 className="bookshelf-title">{shelvesNames[shelf]}</h2>
        {/* list of books in this shelf */}
        <div className="bookshelf-books">
            <BooksList setshelves={setshelves} book={book} list={list} shelves={shelves} />
        </div>
    </div>
    )
}

export default ShelComponent
