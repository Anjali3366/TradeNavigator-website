import React from 'react';
function Hero() {
    return ( <>
    
<div className="container-fluid" id = "supportHero">

<div className="pt-5 mt-5 " id="supportWrapper">
  <h4>Support Portal</h4>
  <a href="#"> Track Tickets </a>
</div>

<div className="row p-5 " >
<div className="col-lg-6 col-sm-12 p-5 ml-5 ">
  <h1 className='fs-3'>Search for an answer or browse help topics to create a ticket</h1>
<input type="text" placeholder='Eg:how do i activate F&O, why is my order getting rejected...' />
<br />
<a href="#">Track account opening</a>
<a href="#">Track segment activation</a>
<a href="">Intraday margins</a><br />
<a href="">Kite user manual</a>

</div>
<div className="col-lg-6 col-sm-12 p-5">
  <h1 className='fs-3'>Featured</h1>
  <ol>
    <li><a href="#">MCX market will open at 10 AM [Resolved]</a></li>
    <li><a href="#">
    Surveillance measure on scrips - July 2024</a></li>
  </ol>
</div>
</div>


</div>


  




    </> );
}
 
export default Hero;