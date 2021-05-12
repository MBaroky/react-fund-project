import {useState, useEffect} from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import {ToastContainer} from 'react-toastify'
import * as BooksAPI from './BooksAPI'
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/Home';
import Search from './pages/Search';
import NotFound from './pages/NotFound';

function App() {
  // States
  const [booksList, setbooksList] = useState([]);
  const [isLoading, setisLoading] = useState(true);

  // List of shelves
  const shelvesInit = {
    currentlyReading:[],
    wantToRead: [],
    read: []
  }

    const [shelves, setshelves] = useState(shelvesInit);

    // renaming title
    useEffect(() => {
      document.title='My Reads App'
      return () => {
        document.title='OK goodbye'
      }
    }, [])

  // fetching my books
  useEffect(() => {
    BooksAPI.getAll()
    .then(data=>{
      setbooksList(data)
      const shelvesNow = shelves;
      data.map(book => shelvesNow[book.shelf].push(book.id))
      setshelves(shelvesNow)
      setisLoading(false)
    });
  }, [shelves]);


  // render
  return (
    <Router>
      <ToastContainer />
      <Switch>
        <Route exact path="/">
          <Home isLoading={isLoading} shelves={shelves} booksList={booksList} setshelves={setshelves} />
        </Route>
        <Route path="/search">
          <Search shelves={shelves} setshelves={setshelves} />
        </Route>
        <Route path='*'>
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
