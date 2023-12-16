import { useEffect, useState } from "react";
import SideBar from "../../components/DasComp/Sidebar";
import TopNav from "../../components/DasComp/TopNav";
import ProfileMain from "../../components/DasComp/profileComp";
import DashLayout from "../../components/Layout/DashLayout";
import "./style.css";
import { fetchData } from "../../Services/getApi";

const Profile = () => {
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
        // Handle error
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
                <ProfileMain data={data} />
              </div>
            </div>
          </div>
        </div>
      </DashLayout>
    </>
  );
};

export default Profile;
