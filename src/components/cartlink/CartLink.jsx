import React from "react";
import { BsCartCheckFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const CartLink = ({ toggle }) => {
  const { cartQuantity } = useSelector((state) => state.products);
  return (
    <Link
      onClick={toggle}
      to={"cart"}
      className=" bg-background hover:bg-green-900 duration-150 text-primary h-9 w-24 md:w-20 rounded-sm flex items-center justify-center gap-2 relative group"
    >
      <BsCartCheckFill className="text-2xl" />{" "}
      {cartQuantity > 0 ? (
        <span className=" absolute text-sm -top-3 -right-1 border border-background  bg-white w-5 h-5 rounded-full text-background flex items-center justify-center ">
          {" "}
          {cartQuantity}{" "}
        </span>
      ) : (
        ""
      )}
    </Link>
  );
};

export default CartLink;
