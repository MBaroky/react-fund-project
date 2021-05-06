import BookAuthor from './BookAuthor'
import BookTop from './BookTop'

function BooksList(props) {
    const {list} = props
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{props.shelf.title}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {list.map(book => (
                        <li key={book.id}>
                            <div className="book">
                                <BookTop currShelf={book.shelf} shelves={props.shelves} image={book.imageLinks} />
                                <div className="book-title">
                                    {book.title}
                                </div>
                                <BookAuthor authors={book.authors} />
                            </div>
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    )
}

export default BooksList
