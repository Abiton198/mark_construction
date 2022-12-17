import React from 'react'
import curr1 from '../img/curr1.jpeg'
import curr2 from '../img/curr2.jpeg'
import curr3 from '../img/curr3.jpeg'
import curr4 from '../img/curr4.jpeg'
import curr5 from '../img/curr5.jpeg'
import curr6 from '../img/curr6.jpeg'


export default function Current() {
  return (


    <div className='row p-5'>
                     <div className='col-sm-4'>
                        <img src={curr1} alt='' className='' width='350px' height='300px'/>
                            <p className='p-3 text-dark'> Fire places </p>
                                 </div> 

                    <div className='col-sm-4'>
                        <img src={curr2} alt='' className='' width='350px' height='300px'/>
                            <p className='p-3 text-dark'>Chimneys</p>
                                </div>

                    <div className='col-sm-4'>
                        <img src={curr3} alt='' className='' width='350px' height='300px'/>
                            <p className='p-3 text-dark'>Fire places</p>
                                 </div>

                    <div className='col-sm-4'>
                        <img src={curr4} alt='' className='' width='350px' height='300px'/>
                            <p className='p-3 text-dark'>Fire places</p>
                                 </div> 

                    <div className='col-sm-4'>
                        <img src={curr5} alt='' className='' width='350px' height='300px'/>
                            <p className='p-3 text-dark'>Chimneys</p>
                                 </div>

                    <div className='col-sm-4'>
                        <img src={curr6} alt='' className='' width='350px' height='300px'/>
                            <p className='p-3 text-dark'>Chimneys</p>
                                 </div> 


    </div>
  
  )
}

