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
      className=" bg-background text-primary h-9 w-32 lg:w-24 rounded flex items-center justify-center gap-2 relative"
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
  );
};

export default CartLink;
