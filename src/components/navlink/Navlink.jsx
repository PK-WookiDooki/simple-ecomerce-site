import React from "react";
import { NavLink } from "react-router-dom";
import "./link.css";

const Navlink = ({ path, name, toggle }) => {
  return (
    <NavLink
      onClick={toggle}
      className={`nav-link font-medium w-full md:w-auto border-l-[6px] md:border-b-[3px] md:border-l-0 md:hover:bg-transparent
      md:bg-transparent hover:bg-black  hover:bg-opacity-30 border-transparent hover:border-background py-2 px-3 duration-150 rounded-sm`}
      to={path}
    >
      {name}
    </NavLink>
  );
};

export default Navlink;
