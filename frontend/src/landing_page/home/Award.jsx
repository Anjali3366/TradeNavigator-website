import React from "react";

function Award() {
  return (
    <>
      <div className="container p-5 mb-5 ">
        <div className="row">
          <div className="col-lg-6 col-sm-12">
            <img src="media/images/largestBroker.svg" alt="" />
          </div>
          <div className="col-lg-6 col-sm-12">
            <h2 className="mt-4">Largest stock broker in India</h2>
            <p className="mt-4">
              1.5+ Crore TradeNavigator clients contribute to over 15% of all
              retail order volumes in India daily by trading and investing in:
            </p>
            <div className="row mt-4">
              <div className="col-lg-6 col-sm-12 p-3">
                <ul>
                  <li>
                    <p>Futures and Options</p>
                  </li>
                  <li>
                    <p>Commodity derivatives</p>
                  </li>
                  <li>
                    <p>Currency derivatives</p>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6 col-sm-12 p-3">
                <ul>
                  <li>
                    <p>Stocks & IPOs</p>
                  </li>
                  <li>
                    <p>Direct mutual funds</p>
                  </li>
                  <li>
                    <p>Bonds and Govt. Securities</p>
                  </li>
                </ul>
              </div>

              <img
                src="media/images/pressLogos.png"
                alt=""
                style={{ width: "90%" }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Award;
