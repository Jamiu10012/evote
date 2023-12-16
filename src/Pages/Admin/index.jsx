import AdminSideBar from "../../components/AdminComp/AdminSidebar";
import TopNavAdmin from "../../components/AdminComp/TopNavAdmin";
import AdminMainDash from "../../components/AdminComp/maindashadmin";
import DashLayout from "../../components/Layout/DashLayout";

const AdminDash = () => {
  return (
    <DashLayout>
      <div className="dash-board-coantainer">
        <div className="dash-box">
          <AdminSideBar />
          <div className="second-side">
            <TopNavAdmin />
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
