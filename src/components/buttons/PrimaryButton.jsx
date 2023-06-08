import React from "react";
import { Link } from "react-router-dom";

const PrimaryButton = ({ path, title, toggle, width, bg, ml }) => {
  return (
    <Link
      to={path ? path : ""}
      onClick={toggle}
      className={` text-center ${
        bg === "gray"
          ? ` bg-gray-900 hover:bg-gray-800 `
          : " bg-background hover:bg-green-900 "
      }  duration-150 px-6 py-2 rounded-sm ${
        width ? "w-full md:w-fit" : "w-fit"
      } ${ml ? " md:ml-auto" : ""} text-primary capitalize`}
    >
      {title}
    </Link>
  );
};

export default PrimaryButton;
