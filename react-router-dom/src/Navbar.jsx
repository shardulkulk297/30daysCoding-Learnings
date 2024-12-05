import React from 'react'
import './App.css'
import { Link } from 'react-router-dom'
import About from './About'
import Home from './Home'
import Contact from './Contact'
const Navbar = () => {
  return (
    <nav>
        <ul className='nav'>
            <li>
                <Link to="/">HOME</Link>
                </li>
            <li><Link to="/About">ABOUT</Link></li>
            <li><Link to="/">HOME</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar
