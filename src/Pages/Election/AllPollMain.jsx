import AdminSideBar from "../../components/AdminComp/AdminSidebar";
import AllPoll from "../../components/AdminComp/AllPoll";
import TopNav from "../../components/DasComp/TopNav";
import DashLayout from "../../components/Layout/DashLayout";

const AllPollMain = () => {
  return (
    <DashLayout>
      <div className="dash-board-coantainer">
        <div className="dash-box">
          <AdminSideBar />
          <div className="second-side">
            <TopNav />
            <div className="main-das-container polls">
              <AllPoll />
            </div>
          </div>
        </div>
      </div>
    </DashLayout>
  );
};

export default AllPollMain;
