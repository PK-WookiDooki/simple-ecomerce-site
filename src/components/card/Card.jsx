import React from "react";
import { AiFillStar } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../../features/services/productsSlice";

const Card = ({ item }) => {
  const dispatch = useDispatch();
  const addingToCart = () => {
    dispatch(addToCart(item));
  };

  return (
    <div className=" w-[300px] p-5  text-background group rounded hover:shadow-md border duration-150 ">
      <div className=" h-52 overflow-hidden shadow bg-primary rounded  p-2 ">
        <img
          src={item?.image}
          alt=""
          className="h-full mx-auto object-contain"
        />
      </div>
      <div className="mt-3">
        <h2 className="text-lg font-bold">
          {item?.title.length > 20
            ? item?.title.substring(0, 20) + "..."
            : item?.title}
        </h2>
        <div className="flex  justify-between items-center">
          <p className="font-medium"> $ {item?.price} </p>
          <p
            className="flex items-center gap-1
          "
          >
            {" "}
            <AiFillStar className="text-lg" /> {item?.rating?.rate} / 5{" "}
          </p>
        </div>
      </div>
      <div className="flex justify-between items-center mt-5">
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
      </div>
    </div>
  );
};

export default Card;
