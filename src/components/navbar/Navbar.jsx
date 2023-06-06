import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { RiMenu3Fill } from "react-icons/ri";
import { RxCross1 } from "react-icons/rx";
import { BsCartCheckFill } from "react-icons/bs";
import "./nav.css";
import Navlink from "../navlink/Navlink";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const handleMenu = () => {
    setMenu(!menu);
  };

  const { cartQuantity } = useSelector((state) => state.products);
  // console.log(cartQuantity);

  return (
    <section className="sticky top-0 bg-primary text-background overflow-hidden z-10 shadow-sm">
      <nav className="w-[90%] mx-auto h-20 flex items-center justify-between">
        <Link to={"/"} className="text-xl uppercase font-bold">
          E-commerce
        </Link>

        <ul className="hidden md:flex items-center justify-center gap-5 self-stretch ">
          <Navlink path={"products"} name={"Products"} />
          <Navlink path={"about"} name={"About"} />
          <Navlink path={"contact"} name={"Contact"} />
        </ul>
        <div className="hidden md:flex flex-row gap-3 items-center">
          <div className=" border border-background h-9 rounded px-3">
            <input
              type="text"
              className=" outline-none md:w-40 lg:w-full h-full  placeholder:text-gray-500 bg-transparent"
              placeholder="Search Here . . . "
            />
          </div>
          <Link
            to={"cart"}
            className=" bg-background text-primary h-9 w-24 rounded flex items-center justify-center gap-2 relative"
          >
            <BsCartCheckFill className="text-lg" />
            Cart
            {cartQuantity > 0 ? (
              <span className=" absolute text-sm -top-2 -right-2 border border-background  bg-white w-5 h-5 rounded-full text-background flex items-center justify-center  ">
                {" "}
                {cartQuantity}{" "}
              </span>
            ) : (
              ""
            )}
          </Link>
        </div>

        <button onClick={handleMenu} className="md:hidden text-3xl">
          {menu ? <RxCross1 /> : <RiMenu3Fill />}
        </button>
        <div
          className={`flex flex-col transform ${
            menu ? " h-56 p-3 shadow border" : "h-0 "
          } md:hidden fixed text-background bg-primary  top-24 rounded gap-4 w-[90%] duration-200 overflow-hidden z-10`}
        >
          <ul className="md:hidden flex flex-col items-center justify-center gap-3 w-full ">
            <Navlink path={"products"} name={"Products"} toggle={handleMenu} />
            <Navlink path={"about"} name={"About"} toggle={handleMenu} />
            <Navlink path={"contact"} name={"Contact"} toggle={handleMenu} />
          </ul>
          <div className={"md:hidden flex flex-row gap-5 items-center"}>
            <div className=" border border-background h-9 rounded px-3 w-full">
              <input
                type="text"
                className=" outline-none h-full  placeholder:text-gray-500 bg-transparent"
                placeholder="Search Here . . . "
              />
            </div>
            <Link
              onClick={handleMenu}
              to={"cart"}
              className=" bg-background text-primary h-9 w-28 rounded flex items-center justify-center gap-2 relative "
            >
              <BsCartCheckFill className="text-lg" />
              Cart
              {cartQuantity > 0 ? (
                <span className=" absolute text-sm -top-2 -right-2 border border-background  bg-white w-5 h-5 rounded-full text-background flex items-center justify-center  ">
                  {" "}
                  {cartQuantity}{" "}
                </span>
              ) : (
                ""
              )}
            </Link>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
