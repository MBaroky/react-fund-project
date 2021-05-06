// import React from 'react'

import ShelfChanger from "./ShelfChanger";

function BookTop(props) {
    return (
        <div className="book-top">
            <div
            style={{
                width:128,
                height:188,
                backgroundImage:`url(${props.image.smallThumbnail})`
            }}
            className="book-cover"></div>
            <ShelfChanger shelves={props.shelves} />

        </div>
    )
}

export default BookTop
