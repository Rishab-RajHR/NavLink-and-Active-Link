import React from 'react'
import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Home from './MyRouters/Home'
import About from './MyRouters/About'
import Navbar from './MyRouters/Navbar'
import PageNotFound from './MyRouters/PageNotFound'
import Employee from './MyRouters/Employee'
import Contact from './MyRouters/Contact'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
        <Routes>
           <Route path='/' element={<Home />}/>
           <Route path='/about' element={<About />}/>
           <Route path='/contact' element={<Contact />}/>
           <Route path='/employee/:name/:age' element={<Employee />}/>
           {/* <Route path='/*' element={<PageNotFound/>}/> */}
           <Route path='*/' element={<Navigate to='/' />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

