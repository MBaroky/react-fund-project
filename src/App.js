import {useState, useEffect} from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css';
import Home from './pages/Home';

function App() {
  // States
  const [booksList, setbooksList] = useState([]);

  // List of shelves
  const shelves = [
    {title:'Currently Reading', value:'currentlyReading'},
    {title:'Want to Read', value:'wantToRead'},
    {title:'Read', value:'read'}]

  // fetching my books
  useEffect(() => {
    BooksAPI.getAll()
    .then(data=>{
      setbooksList(data)
      console.log(data)
    });
  }, []);

  // render
  return (
    <Home shelves={shelves} booksList={booksList} />
  );
}

export default App;
