import React from "react";
function Signup() {
  return (
    <>
      <div className="container   mt-5 p-5 ">
        <div className="row">
          <div className="col-lg-6 col-sm-12 mt-5 ml-5">
            <img
              src="/media/images/signup.png"
              alt=""
              style={{ width: "90%" }}
            />
          </div>
          <div className="col-lg-6 col-sm-12 p-5 ml-5">
            <h2>Signup now</h2>
            <p className="text-muted mt-1">
              Or track your existing application
            </p>
            <label htmlFor="phoneNo">Mobile number</label>
            <br />
            <input
              type="text"
              name="number"
              id="phoneNo"
              className=" mb-3"
              style={{ width: "60%" }}
            />

            <p className="text-muted">You will receive an OTP on your number</p>
            <button
              className="p-1  mt-1 btn btn-primary fs-5  text-center"
              style={{ width: "27%", margin: " 0 auto", borderRadius: "2px" }}
            >
              Continue
            </button>
            <br />
            <a style={{ textDecoration: "none" }} href="#">
              Want to open an NRI account?
            </a>
          </div>
        </div>

        <div className="row text-center p-3" style={{ fontSize: "13px" }}>
          <p className="text-muted mt-2 ">
            I authorise TradeNavigator to contact me even if my number is
            registered on DND. I authorise TradeNavigator to fetch my KYC
            information from the C-KYC registry with my PAN. Please visit{" "}
            <span style={{ color: "#387ed1" }}>this article</span> to know more.
          </p>
          <p className="text-muted mt-2">
            If you are looking to open a HUF, Corporate, Partnership, or NRI
            account, you have to use the{" "}
            <span style={{ color: "#387ed1" }}>offline forms</span>. For help,{" "}
            <span style={{ color: "#387ed1" }}>click here</span> .{" "}
          </p>
        </div>
      </div>
    </>
  );
}

export default Signup;
