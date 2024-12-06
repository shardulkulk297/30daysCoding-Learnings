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
                <Link to="/">Logo</Link>
            </li>
            <li>
              <Link to="/About">ABOUT</Link></li>
            <li><Link to="/Login"><button>Login</button></Link></li>

        </ul>
    </nav>
  )
}

export default Navbar
