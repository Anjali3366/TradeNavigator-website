import React from 'react';

function Hero() {
    return ( <>
   <div className="container mt-5 mb-5">
    <div className="row text-center mt-5 p-4">
        <h1 style={{fontSize:"50px"}} className='p-4'>Pricing</h1>
    
        <h5> Free equity investments and flat ₹20 intraday and F&O trades</h5>
    </div>

    <div className="row mt-5 mb-5 p-5">

        <div className="col-lg-4 col-sm-12 mt-5 text-center">
            <img style={{width:"45%"}} src="/media/images/pricing0.svg" alt="" />
            <h4>Free equity delivery</h4>
            <p>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
        </div>
        <div className="col-lg-4 col-sm-12 mt-5 text-center">
            <img  style={{width:"45%"}} src="/media/images/intradayTrades.svg" alt="" />
            <h4>Intraday and F&O trades</h4>
            <p>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
        </div>
        <div className="col-lg-4 col-sm-12  mt-5 text-center">
            <img style={{width:"45%"}} src="/media/images/pricingEquity.svg" alt="" />
            <h4>Free direct MF</h4>
            <p>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
        </div>
    </div>
   </div>
    
    
    </> );
}

export default Hero;