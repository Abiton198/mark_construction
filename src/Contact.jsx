import React from 'react'
import home from './img/home.jpg'

export default function Contact() {
  return (
   
<>
        
        <div className='row'>
            <div className='col-sm-6 bg-light text-justify'>
                <p className='contact-message'> 
                    If you would like to explore the idea
                    of working with Crimson Manufacturing SA, feel free to get in touch on
                     our various platforms today.
                        </p>

                    <h6 className='font-weight-bold'>Find Us:
                        <br/><i className="fa-sharp fa-solid fa-location-dot m-2 "></i>Gedults River, St Albans, Gqeberha, SA  
                            <br/> <i className="fa-solid fa-phone m-2"></i>076 872 1584
                            <br/> <i className="fa-regular fa-envelope m-2"></i> 01dupreez@gmail.com
                                <br/><i class="fa-solid fa-magnifying-glass m-2"></i>www.crimsonmanufacturing.co.za
                                    </h6>

                    <div className='social'>
                            <ul className="row">
                                                                
                                 <li className="col">
                                    <a className="whatsapp" href="#">
                                        <i className="fab fa-whatsapp"></i>
                                             </a></li>
                                                                    
                                <li className="col">
                                    <a className="twitter" href="#">
                                        <i className="fab fa-twitter"></i>
                                             </a></li>
                                                                    
                                <li className="col">
                                    <a className="github" href="#">
                                        <i className="fab fa-github"></i>  
                                            </a></li>
                                    
                                <li className='col'>
                                    <a className='linked-in' href='#'>
                                        <i className="fab fa-linkedin"></i> 
                                             </a></li>
                                    
                            </ul>
                                    
                    </div>
            </div>
        
             <div className='col-sm-6 bg-dark text-light'>
                 <h2>Crimson Manufacturing 
                    <hr className='bg-light'/>
                    <br/> Gets the job done!
                         <br/>efficient, reliable and innovative!
                            </h2> 
              </div> 
        </div>

</>
  )
}
