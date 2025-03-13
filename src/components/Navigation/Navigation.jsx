import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";
import clsx from "clsx";

const Navigation = () => {
  return (
    <nav className={s.navCont}>
      <NavLink
        className={({ isActive }) => clsx(s.link, isActive && s.active)}
        to="/"
      >
        Search
      </NavLink>
      <NavLink
        className={({ isActive }) => clsx(s.link, isActive && s.active)}
        to="/random"
      >
        Random
      </NavLink>
      <NavLink
        className={({ isActive }) => clsx(s.link, isActive && s.active)}
        to="/trend"
      >
        Trend
      </NavLink>
    </nav>
  );
};

export default Navigation;
