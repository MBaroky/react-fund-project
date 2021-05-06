import {useState, useEffect} from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css';
import Home from './pages/Home';

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
    <Home shelves={shelves} booksList={booksList} />
  );
}

export default App;
