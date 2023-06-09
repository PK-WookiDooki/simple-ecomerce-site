import React from "react";
import { BsSearch } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";

const Input = ({ search, setSearch, handleSubmit, toggle }) => {
  const clearSearch = (e) => {
    e.preventDefault();
    setSearch("");
    toggle();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className=" border border-background h-10 w-full md:max-w-xs rounded-sm px-2 flex flex-rwo items-center gap-2 "
    >
      <BsSearch />
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className=" outline-none w-full h-full  placeholder:text-gray-500 bg-transparent"
        placeholder="Search Here . . . "
      />
      {search ? (
        <button onClick={clearSearch} className="text-xl px-1">
          {" "}
          <RxCross1 />{" "}
        </button>
      ) : (
        ""
      )}
    </form>
  );
};

export default Input;
