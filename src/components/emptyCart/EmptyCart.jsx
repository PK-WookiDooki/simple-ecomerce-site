import React from "react";
import { Link } from "react-router-dom";
import empty from "../../assets/images/empty_cart.png";
import { PButton } from "..";

const EmptyCart = () => {
  return (
    <section className=" w-[90%] flex flex-col md:flex-row-reverse py-5 items-center justify-center">
      <div className="w-full relative">
        <img src={empty} alt="" className=" mx-auto" />
      </div>
      <div className=" md:w-full h-full bg-gray-100 shadow p-5 py-10 rounded-sm flex flex-col items-center gap-5 justify-center">
        <h2 className="text-2xl font-bold text-center">
          Your Shopping Cart Empty Now!
        </h2>
        <PButton path={"/products"} title={"Go Shopping"} />
      </div>
    </section>
  );
};

export default EmptyCart;
