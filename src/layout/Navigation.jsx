import React from 'react'
import { Link } from 'react-router-dom'

function Navigation() {
  return (
    <div className='header'>
        <span className="logo">LOGO</span>
        <ul>
            <li>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/services'>Services</Link>
            </li>
        </ul>
    </div>
  )
}

export default Navigation