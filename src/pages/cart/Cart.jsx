import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const { cartItems } = useSelector((state) => state.products);
  console.log(cartItems);

  return (
    <div>
      <h1> Your Cart</h1>
    </div>
  );
};

export default Cart;
