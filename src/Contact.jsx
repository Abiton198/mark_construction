import React from 'react'
import home from './img/home.jpg'

export default function Contact() {
  return (
   
<>
        
        <div className='row'>
            <div className='col-sm-6 bg-light text-justify'>
                <p className='contact-message'> 
                    If you would like to explore the idea
                    of working with Mark du Preez Construction SA, feel free to get in touch on our various platforms today.
                    </p>
                    <h6 className='font-weight-bold'>We are located at number <br/>35 Cape Road, Qherbega, SA</h6>

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
        
             <div className='col-sm-6 bg-success'>
                 <h2>Mark du Preez Contractors <br/>
                  <hr/>
                 Getting the job done, efficient, reliable and cost effective
                </h2> 
                 
             </div> 
        </div>

</>
  )
}
