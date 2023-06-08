import React from "react";
import { Link } from "react-router-dom";

const PrimaryButton = ({ path, title, toggle, width }) => {
  return (
    <Link
      to={path ? path : ""}
      onClick={toggle}
      className={`bg-background text-center hover:bg-green-900 duration-150 px-6 py-2 rounded-sm ${
        width ? "w-full md:w-fit md:ml-auto" : "w-fit"
      } text-primary capitalize`}
    >
      {title}
    </Link>
  );
};

export default PrimaryButton;
