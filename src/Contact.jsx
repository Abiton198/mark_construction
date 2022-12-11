import React from 'react'
import home from './img/home.jpg'

export default function Contact() {
  return (
   
<>
        
        <div className='row'>
            <div className='col-sm-6 m-0 bg-light text-justify'>
                <p className='contact-message'> 
                    If you would like to explore the idea
                    of working with Mark Du Peez Construction SA, feel free to get in touch.
                    </p>
                    <h6 className='font-weight-bold'>We are located at number <br/>35 Cape Road, Qherbega, SA</h6>

                    <div className='social'>
                    <ul className="row">
                                                                
                                                                <li className="col">
                                                                    <a className="whatsapp" href="https://wa.me/0027761272025">
                                                                        <i className="fab fa-whatsapp"></i>
                                                                    </a></li>
                                                                    
                                                                <li className="col">
                                                                    <a className="twitter" href="https://twitter.com/abitondev?ref_src=twsrc%5Etfw">
                                                                        <i className="fab fa-twitter"></i>
                                                                    </a></li>
                                                                    
                                                                <li className="col">
                                                                    <a className="github" href="https://github.com/Abiton198">
                                                                        <i className="fab fa-github"></i>  
                                                                    </a></li>
                                    
                                                                    <li className='col'>
                                                                    <a className='linked-in' href='https://www.linkedin.com/in/abiton-padera-232a6a9a/'>
                                                                         <i className="fab fa-linkedin"></i> 
                                                                    </a></li>
                                    
                                                            </ul>
                                    
                    </div>
                        </div>
        
            <div className='col-sm-6'>
                <img src={home} alt='' className='image'/>
                    </div>
        </div>

</>
  )
}
