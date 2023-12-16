import { useState } from "react";

const VerifyInput = ({ handleIsDoneToggle }) => {
  const [inputValue, setInputValue] = useState("");
  const token = localStorage.getItem("authToken");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const backendURL = "https://evote-fq0h.onrender.com/evote/api/v1";
  // const backendURL = "http://localhost:8080";

  console.log(inputValue);
  const otp = inputValue;
  const handleSubmit = async (e) => {
    console.log("click");

    e.preventDefault();
    try {
      const response = await fetch(`${backendURL}/auth/verify-otp`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ otp }),
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log(responseData);
        handleIsDoneToggle();
      }
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };
  return (
    <>
      <div className="sim-inm">
        Please type this code into your authentication app
      </div>
      <form action="">
        <div className="inp-conn">
          <input
            type="tel"
            className="inp-verify"
            placeholder="Verification Code"
            maxLength={6}
            onChange={handleInputChange}
          />
          {inputValue.length === 6 && (
            <div className="proc-btn">
              <button className="prc-btn" onClick={handleSubmit}>
                PROCEED
              </button>
            </div>
          )}
        </div>
      </form>
    </>
  );
};

export default VerifyInput;
