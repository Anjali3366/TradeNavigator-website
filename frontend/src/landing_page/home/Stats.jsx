import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

function Stats() {
  return (
    <>
      <div className="containe mb-5 p-5 ">
        <div className="row">
          <div className="col-lg-6 col-sm-12 p-5 ml-2">
            <h2>Trust with Confidence</h2>

            <h5 className="mt-5">Customer-first always</h5>
            <p className="mt-3 text-muted">
              That's why 1.5+ crore customers trust TradeNavigator with ₹4.5+
              lakh crores worth of equity investments.
            </p>

            <h5 className="mt-5">No spam or gimmicks</h5>
            <p className="mt-3 text-muted">
              No gimmicks, spam, "gamification", or annoying push notifications.
              High quality apps that you use at your pace, the way you like.
            </p>

            <h5 className="mt-5">The TradeNavigator universe</h5>
            <p className="mt-3 text-muted">
              Not just an app, but a whole ecosystem. Our investments in 30+
              fintech startups offer you tailored services specific to your
              needs.
            </p>

            <h5 className="mt-5">Do better with money</h5>
            <p className="mt-3 text-muted">
              With initiatives like{" "}
              <span style={{ color: "#387ed1" }}>Nudge</span> and{" "}
              <span style={{ color: "#387ed1" }}>Kill Switch</span>, we don't
              just facilitate transactions, but actively help you do better with
              your money.
            </p>
          </div>

          <div className="col-lg-6 col-sm-12">
            <img
              style={{ width: "90%" }}
              src="media/images/ecosystem.png"
              alt=""
            />
            <div className="text-center">
              <a className="mx-5" style={{ textDecoration: "none" }} href="">
                Explore our products <ArrowForwardIcon fontSize="small" />
              </a>
              <a className="mx-5" style={{ textDecoration: "none" }} href="#">
                Try Kite demo <ArrowForwardIcon fontSize="small" />{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Stats;
