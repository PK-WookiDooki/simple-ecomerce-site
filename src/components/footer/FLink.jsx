import React from "react";
import { Link } from "react-router-dom";

const FLink = ({ links, title }) => {
  return (
    <div className=" w-[45%] md:w-full text-center md:text-left">
      <h2 className=" font-bold uppercase text-gray-300"> {title} </h2>
      <div className=" flex flex-col gap-2 text-sm mt-3">
        {links.map((link, index) => {
          return (
            <Link
              key={index}
              to={`/${link}`}
              className=" text-gray-400 hover:text-primary duration-150 "
            >
              {link}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default FLink;
