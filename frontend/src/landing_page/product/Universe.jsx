import React from "react";

function Universe() {
  return (
    <>
      <div className="container mt-5">
        <div className="row text-center">
          <h1 className="text-muted mt-2 mb-4">The TradeNavigator Universe</h1>
          <p>
            Extend your trading and investment experience even further with our
            partner platforms
          </p>

          <div className="row p-4">
            <div className="row">
              <div className="col-lg-4 col-sm-12 p-4">
                <img
                  src="/media/images/smallcaseLogo.png"
                  style={{ width: "40%" }}
                  alt=""
                />
                <p className="text-muted">Thematic investment platform</p>
              </div>
              <div className="col-lg-4 col-sm-12 p-4">
                <img
                  src="/media/images/streakLogo.png"
                  style={{ width: "32%" }}
                  alt=""
                />
                <p className="text-muted">Algo & strategy platform</p>
              </div>
              <div className="col-lg-4 col-sm-12 p-4">
                <img
                  src="/media/images/sensibullLogo.svg"
                  style={{ width: "45%" }}
                  alt=""
                />
                <p className="text-muted">Options trading platform</p>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-sm-12 p-4">
                <img
                  src="/media/images/TradeNavigatorFundhouse.png"
                  alt=""
                  style={{ width: "40%" }}
                />
                <p className="text-muted">Asset management</p>
              </div>
              <div className="col-lg-4 col-sm-12 p-4">
                <img
                  src="/media/images/tijori.svg"
                  alt=""
                  style={{ width: "31%" }}
                />
                <p className="text-muted">Fundamental research platform</p>
              </div>
              <div className="col-lg-4 col-sm-12 p-4">
                <img
                  src="/media/images/dittoLogo.png"
                  alt=""
                  style={{ width: "32%" }}
                />
                <p className="text-muted">Insurance</p>
              </div>
            </div>
            <div className="row">
              <button
                className="p-1 btn btn-primary fs-5 mb-5"
                style={{ width: "18%", margin: " 0 auto", borderRadius: "4px" }}
              >
                Sign up now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Universe;
