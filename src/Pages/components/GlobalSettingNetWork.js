import React from "react";

const GlobalSettingNetWork = ({ updateViewSetting }) => {
  return (
    <>
      <div>GlobalSettingNetwork</div>
      <a onClick={() => updateViewSetting("server")}>Go to Server</a>
    </>
  );
};

export default GlobalSettingNetWork;
