import React from 'react';

function Hero() {
    return ( 
        <>
            <div className='container '>
                <h1 className='text-center fs-3 mt-5 ' style={{paddingTop:"50px"}}>Charges</h1>
                <p className='text-center fs-4 text-muted '>List of all charges and taxes</p>
            <div className='row p-5 mb-5'>
                <div className='col-4'>
                    <img className='img-fluid mx-auto d-block' style={{width:"60%"}} src='media/images/pricing-eq (1).svg' alt='pricing_image'/>
                <h1 className='text-center fs-2'>Free equity delivery</h1>
                <p className='text-center mt-3'>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className='col-4'>
                    <img className='img-fluid mx-auto d-block' style={{width:"60%"}} src='media/images/other-trades (1).svg' alt='pricing_image'/>
                    <h1 className='text-center fs-2'>Intraday and F&O trades</h1>
                    <p  className='text-center mt-3'>Flat ₹ 20 or 0.03% (whichever is lower) per<br></br> executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
                <div className='col-4'>
                    <img className='img-fluid mx-auto d-block' style={{width:"60%"}} src='media/images/pricing-eq (1).svg' alt='pricing_image'/>
                    <h1 className='text-center fs-2'>Free direct MF</h1>
                    <p className='text-center mt-3'>All direct mutual fund investments are<br></br> absolutely free — ₹ 0 commissions & DP<br></br> charges.</p>
                </div>
            </div>
            </div>
        </>
    )
}

export default Hero;