import React from 'react';

function LeftSection({imgUrl,heading, description , btnName1,btnName2,iconImg1, iconImg2, link1, link2}) {
    return ( <>
<div className="container mt-5">
    <div className="row">
        <div className="col-lg-7 col-sm-12">
            <img src={imgUrl} alt="" />

     </div>
        <div className="col-lg-5 col-sm-12 mt-5 p-5">
            <h2 className='mb-4'>{heading}</h2>
            <p>{description}</p>
           <div className="row mt-2 mb-4">
            <div className="col-4">
            <span><a style={{color:"#387ed1", textDecoration:"none"}} href="#">{btnName1} {link1}</a></span>
            </div>
            <div className="col-8">
            <span><a style={{color:"#387ed1", textDecoration:"none"}} href="#">{btnName2}{link2}</a></span>
            </div>
           </div>
            <div className="row">
                <img src={iconImg1} alt="" style={{width:"32%"}} />
                <img src={iconImg2} alt=""  style={{width:"30%"}} />
            </div>
        </div>
    </div>
</div>
    
</> );
}

export default LeftSection;