import React from 'react';

function Education() {
    return ( 
        <div className='container p-5'>
            <div className='row'>
                <div className='col-6'>
                    <img src='media/images/education.svg' alt='education_image' style={{width:"65%"}}/>
                </div>
                <div className='col-6'>
                    <h1 className='fs-3 '>Free and open market education</h1>
                    <p className='my-4'>Varsity, the largest online stock market education book in the world<br></br> covering everything from the basics to advanced trading.</p>
                    <a className='mt-2' href='' style={{textDecoration:"none"}}>Varsity <span class="material-symbols-outlined">arrow_forward</span></a>

                    <p className='my-4'>TradingQ&A, the most active trading and investment community in<br></br> India for all your market related queries.</p>
                    <a href='' style={{textDecoration:"none"}}>TradingQ&A <span class="material-symbols-outlined">arrow_forward</span></a>
                </div>

            </div>

        </div>
     );
}

export default Education;