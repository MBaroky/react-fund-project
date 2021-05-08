// import React from 'react'

function BookAuthor(props) {
    const {authors} = props
    return (
        <div className="book-authors">
            {!authors
            ? (<span></span>)
            : authors.length===1 // if only one author
            ?authors[0]
            :authors.map((author, i)=>  <span key={`author-${i}`}>{i === 0 ? author : ` & ${author}`}</span>)}
        </div>
    )
}

export default BookAuthor
