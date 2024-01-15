import { useState } from "react";
import VerifyInput from "./verifyInput";
import Done from "./Done";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TwoFactor = ({ handleCloseFactorToggle }) => {
  const [factorToggle, setFactorToggle] = useState(false);
  const [verifyToggle, setVerifyToggle] = useState(false);
  const [isDoneToggle, setIsDoneToggle] = useState(false);
  const token = localStorage.getItem("authToken");

  const handleFactorToggle = () => {
    setFactorToggle(true);
  };
  const handleVerifyToggle = () => {
    setVerifyToggle(true);
  };
  const handleIsDoneToggle = () => {
    setIsDoneToggle(true);
  };
  // const handleCloseFactorToggle = () => {
  //   setFactorToggle(false);
  // };
  const backendURL = "https://evote-fq0h.onrender.com/evote/api/v1";
  // const backendURL = "http://localhost:8080";

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${backendURL}/auth/email-verification`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log(responseData);
        toast.success(responseData.message);
        handleFactorToggle();
      }
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  return (
    <div className="info-right">
      <h1 className="ead">Two-Factor Authentication</h1>
      <div className="info-details padd">
        {isDoneToggle ? (
          <Done handleCloseFactorToggle={handleCloseFactorToggle} />
        ) : (
          <>
            <h1 className="ead nec">Google Authentication App</h1>

            {factorToggle ? (
              <>
                <VerifyInput handleIsDoneToggle={handleIsDoneToggle} />
              </>
            ) : (
              <>
                <h1 className="ead">Set Up Manually</h1>
                <div className="sim-inm ">
                  Click on this to get a code that will you will input into your
                  authentication account to have it enabled
                </div>
                <div className="goto-btn">
                  <button className="go-btn" onClick={handleSubmit}>
                    Get Code
                  </button>
                </div>
              </>
            )}
          </>
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default TwoFactor;

//  {
//    factorToggle ? (
//      <>
//        {verifyToggle ? (
//          <VerifyInput handleIsDoneToggle={handleIsDoneToggle} />
//        ) : (
//          <>
//            <div className="sim-inm">
//              Please type this code into your authentication app
//            </div>
//            <div className="aut-code-con">
//              <div className="aut-code">LKYU LKYU LKYU LKYU</div>
//              <div className="aut-code">LKYU LKYU LKYU LKYU</div>
//            </div>

//            <div className="goto-btn">
//              <button className="go-btn" onClick={handleVerifyToggle}>
//                Verify
//              </button>
//            </div>
//          </>
//        )}
//      </>
//    ) : (
//      <>
//        <h1 className="ead">Set Up Manually</h1>
//        <div className="sim-inm ">
//          Click on this to get a code that will you will input into your
//          authentication account to have it enabled
//        </div>
//        <div className="goto-btn">
//          <button className="go-btn" onClick={handleFactorToggle}>
//            Get Code
//          </button>
//        </div>
//      </>
//    );
//  }
