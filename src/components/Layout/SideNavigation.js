import { Link } from "react-router-dom";

import FileInputPage from "../Inputs/FileInputPage";

import home from "../../assets/icons/HomeMinimal.svg";
import star from "../../assets/icons/Star.svg";
import fileStructure from "../../assets/icons/FileStructure.svg";
import boxArchive from "../../assets/icons/Box.svg";

import "./SideNavigation.scss";

const SideNavigation = () => {
  return (
    <div className="sideBar">
      <FileInputPage />

      <ul className="navigations">
        <li>
          <Link to="/">
            <img src={home} alt="home" />
            Home
          </Link>
        </li>

        <li>
          <Link to="/all-files">
            <img src={fileStructure} alt="file" />
            All Files
          </Link>
        </li>

        <li>
          <Link to="/starred">
            <img src={star} alt="star" />
            Starred
          </Link>
        </li>

        <li>
          <Link to="/archived">
            <img src={boxArchive} alt="boxArchive" />
            Archived
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SideNavigation;
