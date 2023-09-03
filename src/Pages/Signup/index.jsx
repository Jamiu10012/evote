import { Link } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { MdEmail, MdLock } from "react-icons/md";
import { GoPersonFill } from "react-icons/go";
import "./style.css";
import InitLayout from "../../components/Layout/InitLayout";
import { useState } from "react";
const SignUp = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  return (
    <>
      <InitLayout>
        <div className="login-container">
          <div className="home-box ">
            <div className="rig-lef-con">
              <div className="left-side-home ali">
                <h1 className="home-welcome">
                  Welcome to <span>e</span>Vote!
                </h1>
                <h1>Seamless and Secure Platform!!!</h1>
              </div>
              <div className="right-side">
                <div className="login-con">
                  <h2 className="back">LET’S GET STARTED</h2>
                  <form action="">
                    <div className="lab-inp rel-inp">
                      <div className="left-icon">
                        <GoPersonFill />
                      </div>
                      <input
                        type="text"
                        className="inp cen"
                        placeholder="FULL NAME"
                      />
                    </div>
                    <div className="lab-inp rel-inp">
                      <div className="left-icon">
                        <MdEmail />
                      </div>
                      <input
                        type="email"
                        className="inp cen"
                        placeholder="EMAIL"
                      />
                    </div>
                    <div className="lab-inp rel-inp">
                      <div className="left-icon">
                        <MdLock />
                      </div>
                      <input
                        type={passwordVisible ? "text" : "password"}
                        className="inp cen"
                        placeholder="PASSWORD"
                      />
                      <div
                        className="rigt-icon"
                        onClick={togglePasswordVisibility}
                      >
                        {passwordVisible ? (
                          <AiFillEyeInvisible />
                        ) : (
                          <AiFillEye />
                        )}
                      </div>
                    </div>
                    <div className="lab-inp rel-inp">
                      <div className="left-icon">
                        <MdLock />
                      </div>
                      <input
                        type={passwordVisible ? "text" : "password"}
                        className="inp cen"
                        placeholder="CONFIRM PASSWORD"
                      />
                      <div
                        className="rigt-icon"
                        onClick={togglePasswordVisibility}
                      >
                        {passwordVisible ? (
                          <AiFillEyeInvisible />
                        ) : (
                          <AiFillEye />
                        )}
                      </div>
                    </div>

                    <div className="lo-btn join-us-btn ">
                      <button className="l-btn">CREATE ACCOUNT</button>
                    </div>
                  </form>
                  <div className="already" id="dont">
                    Don’t have an account ?{" "}
                    <Link className="alr-link">Sign Up</Link>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </InitLayout>
    </>
  );
};

export default SignUp;
