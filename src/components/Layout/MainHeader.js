import "./MainHeader.scss";
import logo from "../../assets/images/logo.svg";
import Search from "../../assets/icons/Search.svg";
import Settings from "../../assets/icons/Settings.svg";
import NotificationBell from "../../assets/icons/NotificationBell.svg";
import User from "../../assets/images/User.png";

const MainHeader = () => {
  return (
    <div className="main-header">
      <div className="logo">
        <img src={logo} alt="logo" className="img-logo" />
      </div>

      <div className="header">
        <div className="search-bloc">
          <img src={Search} alt="search" className="img-search" />
          <input className="input-search" type="search" placeholder="Search" />
        </div>
        <div className="right-side-header">
          <div className="settings">
            <img src={Settings} alt="Settings" />
          </div>

          <div className="notication">
            <img src={NotificationBell} alt="notificationBell" />
          </div>

          <div className="user-bloc">
            <label>User</label>
            <img className="user-img" src={User} alt="user" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
