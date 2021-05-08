import {useState, useEffect} from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css';
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
    read: [],
    wantToRead: []
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
      setisLoading(false)
    });
  }, [shelves]);


  // render
  return (
    <Router>
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
