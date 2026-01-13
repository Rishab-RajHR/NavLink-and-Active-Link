import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
     <ul className='nav'>
        <li><NavLink className ='nav-link' style={({isActive}) => {return {backgroundColor : isActive ? 'aqua' : 'yellow'}}} to="/">Home</NavLink></li>
        <li><NavLink className ='nav-link' style={({isActive}) => {return {backgroundColor : isActive ? 'aqua' : 'yellow'}}} to="/about">About</NavLink></li>
        <li><NavLink className ='nav-link' style={({isActive}) => {return {backgroundColor : isActive ? 'aqua' : 'yellow'}}} to="/contact">Contact</NavLink></li>
      </ul> 
    </>
  )
}

export default Navbar
