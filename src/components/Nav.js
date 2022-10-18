import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <Link to="/" style={{ paddingRight: "1rem" }}>
        Home
      </Link>
      <Link to="/map">Map</Link>
    </div>
  );
};

export default Nav;
