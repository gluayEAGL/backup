import React, { useState } from "react";
import GlobalSettingNetWork from "./GlobalSettingNetWork";
import GlobalSettingServer from "./GlobalSettingServer";

const GlobalSettingMain = () => {
  const [show, setShow] = useState("server");

  const updateViewSetting = (viewSetting) => {
    if (viewSetting === "server") {
      setShow("server");
    } else {
      setShow("network");
    }
  };

  if (show === "server") {
    return (
      <div>
        <GlobalSettingServer updateViewSetting={updateViewSetting} />
      </div>
    );
  } else {
    return (
      <div>
        <GlobalSettingNetWork updateViewSetting={updateViewSetting} />
      </div>
    );
  }
};

export default GlobalSettingMain;
