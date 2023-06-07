import React from "react";
import { Link } from "react-router-dom";
import { BsPlusLg, BsEyeFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/services/productsSlice";

const Buttons = ({ item }) => {
  const dispatch = useDispatch();
  const addingToCart = () => {
    dispatch(addToCart(item));
  };
  return (
    <div className="absolute transform md:translate-x-20 group-hover:translate-x-0 duration-300 top-0 right-0 flex flex-col gap-1 z-[2]">
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
  );
};

export default Buttons;
