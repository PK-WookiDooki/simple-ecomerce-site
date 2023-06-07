import React from "react";
import { BsSearch } from "react-icons/bs";

const Input = ({ search, setSearch, handleSubmit }) => {
  return (
    <form
      onSubmit={handleSubmit}
      className=" border border-background h-10 w-full md:w-40 lg:w-56 rounded-sm px-3 flex flex-rwo items-center gap-2"
    >
      <BsSearch />
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className=" outline-none w-full h-full  placeholder:text-gray-500 bg-transparent"
        placeholder="Search Here . . . "
      />
    </form>
  );
};

export default Input;
