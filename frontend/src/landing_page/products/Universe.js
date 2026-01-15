import React from 'react';
import { useNavigate } from "react-router-dom";
function Universe() {
    const navigate = useNavigate();
    return ( 
        <>
            <div className='container p-5'>
                <div className='row p-3'>
                <h1 className='fs-5 text-center text-muted mt-5' style={{fontWeight:"inherit"}}>Want to know more about our technology stack? Check out the <a href=''style={{textDecoration:"none"}}>Zerodha.tech</a> blog.</h1>
                <h1 className='text-center text-muted fs-4 mt-5 mb-3'> The Zerodha Universe</h1>
                <p className='text-center mt-3 fs-6'>Extend your trading and investment experience even further with our partner platforms</p>
                
                    <div className='col-4 p-4'>
                        <img className='img-fluid mx-auto d-block'src='media/images/zerodhaFundhouse.png' style={{width:"50%"}}/>
                        <p className='mt-3 text-center text-muted text-small'>Our asset management venture that is creating simple and transparent index funds to help you save for your goals.</p>
                    </div>
                    <div className='col-4 p-4'>
                        <img className='img-fluid mx-auto d-block'src='media/images/sensibullLogo.svg' style={{width:"70%"}}/>
                        <p className='mt-3 text-center text-muted text-small'>Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more.</p>
                    </div>
                    <div className='col-4 p-4'>
                        <img className='img-fluid mx-auto d-block'  src='media/images/tijori.svg' style={{width:"50%"}}/>
                        <p className='mt-3 text-center text-muted text-small'>Investment research platform that offers detailed insights on stocks, sectors, supply chains, and more.</p>
                    </div>
                    <div className='col-4 p-4'>
                        <img className='img-fluid mx-auto d-block' src='media/images/streakLogo.png' style={{width:"60%"}}/>
                        <p className='mt-3 text-center text-muted text-small'>Systematic trading platform that allows you to create and backtest strategies without coding.</p>
                    </div>
                    <div className='col-4 p-4'>
                        <img className='img-fluid mx-auto d-block' src='media/images/smallcase-logo.png' style={{width:"60%"}}/>
                        <p className='mt-3 text-center text-muted text-small'>Thematic investing platform that helps you invest in diversified baskets of stocks on ETFS.</p>
                    </div>
                    <div className='col-4 p-4'>
                        <img className='img-fluid mx-auto d-block' src='media/images/ditto-logo.png' style={{width:"40%"}}/>
                        <p className='mt-3 text-center text-muted text-small'>Personalized advice on life and health insurance. No spam and no mis-selling.</p>
                    </div>
                    <button className='p-3 btn btn-primary fs-5 mb-5' 
                    style={{width:"20%",margin:"0 auto"}} onClick={() => navigate("/signup")}>Sign up for free</button>
                </div>
            </div>
        </>
     );
}

export default Universe;