import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { RiMenu3Fill } from "react-icons/ri";
import { RxCross1 } from "react-icons/rx";
import { BsCartCheckFill } from "react-icons/bs";
import "./nav.css";
import Navlink from "../navlink/Navlink";
import { useDispatch, useSelector } from "react-redux";
import Input from "../input/Input";
import CartLink from "../cartlink/CartLink";
import { setKeyword } from "../../features/services/productsSlice";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const handleMenu = () => {
    setMenu(!menu);
  };

  useEffect(() => {
    dispatch(setKeyword(search));
  }, [search]);
  const { cartQuantity } = useSelector((state) => state.products);

  return (
    <section className="sticky top-0 bg-gray-100 text-background overflow-hidden z-10 shadow-md">
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
          <Input search={search} setSearch={setSearch} />
          <CartLink />
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
            <Input search={search} setSearch={setSearch} />
            <CartLink toggle={handleMenu} />
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
