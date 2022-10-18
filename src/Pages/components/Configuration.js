import React from "react";

const Configuration = ({ updateView }) => {
  return (
    <div>
      <h1>Configuration Component</h1>
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
