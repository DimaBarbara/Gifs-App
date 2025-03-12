import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <NavLink to="/">Search</NavLink>
      <NavLink to="/random">Random</NavLink>
      <NavLink to="/trend">Trend</NavLink>
    </nav>
  );
};

export default Navigation;
