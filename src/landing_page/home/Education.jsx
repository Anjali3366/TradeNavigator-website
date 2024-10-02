import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
function Education() {
  return (
    <>
      <div className="container mt-5 pt-5">
        <div className="row">
          <div className="col-lg-6 col-sm-12">
            <img src="media/images/education.svg" alt="" />
          </div>
          <div className="col-lg-6 col-sm-12">
            <h3 className="mt-5 mb-4">Free and open market education</h3>
            <p>
              Varsity, the largest online stock market education book in the
              world covering everything from the basics to advanced trading.
            </p>
            <p>
              <a
                href="https://TradeNavigator.com/varsity/"
                style={{ textDecoration: "none" }}
              >
                varsity <ArrowForwardIcon fontSize="small" />
              </a>
            </p>
            <p>
              TradingQ&A, the most active trading and investment community in
              India for all your market related queries.
            </p>
            <p>
              <a
                style={{ textDecoration: "none" }}
                href="https://tradingqna.com/"
              >
                TradingQ&A <ArrowForwardIcon fontSize="small" />
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Education;
