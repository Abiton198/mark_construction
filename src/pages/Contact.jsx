import React from 'react'
import home from '../img/home.jpg'

export default function Contact() {
  return (
   
<>        
        <div className='row'>
            <div className='col-sm-6 bg-light text-justify mt-0'>
                <p className='contact-message'> 
                    Working with us is the best option available.
                      Get in touch with Crimson Manufacturing on our various platforms below. 
                        </p>

                        <h3 className='m-2'>Contact us:</h3>

                    <h6 className='font-weight-bold'>
                        <br/><i className="fa-sharp fa-solid fa-location-dot m-2 "></i>Gedults River, St Albans, Gqeberha, SA  
                            <br/> <i className="fa-solid fa-phone m-2"></i>076 872 1584
                            <br/> <i className="fa-regular fa-envelope m-2"></i> 01dupreez@gmail.com
                                <br/><i class="fa-solid fa-magnifying-glass m-2"></i>www.crimsonmanufacturing.co.za
                                    </h6>

                    <div className='social'>
                            <ul className="row">
                                                                
                                 <li className="col">
                                    <a className="whatsapp" href="https://wa.me/0027768721584">
                                        <i className="fab fa-whatsapp"></i>
                                             </a></li>
                                                                    
                                <li className="col">
                                    <a className="twitter" href="https://web.facebook.com/mark.dupreez.758">
                                        <i className="fab fa-facebook"></i>
                                             </a></li>
                                                                    
                                <li className="col">
                                    <a className="github" href="#">
                                        <i className="fab fa-instagram"></i>  
                                            </a></li>
                                    
                                <li className='col'>
                                    <a className='linked-in' href='https://www.linkedin.com/in/mark-du-preez-880454182/'>
                                        <i className="fab fa-linkedin"></i> 
                                             </a></li>
                                    
                            </ul>
                                    
                    </div>
            </div>
        
             <div className='col-sm-6 bg-secondary text-light'>
                 <h2>Crimson Manufacturing 
                    <hr className='bg-light'/>
                    <br/> Gets the job done!
                         <br/>Efficient, reliable and innovative.
                         <img src={home} alt='' className='rounded-circle mt-5' width='230px' height='180px'/>
                            </h2> 

                
              </div> 
        </div>

</>
  )
}
