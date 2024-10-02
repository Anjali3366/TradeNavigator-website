import React from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
function Hero() {
    return ( <>
<div className="container m-5 p-5">
  <div className="row text-center">
  <h1>Technology</h1>
  <p className='fs-4'>Sleek, modern, and intuitive trading platforms</p>
  <p>Check out our <span><a href="#"  style={{color:"#387ed1", textDecoration:"none"}}>investment offerings <ArrowForwardIcon fontSize='small'/></a></span> </p>
  </div>
</div>
    
    </> );
}

export default Hero;