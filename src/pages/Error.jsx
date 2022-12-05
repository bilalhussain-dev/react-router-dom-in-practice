import React from 'react'
import { Link } from 'react-router-dom'

function Error() {
  return (
    <div>
        <h1>Not Found Error 404</h1>
        <Link to='/'>Go Back</Link>
    </div>
  )
}

export default Error