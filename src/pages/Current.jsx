import React from 'react'
import curr1 from '../img/curr1.jpeg'
import curr2 from '../img/curr2.jpeg'
import curr3 from '../img/curr3.jpeg'
import curr4 from '../img/curr4.jpeg'
import curr5 from '../img/curr5.jpeg'
import curr6 from '../img/curr6.jpeg'


export default function Current() {
  return (
    <>
          <h5 className='about-head'>Some of Projects we did in 2022</h5>
  
    <div className='row m-5'>
       <div className='col m-0.5'>
            <img src={curr1} alt='' width='350px' height='300px'/>
            <p className='mt-3'>Fire places</p>
        </div>

        <div className='col m-0.5'>
            <img src={curr2} alt='' width='350px' height='300px'/>
            <p className='mt-3'>Chimneys</p>
        </div>

        <div className='col m-0.5'>
            <img src={curr3} alt='' width='350px' height='300px'/>
            <p className='mt-3'>Fire places</p>
        </div>

        <div className='col m-0.5'>
            <img src={curr4} alt=''  width='350px' height='300px'/>
            <p className='mt-3'>Fire places</p>
        </div>

        <div className='col m-0.5'>
            <img src={curr5} alt=''  width='350px' height='300px'/>
            <p className='mt-3'>Chimneys</p>
        </div>

        <div className='col m-0.5'>
            <img src={curr6} alt=''  width='350px' height='300px'/>
            <p className='mt-3'>Chimneys</p>
        </div>
    </div>

    </>
  )
}
