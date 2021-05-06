// import React from 'react'

function ShelfChanger(props) {
    return (
        <div className="book-shelf-changer">
            <select>

            <option value="move" disabled>Move to...</option>
                {props.shelves.map((shelf, i) => (
                    <option value={shelf.value} key={`shelf-${i}`}>
                        {shelf.title}
                    </option>
                ))}
            <option value="none">None</option>
            </select>
        </div>
    )
}

export default ShelfChanger
