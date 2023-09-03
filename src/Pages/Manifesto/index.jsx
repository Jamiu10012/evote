import SideBar from "../../components/DasComp/Sidebar";
import TopNav from "../../components/DasComp/TopNav";
import ManiComp from "../../components/DasComp/manifestoComp";
import DashLayout from "../../components/Layout/DashLayout";
import "./style.css";
const Manifesto = () => {
  return (
    <DashLayout>
      <div className="dash-board-coantainer">
        <div className="dash-box">
          <SideBar />
          <div className="second-side">
            <TopNav />
            <div className="main-das-container">
              <ManiComp />
            </div>
          </div>
        </div>
      </div>
    </DashLayout>
  );
};

export default Manifesto;
