import AdminSideBar from "../../components/AdminComp/AdminSidebar";
import MainCreateElection from "../../components/AdminComp/CreateElectionMain";
import TopNav from "../../components/DasComp/TopNav";
import DashLayout from "../../components/Layout/DashLayout";

const Election = () => {
  return (
    <DashLayout>
      <div className="dash-board-coantainer">
        <div className="dash-box">
          <AdminSideBar />
          <div className="second-side">
            <TopNav />
            <div className="main-das-container polls">
              <MainCreateElection />
            </div>
          </div>
        </div>
      </div>
    </DashLayout>
  );
};

export default Election;
