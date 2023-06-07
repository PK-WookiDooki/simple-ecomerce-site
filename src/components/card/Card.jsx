import React from "react";
import { useDispatch } from "react-redux";
import { BsPlusLg, BsEyeFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { addToCart } from "../../features/services/productsSlice";
import { generateStars } from "../../features/functions/rating";

const Card = ({ item }) => {
  const dispatch = useDispatch();
  const addingToCart = () => {
    dispatch(addToCart(item));
  };

  return (
    <div className=" w-[250px]  text-background group flex flex-col gap-3 tracking-wide">
      <div className=" h-52 overflow-hidden border bg-primary p-5 relative">
        <img
          src={item?.image}
          alt=""
          className="h-full mx-auto object-contain group-hover:scale-110 duration-200"
        />
        <div className=" absolute transform translate-x-20 group-hover:translate-x-0 duration-200 top-0 right-0 flex flex-col gap-1 z-[2]">
          <button
            onClick={addingToCart}
            className="w-10 h-10 flex items-center justify-center bg-background hover:bg-green-900 text-primary duration-150"
          >
            <BsPlusLg />
          </button>
          <Link
            to={`${item.id}`}
            className="w-10 h-10 flex items-center justify-center bg-gray-300 hover:bg-gray-200 text-background duration-150"
          >
            <BsEyeFill />
          </Link>
        </div>
      </div>
      {/* <div className=" flex flex-col gap-3 mt-5"> */}
      <div className="flex flex-col gap-1 ">
        <p className=" text-gray-400 capitalize text-sm"> {item?.category} </p>
        <h2 className="font-medium">
          {item?.title.length > 20
            ? item?.title.substring(0, 20) + "..."
            : item?.title}
        </h2>
        <div className="flex justify-between items-center mt-auto">
          <p className="font-medium"> $ {item?.price} </p>
          <p className="text-background">
            {generateStars(Math.floor(item?.rating?.rate))}
          </p>
        </div>
        {/* </div> */}
        {/* <div className="flex justify-between items-center">
          <Link
            to={`${item.id}`}
            className="px-6 py-[5px] rounded bg-black text-primary hover:scale-105 active:scale-95 duration-150"
          >
            Detail
          </Link>
          <button
            onClick={addingToCart}
            className="px-6 py-[5px] rounded bg-background text-primary hover:scale-105 active:scale-95 duration-150"
          >
            Add to Cart
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default Card;
