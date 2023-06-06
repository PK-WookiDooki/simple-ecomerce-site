import React from "react";
import { Link } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";

const RecommendCard = ({ item }) => {
  return (
    <Link to={`/products/${item.id}`} className=" inline-block ">
      <div
        className=" md:w-[300px] flex flex-row items-center gap-5 md:flex-col md:gap-3 p-5 text-background group rounded hover:shadow-md
        border duration-150 "
      >
        <div className=" h-36 md:h-52 w-full overflow-hidden shadow bg-primary rounded  p-2 ">
          <img
            src={item?.image}
            alt=""
            className="h-full mx-auto object-contain"
          />
        </div>
        <div className=" w-full">
          <h2 className="font-bold md:truncate ">{item?.title}</h2>
          <div className="flex  justify-between items-center mt-3">
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
      </div>
    </Link>
  );
};

export default RecommendCard;
