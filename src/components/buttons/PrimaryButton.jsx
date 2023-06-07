import React from "react";
import { Link } from "react-router-dom";

const PrimaryButton = ({ path, title, toggle }) => {
  return (
    <Link
      to={path ? `/${path}` : ""}
      onClick={toggle}
      className=" bg-background hover:bg-green-900 duration-150 px-6 py-2 rounded-sm w-fit text-primary"
    >
      {title}
    </Link>
  );
};

export default PrimaryButton;
