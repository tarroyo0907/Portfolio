import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className='fixed top-0 left-0 right-0 w-full z-50 py-5 px-8 flex items-center justify-center'>
        <h1 className='text-white text-center font-bold' style={{ fontSize: '64px' }}>Tyler Arroyo's Portfolio</h1>
    </header>
  )
}

export default Navbar