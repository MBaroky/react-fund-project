import React from 'react'

function BookAuthor(props) {
    return (
        <div className="book-authors">
            {props.authors.length===1
            ?props.authors[0]
            :props.authors.map((author, i)=>  <span key={`author-${i}`}>{i === 0 ? author : ` & ${author}`}</span>)}
        </div>
    )
}

export default BookAuthor
