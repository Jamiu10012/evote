import { Link, useNavigate } from "react-router-dom";
import "./style.css";
import InitLayout from "../../components/Layout/InitLayout";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState("");
  const navigate = useNavigate();

  const backendURL = "https://evote-fq0h.onrender.com/evote/api/v1";
  // const backendURL = "http://localhost:8080";

  console.log(email, password);
  const handleSignin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${backendURL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log(responseData);
        setData("Login Successfully");
        toast.success("Login Successfully!!!");
        localStorage.setItem("authToken", responseData.accessToken);
        navigate("/dashboard");
      }
    } catch (error) {
      console.log("Error fetching data:", error);
      setData("Something went wrong");
      toast.error(error);
    }
  };
  return (
    <>
      <InitLayout>
        <div className="login-container">
          <div className="home-box exp">
            <div className="rig-lef-con">
              <div className="left-side-home ali">
                <h1 className="home-welcome">
                  Welcome to <span>e</span>Vote!
                </h1>
                <h1>Seamless and Secure Platform!!!</h1>
              </div>
              <div className="right-side">
                <div className="login-con">
                  <h2 className="back">WELCOME BACK!</h2>
                  <div className="det-ls">{data}</div>
                  <form action="" onSubmit={handleSignin}>
                    <div className="lab-inp">
                      <label htmlFor="">EMAIL</label>
                      <input
                        type="text"
                        className="inp"
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="lab-inp">
                      <label htmlFor="">Password</label>
                      <input
                        type="password"
                        className="inp"
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    <div className="fo-rem">
                      <div className="rember-inp">
                        <input type="checkbox" name="" id="" />
                        <div className="rem-txt">Remember me</div>
                      </div>
                      <Link to={"/"} className="alr-link">
                        <div className="forgot">Forgot password ?</div>
                      </Link>
                    </div>
                    <div className="lo-btn join-us-btn ">
                      {/* <Link to={"/dashboard"}> */}
                      <button className="l-btn" type="submit">
                        LOG IN
                      </button>
                      {/* </Link> */}
                    </div>
                    <ToastContainer />
                  </form>
                  <div className="already" id="dont">
                    Don’t have an account ?{" "}
                    <Link to={"/signup"} className="alr-link ">
                      Sign Up
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
      </InitLayout>
    </>
  );
};

export default Login;
