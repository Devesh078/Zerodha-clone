import React from 'react';

function LeftSection({imageURL, productName, productDescription, tryDemo, learnMore, googlePlay, appStore}) {
    return ( 
       <div className='container mt-5'>
        <hr className='mt-5'></hr>
            <div className='row'>
                <div className='col-6'>
                    <img src={imageURL} className='p-5'/>
                </div>
                <div className='col-6 p-5 mt-5'>
                    <h1 className='fs-3'>{productName}</h1>
                    <p>{productDescription}</p>
                    <div className=''>
                        <a style={{textDecoration:"none"}}  href={tryDemo}>Try demo</a>
                        <a style={{textDecoration:"none" ,marginLeft:"50px"}}href={learnMore}>learnMore</a>
                    </div>
                   <div className='mt-3'>
                        <a href={googlePlay}><img src='media/images/googlePlayBadge.svg'/></a>
                        <a href={appStore}><img src='media/images/appstoreBadge.svg' style={{marginLeft:"50px"}}/></a>
                   </div>
                </div>
            </div>
       </div>
     );
}

export default LeftSection;