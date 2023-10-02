import AdminSideBar from "../../components/AdminComp/AdminSidebar";
import MainCreatePoll from "../../components/AdminComp/CreatePollMain";
import MainResult from "../../components/AdminComp/Result";
import TopNav from "../../components/DasComp/TopNav";
import DashLayout from "../../components/Layout/DashLayout";

const Result = () => {
    return ( <DashLayout>
        <div className="dash-board-coantainer">
          <div className="dash-box">
            <AdminSideBar />
            <div className="second-side">
              <TopNav />
              <div className="main-das-container polls">
                <MainResult />
              </div>
            </div>
          </div>
        </div>
      </DashLayout> );
}
 
export default Result;