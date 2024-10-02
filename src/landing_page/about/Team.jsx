import React from "react";
function Team() {
  return (
    <>
      <div className="container ">
        <div className="row">
          <h2 className="text-center mt-5 mb-5">People</h2>
          <div className="col-lg-6 col-sm-12 text-center">
            <img
              className="mt-4"
              style={{ width: "50%", height: "70%", borderRadius: "50%" }}
              src="media/images/anjali.jpg"
              alt=""
            />

            <h5 className="mt-4">Anjali Tomar</h5>
            <p>Founder, CEO</p>
          </div>
          <div className="col-lg-6 col-sm-12 mt-5 p-5">
            <p>
              Anjali bootstrapped and founded TradeNavigator in 2024 to overcome
              the hurdles he faced during his decade long stint as a trader.
              Today, TradeNavigator has changed the landscape of the Indian
              broking industry.
              <br /> <br />
              She is a member of the Web development Committee (WDC).
              <br />
              <br />
              Playing basketball is his zen.
              <br />
              Connect on{" "}
              <span>
                {" "}
                <a
                  href="#"
                  style={{ color: "#387ed1", textDecoration: "none" }}
                >
                  Homepage
                </a>{" "}
              </span>{" "}
              /{" "}
              <span>
                {" "}
                <a
                  href="#"
                  style={{ color: "#387ed1", textDecoration: "none" }}
                >
                  TradingQnA
                </a>{" "}
              </span>{" "}
              /{" "}
              <span>
                {" "}
                <a
                  style={{ color: "#387ed1 ", textDecoration: "none" }}
                  href="#"
                >
                  Twitter
                </a>
              </span>
              <br />
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Team;
