import { Link, useNavigate } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { MdEmail, MdLock } from "react-icons/md";
import { GoPersonFill } from "react-icons/go";
import "./style.css";
import InitLayout from "../../components/Layout/InitLayout";
import { useState } from "react";
const SignUp = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [data, setData] = useState("");

  const navigate = useNavigate();

  const backendURL = "https://evote-fq0h.onrender.com/evote/api/v1";
  // const backendURL = "http://localhost:8080";
  console.log(fullName, email, password);

  const handleSignUp = async (e) => {
    console.log("just");
    e.preventDefault();
    if (password !== confirmPassword) {
      // Passwords do not match, handle accordingly (show error, etc.)
      console.log("Passwords do not match");
      return;
    }

    try {
      const response = await fetch(`${backendURL}/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ fullname: fullName, email, password }),
      });
      console.log("just2");

      if (response.ok) {
        const responseData = await response.json();
        console.log(responseData);
        setData("Register Successfully");
        navigate("/login");
      }
    } catch (error) {
      console.log("Error fetching data:", error);
      setData("Something went wrong");
    }
  };

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
                  <div className="det-ls">{data}</div>
                  <form action="" onSubmit={handleSignUp}>
                    <div className="lab-inp rel-inp">
                      <div className="left-icon">
                        <GoPersonFill />
                      </div>
                      <input
                        type="text"
                        className="inp cen"
                        placeholder="FULL NAME"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
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
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
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
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
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
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
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
                      <button className="l-btn" type="submit">
                        CREATE ACCOUNT
                      </button>
                    </div>
                  </form>
                  <div className="already" id="dont">
                    Already have account ?{" "}
                    <Link to={"/login"} className="alr-link">
                      Sign In
                    </Link>{" "}
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
