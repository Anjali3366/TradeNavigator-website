import React from "react";
function Hero() {
  return (
    <>
      <div className="container mt-5">
        <div className="row mt-5 ">
          <h2 className="text-center mt-5 mb-4">
            We pioneered the discount broking model in India.
          </h2>
          <h2 className="text-center mb-5">
            Now, we are breaking ground with our technology.
          </h2>
          <hr />
          <div className="row">
            <div className="col-lg-6 col-sm-12 mt-5">
              <p className="mt-4" style={{ lineHeight: "1.8" }}>
                We kick-started operations on the 15th of August, 2010 with the
                goal of breaking all barriers that traders and investors face in
                India in terms of cost, support, and technology. We named the
                company TradeNavigator, a combination of Zero and "Rodha", the
                Sanskrit word for barrier.
                <br />
                <br />
                Today, our disruptive pricing models and in-house technology
                have made us the biggest stock broker in India.
                <br />
                Over 1+ Crore clients place millions of orders every day through
                our powerful ecosystem of investment platforms, contributing
                over 15% of all Indian retail trading volumes.
              </p>
            </div>
            <div className="col-lg-6 col-sm-12 mt-5">
              <p className="mt-4" style={{ lineHeight: "1.8" }}>
                In addition, we run a number of popular open online educational
                and community initiatives to empower retail traders and
                investors.
                <br />
                <br />
                <span style={{ color: "#387ed1" }}>Rainmatter</span>, our
                fintech fund and incubator, has invested in several fintech
                startups with the goal of growing the Indian capital markets.
                <br />
                <br />
                And yet, we are always up to something new every day. Catch up
                on the latest updates on our{" "}
                <span style={{ color: "#387ed1" }}>blog</span> or see what the
                media is{" "}
                <span style={{ color: "#387ed1" }}>saying about us</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
