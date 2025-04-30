import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../store/AuthContext.jsx";
export default function Login() {
  const navigate = useNavigate();
  const { isLogged, setIsLogged } = useContext(AuthContext);
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  // console.log(isLogged);
  const { email, password } = loginData;

  function handleOnChange(event) {
    const { name, value } = event.currentTarget;
    setLoginData((preVal) => {
      return { ...preVal, [name]: value };
    });
  }
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-right",
    });
  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:3002/login",
        {
          ...loginData,
        },
        { withCredentials: true }
      );
      console.log(data);
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        setIsLogged(true);
        setTimeout(() => {
          console.log("you are logged In");
          navigate("/");
        }, 1000);
      }
    } catch (error) {
      console.log(error);
    }
    setLoginData({
      ...loginData,
      email: "",
      password: "",
    });
  }
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
          <div className="col-lg-6 col-sm-12 mt-5 ml-5">
            <h2>Login</h2>
            <form action="/login" method="POST" onSubmit={handleSubmit}>
              <label htmlFor="email">Email</label>
              <br />
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={handleOnChange}
                required
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
                onChange={handleOnChange}
                required
                className=" mb-3"
                style={{ width: "60%" }}
              />
              <br />
              <button
                className="p-1  mt-1 btn btn-primary fs-5  text-center"
                style={{ width: "27%", margin: " 0 auto", borderRadius: "2px" }}
              >
                Continue
              </button>
              <div className="row">
                <a style={{ textDecoration: "none" }} href="/signup">
                  Don't you have an account? <b>Create Account</b>
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
