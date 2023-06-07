import React from "react";
import { FaTrash } from "react-icons/fa";
import { BsPlusLg } from "react-icons/bs";
import { HiOutlineMinus } from "react-icons/hi";
import { useDispatch } from "react-redux";
import {
  decreaseItem,
  increaseItem,
  removeFromCart,
} from "../../features/services/productsSlice";
import { showDeleteAlert } from "../../features/functions/alert";
import Swal from "sweetalert2";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const increaseQuantity = () => {
    dispatch(increaseItem(item));
  };

  const decreaseQuantity = () => {
    if (item.quantity > 1) {
      dispatch(decreaseItem(item));
    }
  };

  const removeItem = () => {
    Swal.fire({
      title: "Are you sure?",
      // text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, remove it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Removed!", "Item has been removed!.", "success");
        dispatch(removeFromCart(item));
      }
    });
  };

  const itemPrice = (item.price * item.quantity).toFixed(2);

  return (
    <div className="flex flex-col md:flex-row  items-stretch justify-between gap-5 rounded shadow w-full overflow-hidden p-3">
      <div className="flex items-center w-full gap-5 ">
        <div className=" w-24 md:w-36 md:p-2">
          <img src={item.image} alt="" className="w-full" />
        </div>
        <div className="flex flex-col gap-5 w-full ">
          <h2 className="md:text-lg font-bold"> {item.title} </h2>
          <div className=" flex gap-2 items-center justify-between pr-20 md:pr-0 md:justify-start ">
            <p className="font-medium md:w-40 "> $ {itemPrice} </p>
            <button
              onClick={removeItem}
              className=" hidden md:block text-xl text-red-500 hover:text-red-600 duration-150 "
            >
              {" "}
              <FaTrash />{" "}
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center border-t md:border-t-0 pt-3">
        <div className=" flex flex-row gap-3  md:flex-col  items-center justify-center">
          <button
            className="w-10 h-10  bg-background rounded-full text-primary flex items-center justify-center"
            onClick={decreaseQuantity}
          >
            {" "}
            <HiOutlineMinus />{" "}
          </button>
          <p className="w-10 h-10 border rounded-full border-background flex items-center justify-center">
            {" "}
            {item.quantity}{" "}
          </p>
          <button
            className="w-10 h-10  bg-background rounded-full text-primary flex items-center justify-center"
            onClick={increaseQuantity}
          >
            <BsPlusLg />
          </button>
        </div>
        <button
          onClick={removeItem}
          className=" md:hidden text-2xl text-red-500 hover:text-red-600 duration-150 "
        >
          {" "}
          <FaTrash />{" "}
        </button>
      </div>
    </div>
  );
};

export default CartItem;
