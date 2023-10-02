import AdminSideBar from "../../components/AdminComp/AdminSidebar";
import MainCreatePoll from "../../components/AdminComp/CreatePollMain";
import TopNav from "../../components/DasComp/TopNav";
import DashLayout from "../../components/Layout/DashLayout";

const CreatePolls = () => {
    return ( <DashLayout>
        <div className="dash-board-coantainer">
          <div className="dash-box">
            <AdminSideBar />
            <div className="second-side">
              <TopNav />
              <div className="main-das-container polls">
                <MainCreatePoll />
              </div>
            </div>
          </div>
        </div>
      </DashLayout> );
}
 
export default CreatePolls;