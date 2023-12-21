import { useState } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";

const MainCreateElection = () => {
  const [electionName, setElectionName] = useState("");
  const [description, setDescription] = useState("");
  const [data, setData] = useState("");
  const navigate = useNavigate();
  const token = localStorage.getItem("authToken");

  const backendURL = "https://evote-fq0h.onrender.com/evote/api/v1";

  console.log(electionName, description);
  const handleSubmit = async (e) => {
    console.log("dsd");
    e.preventDefault();
    try {
      const response = await fetch(
        `https://evote-fq0h.onrender.com/evote/api/v1/election`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ electionName, description }),
        }
      );

      if (response.ok) {
        const responseData = await response.json();
        console.log(responseData);
        setData("Election Created Successfully");
        navigate("/admindash");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setData("Something went wrong");
    }
  };
  return (
    <div className="create-poll-container">
      <div className="creat-ead">CREATE ELECTION</div>
      <div className="creat-inst"></div>
      <form action="" onSubmit={handleSubmit}>
        <div className="post-pol-container">
          <div className="main-pos">Election</div>
          <div className="post-inp-cont">
            <input
              type="text"
              placeholder="Input the Election title"
              className="position-container"
              value={electionName}
              onChange={(e) => setElectionName(e.target.value)}
            />
          </div>

          <div className="main-pos">Description</div>
          <div className="post-inp-cont">
            <input
              type="text"
              placeholder="Input the description"
              className="position-container"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div className="create-bx">
            <button className="create-poll-btn" type="submit">
              CREATE ELECTION
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default MainCreateElection;
