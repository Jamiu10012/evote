import { AiFillDashboard, AiTwotoneMessage } from "react-icons/ai";
import { FaPoll } from "react-icons/fa";
import { HiOutlinePresentationChartBar } from "react-icons/hi";
import { TiDocumentText } from "react-icons/ti";
import { IoLogOutSharp } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const data = [
  {
    label: "Dashboard",
    icon: <AiFillDashboard />,
    to: "/admindash",
  },
  {
    label: "Create Poll",
    icon: <FaPoll />,
    to: "/createpoll",
  },
  
  {
    label: "Manifesto",
    icon: <TiDocumentText />,
    to: "/manifesto",
  },{
    label: "Results",
    icon: <HiOutlinePresentationChartBar />,
    to: "/result",
  },
];

/* <div className="item-eac"> */
const AdminSideBar = ({ toggleIcon }) => {
  return (
    <div className={toggleIcon ? "active-side" : "sidebar-container"}>
      <div className="acc-box">MyAccount</div>
      <div className="box-con">
        <div className="list-items">
          {data.map((item, key) => (
            <NavLink
              className={({ isActive }) =>
                isActive ? "active-bar item-eac" : "item-eac"
              }
              to={item.to}
            >
              {item.icon}
              {item.label}
            </NavLink>
          ))}

          <div className="item-eac out">
            <IoLogOutSharp />
            <div className="item-text">Logout</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSideBar;
