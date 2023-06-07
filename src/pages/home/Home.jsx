import React from "react";
import shopping from "../../assets/images/online_shopping.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="w-[90%] py-5 flex flex-col gap-5 md:flex-row md:items-center md:gap-10 tracking-wide ">
      <div className="flex flex-col gap-5 w-full md:w-[80%] items-center text-center md:text-left md:items-start p-3">
        <h2 className="text-4xl font-bold w-[85%] lg:w-[60%] ">
          {" "}
          Make Your Shopping Online{" "}
        </h2>
        <p className="text-gray-500 px-2 md:px-0 leading-7">
          Online shopping has revolutionized the way we shop, offering a
          seamless and reliable experience. With just a few clicks, you can
          explore a vast array of products and services from the comfort of your
          own home. So, make your shopping online easy and freely.
        </p>

        <Link
          to={"products"}
          className=" bg-background hover:bg-green-900 duration-150 px-6 py-2 rounded-sm w-fit text-primary"
        >
          {" "}
          Shop Now{" "}
        </Link>
      </div>
      <div className="w-full">
        <img src={shopping} alt="" className="" />
      </div>
    </div>
  );
};

export default Home;
