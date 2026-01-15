import React from 'react';

function Team() {
    return ( 
        <div className='container'>
            <div className='row p-5 mt-5  border-top'>
                <h1 className='text-center mt-5 '>People</h1>
            </div>

            <div className="row p-5  text-muted"
            style={{lineHeight:"1.8", fontSize:"1.2em"}}
            >
            <div className='col-6 p-3 text-center'>
                <img src='media/images/devesh.jpg' 
                style={{width:"75%",borderRadius:"100%"}}/>

                <h4 className='mt-5'>Devesh Ganji</h4>
                <h6 className='text-muted fs-6'>Founder, CEO</h6>
            </div>
            <div className='col-6 p-5 '>
                <p>Devesh is a Computer Engineering student passionate about building real-world fintech platforms and real-time trading systems.</p>

                <p>He created a live NSE trading terminal inspired by Zerodha, featuring real-time market feeds, smart authentication, portfolio allocation analytics, and production-grade backend architecture. His work focuses on building applications that behave like real financial systems — not just UI clones.</p>

                <p>Devesh believes in designing software that feels alive, scalable, and product-ready, and he actively works on fintech dashboards, real-time data engines, and secure authentication flows.</p>

                <p>His goal is to work as a Software Engineer in a fintech or product-based company, contributing to scalable, secure, and high-performance trading platforms.</p>

                <p>Connect on <a href='https://www.linkedin.com/in/devesh-ganji-b63653370/' style={{textDecoration:"none"}}>Linkedin</a> / <a href='https://github.com/Devesh078'  style={{textDecoration:"none"}}>Github</a></p>
            </div>

            </div>
        </div>
     );
}

export default Team;