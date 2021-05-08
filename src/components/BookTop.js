// import React from 'react'

import ShelfChanger from "./ShelfChanger";

function BookTop(props) {
    const {image, book, shelves, setshelves} = props;
    return (
        <div className="book-top">
            <div
            style={{
                width:128,
                height:188,
                backgroundImage:`url(${image && image.smallThumbnail})`
            }}
            className="book-cover"></div>
            <ShelfChanger setshelves={setshelves} book={book} shelves={shelves} />

        </div>
    )
}

export default BookTop
