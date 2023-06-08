import React from "react";
// import { useDispatch } from "react-redux";
// import { BsPlusLg, BsEyeFill } from "react-icons/bs";
// import { Link } from "react-router-dom";
// import { addToCart } from "../../features/services/productsSlice";
import { generateStars } from "../../features/functions/rating";
import Buttons from "../buttons/Buttons";

const Card = ({ item }) => {
  // const dispatch = useDispatch();
  // const addingToCart = () => {
  //   dispatch(addToCart(item));
  // };

  return (
    <div className=" w-[250px]  text-background group flex flex-col gap-3 tracking-wide">
      <div className=" h-52 overflow-hidden border bg-primary p-5 relative">
        <img
          src={item?.image}
          alt=""
          className="h-full mx-auto object-contain group-hover:scale-110 duration-200"
        />
        <Buttons item={item} />
      </div>

      <div className="flex flex-col gap-1 ">
        <p className=" text-gray-400 capitalize text-sm"> {item?.category} </p>
        <h2 className="font-semibold">
          {item?.title.length > 20
            ? item?.title.substring(0, 20) + "..."
            : item?.title}
        </h2>
        <div className="flex justify-between items-center mt-auto">
          <p className="font-semibold"> $ {item?.price} </p>
          <div className="text-background">
            {generateStars(Math.floor(item?.rating?.rate))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
