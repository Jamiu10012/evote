import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchData, fetchElectionData } from "../../Services/getApi";

const AdminMainDash = () => {
  const token = localStorage.getItem("authToken");
  const [data, setData] = useState([]);
  const [user, setUser] = useState([]);

  useEffect(() => {
    const fetchUserFromApi = async () => {
      try {
        const result = await fetchData(token);
        console.log(result);
        setUser(result);
        // Assuming 10 items per page, adjust accordingly
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserFromApi();
  }, [token]);

  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        const result = await fetchElectionData(token);
        console.log(result);
        setData(result.elections);
        // Assuming 10 items per page, adjust accordingly
      } catch (error) {
        // Handle error
      }
    };

    fetchDataFromApi();
  }, [token]);
  console.log(data);
  return (
    <div className="maindas-box">
      <div className="acc-t">Account Dashboard</div>
      <div className="id-name">
        <div className="id-text">ID 0001</div>
        <div className="nam-tst">{user?.user?.fullname}</div>
      </div>
      <div className="imp-box">
        {/* <div className="important">IMPORTANT NOTICE</div> */}
        <div className="col-bx">
          {data.length === 0 ? (
            <div className="sim-inm red">You are yet to create new post.</div>
          ) : (
            <div className="row-fl">
              {data.map((election, index) => (
                <div className="box-elections" key={index}>
                  <div className="sn">{index + 1}</div>
                  <div className="election-title">{election.electionName}</div>
                </div>
              ))}
            </div>
          )}
          <div className="sim-inm">
            <Link to={"/election"} className="prov">
              Click here to create!
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminMainDash;
