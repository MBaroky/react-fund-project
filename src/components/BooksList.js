import BookAuthor from './BookAuthor'
import BookTop from './BookTop'

function BooksList(props) {
    const {list, shelves, setshelves} = props
    return (
        <ol className="books-grid">
            {list.map(book => (
                <li key={book.id}>
                    <div className="book">
                        <BookTop setshelves={setshelves} book={book} shelves={shelves} image={book.imageLinks} />
                        <div className="book-title">
                            {book.title}
                        </div>
                        <BookAuthor authors={book.authors} />
                    </div>
                </li>
            ))}
        </ol>
    )
}

export default BooksList
