import SideNavigation from "./SideNavigation";
import "./layout.scss";

const Layout = (props) => {
  return (
    <div className="layout">
      <SideNavigation />
      <main>{props.children}</main>
    </div>
  );
};

export default Layout;
