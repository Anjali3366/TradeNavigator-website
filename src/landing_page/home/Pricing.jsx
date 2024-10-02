import React from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
function Pricing() {
    return ( <>
<div className="container mt-5">
    <div className="row">
        <div className="col-lg-6 col-sm-12">

            <h2>Unbeatable pricing</h2>
            <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
            <p><a style={{textDecoration:"none"}} href="#">See pricing  <ArrowForwardIcon fontSize='small'/></a></p>
        </div>



        <div className="col-lg-6 col-sm-12">
        <div className="row">
            <div className="col-lg-6 col-sm-12 p-4"  style={{border:"1px solid gray" , borderRadius:"4px"}} >
                <h1 className='text-center'>0</h1>
                <p className='text-center'>Free equity delivery and direct mutual funds</p>

            </div>
            <div className="col-lg-6 col-sm-12 p-4" style={{border:"1px solid gray", borderRadius:"4px"}}>
                <h1 className='text-center'>20</h1>
                <p className='text-center'>Intraday and F&O</p>
                </div>
        </div>
        </div>
    </div>
</div>
    
    
    </> );
}

export default Pricing;