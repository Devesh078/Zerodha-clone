import React from 'react';

function PricingPage() {
    return ( 
        <div className='container mb-5'>
            <div className='row '>
                <div className='col-6 '>
                    <h1 className='mb-3 '>Unbeatable pricing</h1>
                    <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a href='' className='' style={{textDecoration:"none"}}>See pricing </a>
                </div>
                <div className='col-6 '>
                    <div className='row'>
                        {/* 1st Item */}
                        <div className='col-4'>
                            <img src='media/images/pricing0.svg' className='mb-2' width={120} />
                            <p className='fw-semibold m-0'>Free account</p>
                            <p className='m-0'>opening</p>
                        </div>
                         {/* 2nd Item */}
                        <div className='col-4'>
                            <img src='media/images/pricing0.svg' className='mb-2' width={120} />
                            <p className='fw-semibold m-0'>Free equity</p>
                            <p className='m-0'>delivery &</p>
                            <p className='m-0'>direct mutual funds</p>
                        </div>

                          {/* 3rd Item */}
                        <div className='col-4'>
                            <img src='media/images/other-trades.svg' className='mb-2' width={120} />
                            <p className='fw-semibold m-0'>₹20 Intraday &</p>
                            <p className='m-0'>F&O</p>
                        </div>

                    </div>
                </div>
            </div>

        </div>
     );
}

export default PricingPage;