import BooksList from './BooksList'

function ShelfComponent(props) {
    return (
          <BooksList shelves={props.shelves} list={props.booksList}/>
    )
}

export default ShelfComponent
