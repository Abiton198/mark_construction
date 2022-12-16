import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../img/logo.png'

export default function Navbar() {
  return (
    <div>
        <nav className='navbar navbar-dark  navbar-expand-lg fixed-top'>
            <a href='#' className='navbar-brand'>
                <img src={logo} alt='' width='50px' height='40px' className='mr-3'/> 
                Crimson Manufacturing
            </a>

    {/* button with humburger */}
            <button className='navbar-toggler' data-toggle='collapse' data-target='#navbarCollapse'>
                <span className='navbar-toggler-icon'></span>
            </button>

{/* links collapse on small screen */}
            <div className='collapse navbar-collapse' id='navbarCollapse'>
                <ul className='navbar-nav ml-auto'>
                    <li className='navbar-item'>
                        <Link to='/' className='nav-link'>Home</Link>
                    </li>

                    <li className='navbar-item'>
                        <Link to='/About' className='nav-link'>About</Link>
                    </li>

                    <li className='navbar-item'>
                        <Link to='/Projects' className='nav-link'>Projects</Link>
                    </li>

                    <li className='navbar-item'>
                        <Link to='/Current' className='nav-link'>Current</Link>
                    </li>

                    <li className='navbar-item'>
                        <Link to='/Contact' className='nav-link'>Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
  )
}
