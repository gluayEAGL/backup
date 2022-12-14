import React from "react";
import "./NavMain.css";
import SystemStatus from "./SystemStatus";
import EAGLLogo from "./EAGLLogo";
import ActiveNav from "./ActiveNav";
import DoorGroup from "./DoorGroup";
import ThemeProfileConfig from "./ThemeProfileConfig";

const NavMain = ({ updateView }) => {
  return (
    <>
      <div className="navMainContainer">
        <div className="navMain">
          <SystemStatus />
          <EAGLLogo />
          <ActiveNav />
          <DoorGroup />
          <ThemeProfileConfig updateView={updateView} />
        </div>
      </div>
    </>
  );
};

export default NavMain;
