import React from "react";
import pnf from "../../assets/images/page_not_found.png";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="w-[90%] flex flex-col md:flex-row-reverse items-center justify-center py-5 tracking-wide">
      <div className="w-full">
        <img src={pnf} alt="" className=" w-full mx-auto " />
      </div>
      <div className=" w-full md:w-[80%] p-3 py-5 flex flex-col items-center gap-3 text-center md:items-start md:text-left md:gap-5 ">
        <h2 className=" text-3xl font-bold">
          {" "}
          The page you were looking for doesn't exist.{" "}
        </h2>
        <p className=" text-gray-500 px-2 md:px-0 leading-7">
          Looks like you've taken a wrong turn. The page you're looking for is
          lost in cyberspace. Don't worry, our team of digital detectives is on
          the case!{" "}
        </p>

        <Link
          to={"/"}
          className="px-5 py-2 rounded-sm bg-background hover:bg-green-900 duration-150 text-primary"
        >
          {" "}
          Go Home{" "}
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
