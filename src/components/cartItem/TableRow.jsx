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

const TableRow = ({ item }) => {
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
    <tr className=" border-t border-b  p-3 table-row ">
      <td className="py-3">
        <div className="flex items-center gap-5">
          <div className=" w-24 md:w-36 md:p-2">
            <img src={item.image} alt="" className="w-full" />
          </div>
          <div className=" ">
            <p className="text-gray-400 text-sm mb-2 capitalize">
              {" "}
              {item.category}{" "}
            </p>
            <h2 className="md:text-lg font-bold"> {item.title} </h2>
          </div>
        </div>
      </td>
      <td className="py-3">
        <div className=" flex flex-row gap-2 items-center">
          <button
            className="w-10 h-10  bg-background rounded-sm text-primary flex items-center justify-center"
            onClick={decreaseQuantity}
          >
            {" "}
            <HiOutlineMinus />{" "}
          </button>
          <p className="w-10 h-10 border rounded-sm border-background flex items-center justify-center">
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
      </td>
      <td className="py-3">
        <div className=" ">
          <button
            onClick={removeItem}
            className=" w-10 h-10 border border-red-600 text-red-600 rounded-sm flex items-center justify-center hover:bg-red-600 hover:text-primary duration-200  "
          >
            {" "}
            <FaTrash />{" "}
          </button>
        </div>
      </td>
      <td className="py-3">
        <p className=" font-semibold text-lg"> $ {itemPrice} </p>
      </td>
    </tr>
  );
};

export default TableRow;
