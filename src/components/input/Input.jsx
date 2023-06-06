import React from "react";

const Input = ({ search, setSearch }) => {
  return (
    <div className=" border border-background h-9 w-full md:w-40 lg:w-56 rounded px-3">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className=" outline-none w-full h-full  placeholder:text-gray-500 bg-transparent"
        placeholder="Search Here . . . "
      />
    </div>
  );
};

export default Input;
