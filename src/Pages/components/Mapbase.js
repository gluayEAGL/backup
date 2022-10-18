import React from "react";

const Mapbase = ({ updateView }) => {
  return (
    <div>
      <h1>Mapbase</h1>
      <a
        onClick={() => updateView("configuration")}
        style={{ backgroundColor: "red" }}
      >
        Configuration Component
      </a>
    </div>
  );
};

export default Mapbase;
