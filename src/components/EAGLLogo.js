import React from "react";
import EAGLLogoPic from "../assets/icon-eagl-logo.png";
import "./EAGLLogo.css";

const EAGLLogo = () => {
  return (
    <div className="eaglPhoto">
      <a href="/">
        <img src={EAGLLogoPic} alt="EAGL Logo" />
      </a>
    </div>
  );
};

export default EAGLLogo;
