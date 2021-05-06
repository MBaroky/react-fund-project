import {useState, useEffect} from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css';
import BooksList from './components/BooksList';

function App() {
  const [booksList, setbooksList] = useState([]);
  const shelves = [
    {title:'Currently Reading', value:'currentlyReading'},
    {title:'Want to Read', value:'wantToRead'},
    {title:'Read', value:'read'}]
  useEffect(() => {
    BooksAPI.getAll()
    .then(data=>{
      setbooksList(data)
      console.log(data)
    });
  }, []);
  return (
    <div className="App">
      <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
        {shelves.map(shelf => {
          let booksListPerShelf = booksList.filter(book => book.shelf === shelf.value)
          return <BooksList key={shelf.value} shelf={shelf} list={booksListPerShelf} shelves={shelves} />
        })}
      </div>

    </div>
  );
}

export default App;
