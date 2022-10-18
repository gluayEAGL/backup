import React, { useState } from "react";
import Mapbase from "./components/Mapbase";
import Configuration from "./components/Configuration";

const Map = () => {
  const [show, setShow] = useState("mapbase");

  const updateView = (view) => {
    if (view === "mapbase") {
      setShow("mapbase");
    } else {
      setShow("configuration");
    }
  };

  if (show === "mapbase") {
    return (
      <div>
        <Mapbase updateView={updateView} />
      </div>
    );
  } else {
    return (
      <div>
        <Configuration updateView={updateView} />
      </div>
    );
  }
};

export default Map;
