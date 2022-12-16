import React from 'react'
import curr3 from '../img/curr3.jpeg'
import weld from '../img/weld.jpeg'
import staircase from '../img/staircase.png'


export default function About() {
  return (
    <div className='row m-5'>
                     <p className='mt-5 text-justify'>When it comes to quality and service Crimson Manufacturing
                             is right up there with the best in the industry. We offer a full range of steel
                             products for residential or commercial projects. We manufacture and install according 
                             to the clients’ specifications and in line with SANS regulations.
                                </p>

        <div className='col m-0.5 text-justify '>
            <h4>Balustrading </h4>
            <img src={weld} alt='' width='230px' height='180px' className='mt-2'/>
            <p className='mt-3'>(Stainless Steel, Mild Steel and Aluminium)</p>
        </div>

        <div className='col m-0.5 text-justify '>
            <h4>Staircases</h4>
            <img src={staircase} alt='' width='230px' height='180px' className='mt-2'/>
            <p className='mt-3'>stairs</p>
        </div>

        <div className='col m-0.5 text-justify '>
            <h4>Catladders and catwalks</h4>
            <img src={curr3} alt='' width='230px' height='180px' className='mt-2'/>
        </div>
            <p className='mt-3'>We do all your housing re-finish and re-beautification through 
                quality renovations at reasonable rates. With the effecient and 
                reliable teamwork, we match any type and size of work. </p>
    </div>
  )
}
