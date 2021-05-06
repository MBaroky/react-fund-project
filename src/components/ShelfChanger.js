// import React from 'react'

function ShelfChanger(props) {
    return (
        <div className="book-shelf-changer">
            <select>

            <option style={{
                fontWeight:'Bold',
                color:'white',
                backgroundColor:'black'
                }}
                value="move"
                disabled>Move to...</option>
                {props.shelves.map((shelf, i) => (
                    <option
                    disabled={props.currShelf === shelf.value}
                    value={shelf.value}
                    key={`shelf-${i}`}>
                       {
                        props.currShelf === shelf.value && '✓'
                    } {shelf.title}
                    </option>
                ))}
            <option style={{color:'red'}} value="none">None</option>
            </select>
        </div>
    )
}

export default ShelfChanger
