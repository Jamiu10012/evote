import "./style.css";
const MainResult = () => {
  return (
    <div className="create-poll-container ">
      <div className="creat-ead bbbb">VIEW RESULT</div>

      <div className="post-pol-container cnf">
        <div className="main-pos">Election Period</div>
        <div className="main-tos">Post</div>
        <form action="">
          <div className="imp-box">
            <select name="" id="" className="select-inp">
              <option value="">---Select---</option>
              <option value="">---President---</option>
              <option value="">---VP---</option>
              <option value="">---Social Directop---</option>
              <option value="">---Secterary---</option>
              <option value="">---Treasurer---</option>
              <option value="">---Auditor---</option>
            </select>

            <div className="main-tos">Period</div>

            <input
              type="text"
              className="inp-period"
              placeholder="Input year of Election"
            />
            {/* <table className="bod">
            <tr>
                <td>Makinde Oluwapelumi</td>
                <td>Vice President</td>
             
              </tr>
              <tr className="up-tr">
                <td>Makinde Oluwapelumi</td>
                <td>President</td>
             
              </tr>
              <tr>
                <td>Makinde Oluwapelumi</td>
                <td>Vice President</td>
             
              </tr>
            </table> */}

            <div className="create-bx cen">
              <button className="create-poll-btn">VIEW RESULT</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MainResult;
