import React from 'react'
import curr1 from '../img/curr1.jpeg'
import curr2 from '../img/curr2.jpeg'
import curr3 from '../img/curr3.jpeg'
import curr4 from '../img/curr4.jpeg'
import curr5 from '../img/curr5.jpeg'
import curr6 from '../img/curr6.jpeg'


export default function Current() {
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
                           
                                         </ol>
                    
                <div className='carousel-inner'> 

                    <div className='carousel-item'>
                        <img src={curr1} alt='' className='d-md-block w-100 h-100'/>
                            <p className='m-3 text-light'> Fire places </p>
                                 </div> 

                    <div className='carousel-item active'>
                        <img src={curr2} alt='' className='d-md-block w-100 h-100'/>
                            <p className='m-3 text-light'>Chimneys</p>
                                </div>

                    <div className='carousel-item'>
                        <img src={curr3} alt='' className='d-md-block w-100 h-100'/>
                            <p className='m-3 text-light'>Fire places</p>
                                 </div>

                    <div className='carousel-item'>
                        <img src={curr4} alt='' className='d-md-block w-100 h-100'/>
                            <p className='m-3 text-light'>Fire places</p>
                                 </div> 

                    <div className='carousel-item'>
                        <img src={curr5} alt='' className='d-md-block w-100 h-100'/>
                            <p className='m-3 text-light'>Chimneys</p>
                                 </div>

                    <div className='carousel-item'>
                        <img src={curr6} alt='' className='d-md-block w-100 h-100'/>
                            <p className='m-3 text-light'>Chimneys</p>
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
{/*   
    <div className='row m-0'>
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
    </div> */}


    </div>
  )
}
