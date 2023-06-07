import React from "react";
import { Link } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import { generateStars } from "../../features/functions/rating";

const RecommendCard = ({ item }) => {
  return (
    <Link to={`/products/${item.id}`} className=" inline-block ">
      <div
        className=" md:w-[250px] flex flex-row items-center gap-5 md:flex-col md:gap-3 p-5 bg-primary rounded-sm text-background group hover:shadow-md
        border duration-150 "
      >
        <div className=" h-36 md:h-52 w-full overflow-hidden bg-primary p-3 ">
          <img
            src={item?.image}
            alt=""
            className="h-full mx-auto object-contain group-hover:scale-110 duration-150 "
          />
        </div>
        <div className=" w-full">
          <h2 className="font-medium md:truncate ">{item?.title}</h2>
          <div className="flex justify-between items-center mt-3">
            <p className="font-medium"> $ {item?.price} </p>
            <p
              className="flex items-center gap-1
              "
            >
              {" "}
              <AiFillStar className="text-lg" />{" "}
              {generateStars(Math.floor(item?.rating?.rate))}{" "}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RecommendCard;
