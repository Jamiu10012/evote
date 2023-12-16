import TwoFactor from "./twoFactor";

const Info = ({
  handleFactorToggle,
  factorToggle,
  handleCloseFactorToggle,
  data,
}) => {
  return (
    <>
      {factorToggle ? (
        <TwoFactor handleCloseFactorToggle={handleCloseFactorToggle} />
      ) : (
        <div className="info-right">
          <h1 className="ead">Basic Info</h1>
          <div className="info-details">
            <div className="det-con">
              <div className="n-text">Name</div>
              <div className="n-text">{data?.user?.fullname}</div>
            </div>
            <div className="det-con">
              <div className="n-text">Username</div>
              <div className="n-text cen">{data?.user?.username}</div>
            </div>
            <div className="det-con">
              <div className="n-text">Birthday</div>
              <div className="n-text cen">{data?.user?.dob}</div>
            </div>
            <div className="det-con">
              <div className="n-text">Mobile Number</div>
              <div className="n-text ">{data?.user?.phonenumber}</div>
            </div>
            <div className="det-con">
              <div className="n-text">Email Address</div>
              <div className="n-text ">{data?.user?.email}</div>
            </div>
            <div className="det-con">
              <div className="n-text">Password</div>
              <div className="n-text cen">*********</div>
            </div>
            <div className="det-con">
              <div className="n-text">One time password</div>
              {data?.user?.eligibility === "Allowed" ? (
                <div className="n-text cen">Verified</div>
              ) : (
                <div className="n-text red cen" onClick={handleFactorToggle}>
                  !!!
                </div>
              )}
            </div>
            <div className="det-con">
              <div className="n-text">Biometrics</div>
              <div className="n-text"></div>
            </div>
            <div className="det-con">
              <div className="n-text">Eligibility</div>
              <div className="n-text">{data?.user?.eligibility}</div>
            </div>
            <div className="det-con">
              <div className="n-text">Privacy Policy</div>
              <div className="n-text"></div>
            </div>
            <div className="det-con rem">
              <div className="n-text">I need help</div>
              <div className="n-text"></div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Info;
