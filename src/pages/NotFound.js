import React from 'react'
import {Link} from 'react-router-dom'

const NotFound = () => {
    return (
        <div
        className='centered'>
          <h2> 404 - You're Lost </h2>
          <p> Start Over? </p> <Link to="/">Go Home </Link>
        </div>
    )
}

export default NotFound
