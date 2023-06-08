import React, { useEffect, useState } from "react";
import { PButton, PMInput, Payments } from "../../components";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../../features/services/productsSlice";
import { showAlert } from "../../features/functions/alert";

const CheckOut = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [nameErr, setNameErr] = useState("");
  const [addressErr, setAddressErr] = useState("");
  const [cityErr, setCityErr] = useState("");

  const { cartItems } = useSelector((state) => state.products);

  const nav = useNavigate();
  const dispatch = useDispatch();
  const handleName = (e) => {
    setName(e.target.value);
    setNameErr("");
  };
  const handleAddress = (e) => {
    setAddress(e.target.value);
    setAddressErr("");
  };
  const handleCity = (e) => {
    setCity(e.target.value);
    setCityErr("");
  };

  const handleSubmit = () => {
    if (name.trim().length === 0) {
      setNameErr("Name is required!");
      return;
    }
    if (address.trim().length === 0) {
      setAddressErr("Address is required!");
      return;
    }
    if (city.trim().length === 0) {
      setCityErr("Please provide valid city!");
      return;
    }
    dispatch(clearCart());
    showAlert("Thank You!", "Your order is confirmed.", "success");
  };

  if (cartItems.length == 0) {
    return <Navigate to={"/cart"} />;
  }
  return (
    <section className="pt-10 pb-5 w-[90%] max-w-3xl">
      <Payments />
      <div className=" mt-10">
        <div className=" border-t border-background relative">
          <h2 className="uppercase absolute bg-primary transform top-0 left-1/2 -translate-x-1/2 -translate-y-3 w-fit px-1 min-w-max text-sm">
            Or continue to pay with a credit card
          </h2>
        </div>
        <div className=" mt-8">
          <div className=" flex flex-col gap-1 md:flex-row justify-between ">
            <h2 className="text-xl font-semibold"> Contact Information</h2>
            <div className="flex items-center gap-1 text-sm">
              <p> Already have an account? </p>
              <Link className="font-semibold underline">Login</Link>
            </div>
          </div>
          <div className="mt-3">
            <PMInput type={"email"} placeholder={"Enter your email"} />
            <div className=" flex items-center gap-2 -mt-2">
              <input
                type="checkbox"
                className="w-5 h-5 accent-background"
                id="email"
              />
              <label htmlFor="email" className="">
                Email me with news and offers.
              </label>
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h2 className="text-xl font-semibold">Shipping Address</h2>
          <div className="flex flex-col mt-3">
            <PMInput
              error={nameErr}
              placeholder={"name"}
              value={name}
              handleChange={handleName}
            />
            <PMInput placeholder={"Company (required for business address)"} />
            <PMInput
              error={addressErr}
              placeholder={"address"}
              value={address}
              handleChange={handleAddress}
            />
            <PMInput
              error={cityErr}
              placeholder={"city"}
              value={city}
              handleChange={handleCity}
            />
            <PMInput
              placeholder={"Phone (optional)"}
              type={"number"}
              icon={
                <BsFillQuestionCircleFill className="text-xl w-10 text-gray-600" />
              }
            />
          </div>
          <div className="flex mt-3 gap-2 flex-col-reverse md:flex-row ">
            <PButton
              title={"Back to Cart"}
              width={"full"}
              path={"/cart"}
              bg={"gray"}
            />
            <PButton
              title={"Confirm Order"}
              width={"full"}
              toggle={handleSubmit}
              ml={"ml"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckOut;
