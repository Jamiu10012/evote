import { Link } from "react-router-dom";

const AdminMainDash = () => {
  return (
    <div className="maindas-box">
      <div className="acc-t">Account Dashboard</div>
      <div className="id-name">
        <div className="id-text">ID 0001</div>
        <div className="nam-tst">Makinde Oluwapelumi</div>
      </div>
      <div className="imp-box">
        <div className="important">IMPORTANT NOTICE</div>
        <div className="col-bx">
        <div className="sim-inm red">You are yet to create new post. </div>
        <div className="sim-inm">
          <Link to={"/profile"} className="prov">
          click here to create!  
          </Link>
        </div>
        </div>
      </div>
    </div>
  );
};

export default AdminMainDash;
