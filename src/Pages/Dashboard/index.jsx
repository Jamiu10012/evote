import { useEffect, useState } from "react";
import SideBar from "../../components/DasComp/Sidebar";
import TopNav from "../../components/DasComp/TopNav";
import MainDash from "../../components/DasComp/maindash";
import DashLayout from "../../components/Layout/DashLayout";
import "./style.css";
import { fetchData } from "../../Services/getApi";

const Dashboard = () => {
  const token = localStorage.getItem("authToken");
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        const result = await fetchData(token);
        console.log(result);
        setData(result);
        // Assuming 10 items per page, adjust accordingly
      } catch (error) {
        console.error(error);
      }
    };

    fetchDataFromApi();
  }, [token]);
  return (
    <>
      <DashLayout>
        <div className="dash-board-coantainer">
          <div className="dash-box">
            <SideBar />
            <div className="second-side">
              <TopNav />
              <div className="main-das-container">
                <MainDash data={data} />
              </div>
            </div>
          </div>
        </div>
      </DashLayout>
    </>
  );
};

export default Dashboard;
