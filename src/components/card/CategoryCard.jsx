import React from "react";

const CategoryCard = ({ title, desc }) => {
  return (
    <div className=" select-none bg-gray-100 hover:shadow-md duration-150 md:w-[320px] p-5 rounded-sm shadow tracking-wide">
      <h2 className=" capitalize text-lg font-semibold mb-3"> {title} </h2>
      <p className="text-sm text-gray-500 leading-7"> {desc} </p>
    </div>
  );
};

export default CategoryCard;
