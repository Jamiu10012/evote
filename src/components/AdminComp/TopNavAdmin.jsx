import { HiX } from "react-icons/hi";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import AdminSideBar from "./AdminSidebar";
const TopNavAdmin = () => {
  const [toggleIcon, setToggleIcon] = useState(false);
  const handleToggleIcon = () => {
    setToggleIcon(!toggleIcon);
  };
  return (
    <div className="top-container">
      <div className="nav-ico" onClick={handleToggleIcon}>
        {toggleIcon ? <HiX size={25} /> : <FaBars size={25} />}
      </div>
      {toggleIcon && <AdminSideBar toggleIcon={toggleIcon} />}

      <div className="image-txt">
        <img src="images/right.png" alt="" />
        <div className="im-text">Daddy Yo</div>
      </div>
    </div>
  );
};

export default TopNavAdmin;
