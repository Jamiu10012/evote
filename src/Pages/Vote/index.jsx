import SideBar from "../../components/DasComp/Sidebar";
import TopNav from "../../components/DasComp/TopNav";
import DashLayout from "../../components/Layout/DashLayout";
import MainVote from "../../components/DasComp/MainVote";
import "./style.css";
const Vote = () => {
  return (
    <DashLayout>
      <div className="dash-board-coantainer">
        <div className="dash-box">
          <SideBar />
          <div className="second-side">
            <TopNav />
            <div className="main-das-container">
              <MainVote />
            </div>
          </div>
        </div>
      </div>
    </DashLayout>
  );
};

export default Vote;
