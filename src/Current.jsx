import React from 'react'
import current1 from './img/current1.jpeg'
import current2 from './img/current2.jpeg'
import current3 from './img/current3.webp'
import current4 from './img/current4.jpeg'


export default function Current() {
  return (
    <div className='row m-5'>
       <div className='col m-0.5'>
            <img src={current1} alt='' width='230px' height='180px'/>
            <p>The Lorraine project 2021</p>
        </div>

        <div className='col m-0.5'>
            <img src={current2} alt='' width='230px' height='180px'/>
            <p>The Lorraine project 2021</p>
        </div>

        <div className='col m-0.5'>
            <img src={current3} alt='' width='230px' height='180px'/>
            <p>The Lorraine project 2021</p>
        </div>

        <div className='col m-0.5'>
            <img src={current4} alt='' width='230px' height='180px'/>
            <p>The Lorraine project 2021</p>
        </div>
    </div>
  )
}
