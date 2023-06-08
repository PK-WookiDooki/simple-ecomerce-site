import React from "react";
import { Link } from "react-router-dom";

const PMLink = ({ icon, path, color }) => {
  return (
    <Link
      to={path}
      className={`w-28 h-10 rounded-sm flex items-center justify-center border ${
        color === "gold"
          ? "bg-yellow-600"
          : color === "black"
          ? "bg-black"
          : color === "blue"
          ? "bg-blue-600"
          : "bg-red-500"
      } text-primary text-[40px] `}
    >
      {icon}
    </Link>
  );
};

export default PMLink;
