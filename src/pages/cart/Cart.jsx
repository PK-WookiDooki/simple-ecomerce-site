import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { CItem, ECart, TRow } from "../../components";
import { BsArrowLeft } from "react-icons/bs";
import { clearCart } from "../../features/services/productsSlice";
import Swal from "sweetalert2";

const Cart = () => {
  const { cartItems, cartQuantity, totalAmount } = useSelector(
    (state) => state.products
  );

  const dispatch = useDispatch();

  const clear = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, clear it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Cleared!", "Your cart has been cleared.", "success");
        dispatch(clearCart());
      }
    });
  };

  if (cartItems.length < 1) {
    return <ECart />;
  }
  return (
    <section className="mt-5 w-[90%] flex flex-col pb-3">
      <h1 className="text-center text-xl font-bold">
        {" "}
        Your Shopping Cart ({cartQuantity} Items)
      </h1>

      <table className=" hidden md:table w-full mt-5 ">
        <thead>
          <tr className="text-left table-row ">
            <th className="py-3"> Description </th>
            <th className="py-3"> Quantity </th>
            <th className="py-3"> Remove </th>
            <th className="py-3"> Price </th>
          </tr>
        </thead>
        <tbody>
          {cartItems?.map((item) => {
            return <TRow item={item} />;
          })}
        </tbody>
      </table>

      <div className="md:hidden flex flex-col gap-3 border-t border-background border-opacity-70 py-3 mt-5 ">
        {cartItems?.map((item) => {
          return <CItem key={item.id} item={item} />;
        })}
      </div>
      <div className=" flex flex-col md:flex-row justify-between p-3 shadow border-t sticky bottom-0 z-[5] mt-auto bg-gray-100 gap-3">
        <div className="">
          <h2 className="text-lg font-bold text-center">
            Total Amount : $ {totalAmount.toFixed(2)}
          </h2>
        </div>
        <div className="flex flex-col gap-2">
          <button
            onClick={clear}
            className="px-5 py-2 bg-red-500 hover:bg-red-600 rounded-sm text-primary duration-200"
          >
            {" "}
            Clear Cart{" "}
          </button>
          <Link
            to={"/products"}
            className=" flex items-center gap-2 px-5 py-2 justify-center w-full rounded-sm bg-gray-700 hover:bg-gray-900 text-primary duration-150"
          >
            {" "}
            <BsArrowLeft className="text-xl" /> Continue Shopping
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Cart;
