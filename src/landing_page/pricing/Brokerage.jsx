import React from 'react';

function Brokerage() {
    return ( <>
   <div className="conatiner mt-5">
    <div className="row text-center mt-5">
        <div className="col-lg-6 col-sm-12 mt-4">
            <a href="#" style={{textDecoration:"none",fontSize:"24px",color:"#387ed1"}}>Brokerage calculator</a>
        </div>
        <div className="col-lg-6 col-sm-12 mt-4">
            <a href="#" style={{textDecoration:"none",fontSize:"24px",color:"#387ed1"}}>List of charges</a>
        </div>
    </div>
    <div className="row p-4">

        <ul className='text-muted m-5 ' style={{fontSize:"13px"}}>
            <li>Call & Trade and RMS auto-squareoff: Additional charges of ₹50 + GST per order.</li>
            <li>Digital contract notes will be sent via e-mail.</li>
            <li>Physical copies of contract notes, if required, shall be charged ₹20 per contract note. Courier charges apply.</li>
            <li>For NRI account (non-PIS), 0.5% or ₹100 per executed order for equity (whichever is lower).</li>
            <li>For NRI account (PIS), 0.5% or ₹200 per executed order for equity (whichever is lower).</li>
            <li>If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.</li>
          
        </ul>
    </div>
   </div>
    </> );
}

export default Brokerage;