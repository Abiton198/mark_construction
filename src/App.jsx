import React from 'react'
import Navbar from './pages/Navbar'
import {Routes, Route} from 'react-router-dom'
import About from './pages/About'
import Current from './pages/Current'
import Contact from './pages/Contact'
import Projects from './pages/Projects'
import Home from './pages/Home'

export default function App() {
  return (
    <div className='app'>
        
     <Navbar/>
     

        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/Projects' element={<Projects/>}/>
          <Route path='/Current' element={<Current/>}/>
          <Route path='/Contact' element={<Contact/>}/>
        </Routes>

    </div>
  )
}
