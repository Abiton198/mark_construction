import React from 'react'

export default function Navbar() {
  return (
    <div>
        <nav className='navbar navbar-light bg-light navbar-expand-lg'>
            <a href='#' className='navbar-brand'>Mark Du Peez Contractors</a>

    {/* button with humburger */}
            <button className='navbar-toggler' data-toggle='collapse' data-target='#navbarCollapse'>
                <span className='navbar-toggler-icon'></span>
            </button>

{/* links collapse on small screen */}
            <div className='collapse navbar-collapse' id='navbarCollapse'>
                <ul className='navbar-nav ml-auto'>
                    <li className='navbar-item'>
                        <a href='#' className='nav-link'>Homepage</a>
                    </li>

                    <li className='navbar-item'>
                        <a href='#' className='nav-link'>About</a>
                    </li>

                    <li className='navbar-item'>
                        <a href='#' className='nav-link'>Projects</a>
                    </li>

                    <li className='navbar-item'>
                        <a href='#' className='nav-link'>Current</a>
                    </li>

                    <li className='navbar-item'>
                        <a href='#' className='nav-link'>Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
  )
}
