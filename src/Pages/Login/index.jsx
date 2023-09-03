import { Link } from "react-router-dom";
import "./style.css";
import InitLayout from "../../components/Layout/InitLayout";
const Login = () => {
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
                  <form action="">
                    <div className="lab-inp">
                      <label htmlFor="">EMAIL or PHONE NUMBER</label>
                      <input type="text" className="inp" />
                    </div>
                    <div className="lab-inp">
                      <label htmlFor="">Password</label>
                      <input type="password" className="inp" />
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
                      <Link to={"/dashboard"}>
                        <button className="l-btn">LOG IN</button>
                      </Link>
                    </div>
                  </form>
                  <div className="already" id="dont">
                    Don’t have an account ?{" "}
                    <Link className="alr-link ">Sign Up</Link>
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
