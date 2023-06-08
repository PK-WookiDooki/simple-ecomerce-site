import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { CItem, ECart, PButton, TRow } from "../../components";
import { BsArrowLeft } from "react-icons/bs";
import { clearCart } from "../../features/services/productsSlice";
import Swal from "sweetalert2";
import { showAlert } from "../../features/functions/alert";
import cookie from "cookiejs";

const Cart = () => {
  const { cartItems, cartQuantity, totalAmount } = useSelector(
    (state) => state.products
  );

  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(0);

  const handleDiscount = () => {
    // e.preventDefault();
    if (!promoCode) {
      return showAlert("Error", "Please enter proper promo code!", "error");
    } else if (promoCode.trim().length != 6) {
      return showAlert("Error", "Your promo code is invalid!", "error");
    }
    const totalDiscount = totalAmount * (15 / 100);
    setDiscount(totalDiscount.toFixed(2));
    setPromoCode(promoCode);
  };

  useEffect(() => {
    if (promoCode) {
      handleDiscount();
    }
  }, [totalAmount]);

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
            <th className="py-3"> Price </th>
            <th className="py-3"> Quantity </th>
            <th className="py-3"> Remove </th>
          </tr>
        </thead>
        <tbody>
          {cartItems?.map((item) => {
            return <TRow key={item.id} item={item} />;
          })}
        </tbody>
      </table>

      <div className="md:hidden flex flex-col gap-3 border-t border-background border-opacity-70 py-3 mt-5 ">
        {cartItems?.map((item) => {
          return <CItem key={item.id} item={item} />;
        })}
      </div>
      <div className=" flex flex-col lg:flex-row items-start justify-between p-3 shadow border-t sticky bottom-0 z-[5] mt-auto bg-gray-100 gap-3 md:gap-8">
        <div className=" flex flex-col items-stretch gap-3 w-full lg:max-w-2xl ">
          <div className=" flex items-center h-10 w-full  border border-background rounded-sm">
            <input
              type="text"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
              placeholder="Please enter promo code to get 15% off"
              className=" h-full w-full bg-transparent pl-2 outline-none text-background tracking-wide focus:bg-primary duration-150 placeholder:text-sm "
            />
            <PButton title={"Redeem"} toggle={handleDiscount} />
          </div>
          <div className="flex flex-col gap-3 md:flex-row md:items-start">
            <div className=" flex items-center min-w-[180px] justify-between px-2 py-1 border border-background rounded-sm">
              <h2 className="text-lg font-medium">Discount </h2>
              <span className=" text-2xl font-semibold"> $ {discount} </span>
            </div>
            <div className=" flex items-center min-w-[180px] justify-between px-2 py-1 border border-background rounded-sm">
              <h2 className="text-lg font-medium">Total </h2>
              <span className=" text-2xl font-semibold">
                {" "}
                $ {totalAmount.toFixed(2)}{" "}
              </span>
            </div>
            <PButton
              path={"checkout"}
              title={"Checkout Now"}
              width={"full"}
              ml={"ml"}
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row-reverse lg:flex-col gap-3 w-full lg:max-w-[280px]">
          <button
            onClick={clear}
            className=" w-full px-5 py-2 bg-red-600 hover:bg-red-500 rounded-sm text-primary duration-200"
          >
            {" "}
            Clear Cart{" "}
          </button>
          <Link
            to={"/products"}
            className=" flex items-center gap-2 px-5 py-2 justify-center w-full rounded-sm bg-gray-900 hover:bg-gray-700 text-primary duration-150"
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
