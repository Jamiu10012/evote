import "./style.css";
const MainCreatePoll = () => {
  return (
    <div className="create-poll-container">
      <div className="creat-ead">CREATE POLL</div>
      <div className="creat-inst">
        Fill the fields below to create a voting poll
      </div>

      <div className="post-pol-container">
        <div className="main-pos">POST</div>
        <div className="post-inp-cont">
          <input
            type="text"
            placeholder="Input the post here"
            className="position-container"
          />
        </div>

        <div className="add-contes">Add Contestants</div>
        <div className="particip-name">
          <input
            type="text"
            className="particip-inp"
            placeholder="MAKINDE OLUWAPELUMI"
          />
        </div>
        <div className="particip-name">
          <input
            type="text"
            className="particip-inp"
            placeholder="MAKINDE OLUWAPELUMI"
          />
        </div>
        <div className="add-bxx">
          <div className="add-paticipant">+ Add contestants</div>
          <div className="add-paticipant">+ Add Poll</div>
        </div>
        <div className="create-bx">
          <button className="create-poll-btn">CREATE POLL</button>
        </div>
      </div>
    </div>
  );
};

export default MainCreatePoll;
