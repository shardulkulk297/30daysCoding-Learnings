import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Home'
import Contact from './Contact'
import About from './About'
import Navbar from './Navbar'
import Login from './Login'
const RouterEg = () => {
  return (
    <div>
       
        <BrowserRouter>
        <Navbar />
            <Routes>

                <Route path='/' element={<Home />}></Route>
                <Route path='/contact' element={<Contact />}></Route>
                <Route path='/About' element={<About />}></Route>
                <Route path='/Login' element={<Login />}></Route>
                <Route path='*' element = {<div>#ERROR 404</div>}></Route>
            </Routes>
        </BrowserRouter>
      
    </div>
  )
}

export default RouterEg
