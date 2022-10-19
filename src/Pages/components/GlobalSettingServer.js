import React from "react";
import "./GlobalSettingServer.css";

const GlobalSettingServer = ({ updateViewSetting }) => {
  return (
    <div className="global-setting-server-container">
      <div className="toggle-setting">
        <p>Basic setting</p>
        <a className="disable-btn" disabled>
          SERVER
        </a>
        <a onClick={() => updateViewSetting("network")}>NETWORK</a>
      </div>
      <div className="global-setting-server-content">
        <div>GlobalSettingServer</div>
        <label>EAGL Customer ID:</label>
        <input placeholder="here .." />
      </div>
    </div>
  );
};

export default GlobalSettingServer;
