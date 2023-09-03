import SideBar from "../../components/DasComp/Sidebar";
import TopNav from "../../components/DasComp/TopNav";
import ProfileMain from "../../components/DasComp/profileComp";
import DashLayout from "../../components/Layout/DashLayout";
import "./style.css";

const Profile = () => {
  return (
    <>
      <DashLayout>
        <div className="dash-board-coantainer">
          <div className="dash-box">
            <SideBar />
            <div className="second-side">
              <TopNav />
              <div className="main-das-container">
                <ProfileMain />
              </div>
            </div>
          </div>
        </div>
      </DashLayout>
    </>
  );
};

export default Profile;
