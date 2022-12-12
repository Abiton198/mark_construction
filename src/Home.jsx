import React from 'react'

export default function Home() {
  return (
    <div className='home'>
     
        {/* button to trigger the modal */}
        <button className='btn btn-primary mt-4 ml-1' data-toggle='modal' data-target='#myModal'>
            Launch Modal
        </button>

{/* modal box with a fade, pop-up message when one visit the page */}
    <div className='modal fade' id='myModal'>
        
        <div className='modal-dialog'>
            <div className='modal-content'>

                <div className='modal-header'>
                    <h5 className='modal-title'>Why consider Crimson Manufacturing?</h5>
                        <button type='button' className='close' data-dismiss='modal'></button>
                            </div>
                                 
               <div className='modal-body'>
                    <p>This website you are viewing was build in support of Mandara Foundation which looks after orphans welfare,
                        supporting Crimson Manufacturing in business is a way to put a hand in the Foundation.  </p>
                            </div>

                <div className='modal-footer'>
                    <button className='btn btn-primary' data-dismiss='modal'>cancel</button>
                        </div>
            </div>
        </div>
    </div>

    <div className='text'>
        <p className='text-light'>The modern innovations in Manufacturing</p>

    </div>
    </div>
  )
}
