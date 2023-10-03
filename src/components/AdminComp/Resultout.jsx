import "./style.css";
const MainResultOut = () => {
  return (
    <div className="create-poll-container ">
      <div className="creat-ead bbbb">VIEW RESULT</div>

      <div className="post-pol-container cnf">
        <div className="main-pos">ELECTION RESULT INFORMATION </div>
        <div className="manifes-box n-bor">
          <table className="bod nope">
            <tr>
              <th>POST</th>
              <th>WINNER</th>
              <th>TOTAL VOTERS</th>
              <th>TOTAL VOTES</th>
            </tr>
            <tr className="up-tr">
              <td>President</td>
              <td>Makinde Oluwapelumi</td>
              <td>2000</td>
              <td>1338</td>
            </tr>
          </table>
        </div>

        <div className="ters">OTHERS</div>
        <div className="rest-cand">
          <div className="cand-name">ANIMASHAUN OLAMIDE</div>
          <div className="acc-vote">400 VOTES</div>
        </div>
        <div className="rest-cand">
          <div className="cand-name">GABRIEL IFEANYI</div>
          <div className="acc-vote">62 VOTES</div>
        </div>

        {/* <div className="create-bx cen">
          <button className="create-poll-btn">VIEW RESULT</button>
        </div> */}
      </div>
    </div>
  );
};

export default MainResultOut;
