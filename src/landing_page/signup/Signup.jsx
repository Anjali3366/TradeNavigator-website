import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../../store/AuthContext";
import { useContext } from "react";
function Signup() {
  const navigate = useNavigate();
  const { setIsLogged } = useContext(AuthContext);
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const { username, email, password } = userData;

  function handleOnChange(event) {
    const { name, value } = event.currentTarget;
    setUserData((preVal) => {
      return { ...preVal, [name]: value };
    });
  }
  const handleSuccess = (msg) => {
    toast.success(msg, {
      position: "top-right",
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:3002/signup",
        {
          ...userData,
        },
        { withCredentials: true }
      );

      const { success, message } = data;
      if (success) {
        setIsLogged(true);
        handleSuccess(message);
        setTimeout(() => {
          navigate("/");
        }, 1000);
      }
    } catch (error) {
      console.log(error);
    }
    setUserData({
      ...userData,
      email: "",
      password: "",
      username: "",
    });
  };

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
            <form action="/signup" method="POST">
              <label htmlFor="username">User Name </label>
              <br />
              <input
                type="text"
                name="username"
                id="username"
                value={username}
                required
                onChange={handleOnChange}
                className=" mb-3"
                style={{ width: "60%" }}
              />
              <br />
              <label htmlFor="email">Email</label>
              <br />
              <input
                type="email"
                name="email"
                id="email"
                required
                unique
                value={email}
                onChange={handleOnChange}
                className=" mb-3"
                style={{ width: "60%" }}
              />
              <br />
              <label htmlFor="password">Password</label>
              <br />
              <input
                type="password"
                name="password"
                id="password"
                value={password}
                required
                onChange={handleOnChange}
                className=" mb-3"
                style={{ width: "60%" }}
              />
              <br />
              <button
                className="p-1  mt-1 btn btn-primary fs-5  text-center"
                style={{ width: "27%", margin: " 0 auto", borderRadius: "2px" }}
                onClick={handleSubmit}
              >
                Continue
              </button>
            </form>
            <br />
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
