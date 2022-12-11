import React from 'react'
import Navbar from './Navbar'
import {Routes, Route} from 'react-router-dom'
import About from './About'
import Current from './Current'
import Contact from './Contact'
import Projects from './Projects'
import Home from './Home'

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
