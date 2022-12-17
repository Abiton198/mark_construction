import React from 'react'

import major1 from '../img/major1.jpg'
import major2 from '../img/major2.jpg'
import major3 from '../img/major3.jpg'
import major4 from '../img/major4.jpg'
import major5 from '../img/major5.jpg'
import major6 from '../img/major6.jpg'
import major7 from '../img/major7.jpg'
import major8 from '../img/major8.jpg'
import major9 from '../img/major9.jpg'
import major10 from '../img/major10.jpg'
import major11 from '../img/major11.jpg'
import major12 from '../img/major12.jpg'


export default function Projects() {
  return (
    <div>
      
    <div className='carousel slide bg-dark' id='carouselIndicators' data-ride='carousel'>

        <ol className='carousel-indicators'>
          <li data-target='#carouselIndicators' data-slide-to='0' className='active'></li>
          <li data-target='#carouselIndicators' data-slide-to='1'></li>
          <li data-target='#carouselIndicators' data-slide-to='2'></li>
          <li data-target='#carouselIndicators' data-slide-to='3'></li>
          <li data-target='#carouselIndicators' data-slide-to='4'></li>
          <li data-target='#carouselIndicators' data-slide-to='5'></li>
          <li data-target='#carouselIndicators' data-slide-to='6'></li>
          <li data-target='#carouselIndicators' data-slide-to='7'></li>
          <li data-target='#carouselIndicators' data-slide-to='8'></li>
          <li data-target='#carouselIndicators' data-slide-to='9'></li>
          <li data-target='#carouselIndicators' data-slide-to='10'></li>
          <li data-target='#carouselIndicators' data-slide-to='11'></li>
        </ol>
             
         <div className='carousel-inner'> 

              <div className='carousel-item active'>
                 <img src={major1} alt='' className='d-md-block w-100 h-100'/>
                   <p className='m-3 text-light'>Capstone project 2021</p>
                     </div>

              <div className='carousel-item'>
                  <img src={major2} alt='' className='d-md-block w-100 h-100'/>
                    <p className='m-3 text-light'>Capstone project 2021</p>
                      </div>

              <div className='carousel-item'>
                <img src={major3} alt='' className='d-md-block w-100 h-100'/>
                  <p className='m-3 text-light'>Capstone project 2021</p>
                    </div>

              <div className='carousel-item'>
                <img src={major4} alt='' className='d-md-block w-100 h-100'/>
                  <p className='m-3 text-light'>Capstone project 2021</p>
                    </div>

              <div className='carousel-item'>
                <img src={major5} alt='' className='d-md-block w-100 h-100'/>
                  <p className='m-3 text-light'>Capstone project 2021</p>
                    </div>

              <div className='carousel-item'>
                <img src={major6} alt='' className='d-md-block w-100 h-100'/>
                  <p className='m-3 text-light'>Capstone project 2021</p>
                    </div> 

                <div className='carousel-item'>
                <img src={major7} alt='' className='d-md-block w-100 h-100'/>
                  <p className='m-3 text-light'>Capstone project 2021</p>
                    </div>

              <div className='carousel-item'>
                <img src={major8} alt='' className='d-md-block w-100 h-100'/>
                  <p className='m-3 text-light'>Capstone project 2021</p>
                    </div>

              <div className='carousel-item'>
                <img src={major9} alt='' className='d-md-block w-100 h-100'/>
                  <p className='m-3 text-light'>Capstone project 2021</p>
                    </div>

              <div className='carousel-item'>
                <img src={major10} alt='' className='d-md-block w-100 h-100'/>
                  <p className='m-3 text-light' text-light>Capstone project 2021</p>
                    </div>

              <div className='carousel-item'>
                <img src={major11} alt='' className='d-md-block w-100 h-100'/>
                  <p className='m-3 text-light' text-light>Capstone project 2021</p>
                    </div>

              <div className='carousel-item'>
                <img src={major12} alt='' className='d-md-block w-100 h-100'/>
                  <p className='m-3 text-light' text-light>Capstone project 2021</p>
                    </div>
        </div>   

        <a className='carousel-control-prev' href='#carouselIndicators' role='button' data-slide='prev'>
          <span className='carousel-control-prev-icon bg-success' aria-hidden='true'></span>
            <span className='sr-only'>Previous</span>
              </a>

        <a className='carousel-control-next' href='#carouselIndicators' role='button' data-slide='next'>
          <span className='carousel-control-next-icon bg-success' aria-hidden='true'></span>
             <span className='sr-only'>Next</span>
                </a>

    </div>


   
    
   
    </div>
  )
}
