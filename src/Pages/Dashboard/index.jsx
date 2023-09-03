import SideBar from "../../components/DasComp/Sidebar";
import TopNav from "../../components/DasComp/TopNav";
import MainDash from "../../components/DasComp/maindash";
import DashLayout from "../../components/Layout/DashLayout";
import "./style.css";

const Dashboard = () => {
  return (
    <>
      <DashLayout>
        <div className="dash-board-coantainer">
          <div className="dash-box">
            <SideBar />
            <div className="second-side">
              <TopNav />
              <div className="main-das-container">
                <MainDash />
              </div>
            </div>
          </div>
        </div>
      </DashLayout>
    </>
  );
};

export default Dashboard;
