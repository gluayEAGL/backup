import React from "react";
import "./Configuration.css";
import GlobalSettingMain from "./GlobalSettingMain";

const Configuration = ({ updateView }) => {
  return (
    <div className="config-container">
      <h1>Configuration Component</h1>
      <div className="whole-container">
        <div className="container1">
          <br />
          <h2>Container 1 - Left</h2>
          <h3>😎😎😎</h3>
        </div>
        <div className="globalSetting-container">
          <p>GLOBAL SETTING</p>
          <GlobalSettingMain />
        </div>
      </div>
      <br />
      <a
        onClick={() => updateView("mapbase")}
        style={{ backgroundColor: "green" }}
      >
        Mapbase Component
      </a>
    </div>
  );
};

export default Configuration;
