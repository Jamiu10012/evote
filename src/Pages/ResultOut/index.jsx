import AdminSideBar from "../../components/AdminComp/AdminSidebar";
import MainResultOut from "../../components/AdminComp/Resultout";
import TopNav from "../../components/DasComp/TopNav";
import DashLayout from "../../components/Layout/DashLayout";

const ResultOut = () => {
  return (
    <DashLayout>
      <div className="dash-board-coantainer">
        <div className="dash-box">
          <AdminSideBar />
          <div className="second-side">
            <TopNav />
            <div className="main-das-container polls">
              <MainResultOut />
            </div>
          </div>
        </div>
      </div>
    </DashLayout>
  );
};

export default ResultOut;
