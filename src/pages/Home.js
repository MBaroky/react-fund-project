
import BooksList from '../components/BooksList';

function Home(props) {
    const {shelves, booksList} = props;
    return (
        <div className="App">
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    {shelves.map(shelf => {
                    let booksListPerShelf = booksList.filter(book => book.shelf === shelf.value)
                    return <BooksList key={shelf.value} shelf={shelf} list={booksListPerShelf} shelves={shelves} />
                    })}
                </div>
            </div>
            <div className="open-search">
                <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
            </div>
        </div>
    )
}

export default Home
