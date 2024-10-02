import React from "react";
function OpenAccount() {
  return (
    <>
      <div className="container">
        <div className="row">
          <h1 className="text-center p-3 mt-4">
            Open a TradeNavigator account
          </h1>
          <p className="text-center p-3">
            Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
            F&O trades.
          </p>
          <button
            className="p-1 btn btn-primary fs-5 mb-5"
            style={{ width: "18%", margin: " 0 auto" }}
          >
            Sign up now
          </button>
        </div>
      </div>
    </>
  );
}

export default OpenAccount;
