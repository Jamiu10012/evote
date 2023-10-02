import AdminSideBar from "../../components/AdminComp/AdminSidebar";
import AdminMainDash from "../../components/AdminComp/maindashadmin";
import TopNav from "../../components/DasComp/TopNav";
import DashLayout from "../../components/Layout/DashLayout";

const AdminDash = () => {
  return (
    <DashLayout>
      <div className="dash-board-coantainer">
        <div className="dash-box">
          <AdminSideBar />
          <div className="second-side">
            <TopNav />
            <div className="main-das-container">
              <AdminMainDash />
            </div>
          </div>
        </div>
      </div>
    </DashLayout>
  );
};

export default AdminDash;
