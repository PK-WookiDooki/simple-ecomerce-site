import React from "react";
import { NavLink } from "react-router-dom";

const Navlink = ({ path, name, toggle }) => {
  return (
    <NavLink
      onClick={toggle}
      className={`nav-link w-full md:w-auto border-l-4 md:border-b-2 md:border-l-0 md:hover:bg-transparent
      md:bg-transparent  hover:bg-opacity-30 border-transparent hover:border-background py-2 px-3 duration-150`}
      to={path}
    >
      {name}
    </NavLink>
  );
};

export default Navlink;
