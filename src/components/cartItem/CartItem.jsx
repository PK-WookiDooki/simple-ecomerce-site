import React from "react";
import { FaTrash } from "react-icons/fa";
import { BsPlusLg } from "react-icons/bs";
import { HiOutlineMinus } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { RxCross1 } from "react-icons/rx";
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
    <div className="flex flex-col md:flex-row  items-stretch justify-between gap-5 rounded-sm w-full overflow-hidden p-3 border-b border-background border-opacity-70">
      <div className="flex items-center w-full gap-5">
        <div className=" w-24 md:w-36">
          <img src={item.image} alt="" className="w-full" />
        </div>
        <div className="flex flex-col gap-5 w-full ">
          <h2 className="text-lg font-medium"> {item.title} </h2>
          <div className=" flex items-center justify-between gap-2 ">
            <p className="text-lg font-semibold w-20 "> $ {itemPrice} </p>
            <div className=" flex flex-row gap-2 md:flex-col items-center justify-center">
              <button
                className="w-10 h-10  bg-background rounded-sm text-primary flex items-center justify-center"
                onClick={decreaseQuantity}
              >
                {" "}
                <HiOutlineMinus />{" "}
              </button>
              <p className=" text-lg w-10 h-10 border rounded-sm border-background flex items-center justify-center">
                {" "}
                {item.quantity}{" "}
              </p>
              <button
                className="w-10 h-10  bg-background rounded-sm text-primary flex items-center justify-center"
                onClick={increaseQuantity}
              >
                <BsPlusLg />
              </button>
            </div>
            <button
              onClick={removeItem}
              className=" w-10 h-10 border border-red-600 text-red-600 rounded-sm flex items-center justify-center hover:bg-red-600 hover:text-primary duration-200 text-lg"
            >
              {" "}
              <RxCross1 />{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
