import React, { useEffect, useState } from "react";
import { PButton, PMInput, Payments } from "../../components";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { useSelector } from "react-redux";

const CheckOut = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [isTrue, setIsTrue] = useState(false);
  const [errors, setErrors] = useState({
    nameErr: "",
    addressErr: "",
    cityErr: "",
  });

  const { cartItems } = useSelector((state) => state.products);

  const nav = useNavigate();

  useEffect(() => {
    if (
      name &&
      address &&
      city &&
      name.trim().length < 4 &&
      address.trim().length < 4 &&
      city.trim().length < 4
    ) {
      handleSubmit();
    }
  }, [name, address, city]);

  const handleSubmit = () => {
    if (name.trim().length < 4) {
      setErrors({ nameErr: "Name is invalid!" });
    } else if (address.trim().length < 4) {
      setErrors({ addressErr: "Please fill proper address!" });
    } else if (city.trim().length < 4) {
      setErrors({ cityErr: "Please fill valid city!" });
    } else {
      setErrors({ nameErr: "", addressErr: "", cityErr: "" });
      setIsTrue(true);
    }
  };

  if (cartItems.length == 0) {
    return <Navigate to={"/cart"} />;
  }
  return (
    <section className="pt-10 pb-5 w-[90%] max-w-3xl">
      <Payments />
      <div className=" mt-10">
        <div className=" border-t border-background relative">
          <h2 className="uppercase absolute bg-primary transform top-0 left-1/2 -translate-x-1/2 -translate-y-3 w-fit px-3 min-w-max">
            Or continue to pay with a credit card
          </h2>
        </div>
        <div className=" mt-8">
          <div className=" flex justify-between ">
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
              error={errors?.nameErr}
              placeholder={"name"}
              value={name}
              setValue={setName}
            />
            <PMInput placeholder={"Company (required for business address)"} />
            <PMInput
              error={errors?.addressErr}
              placeholder={"address"}
              value={address}
              setValue={setAddress}
            />
            <PMInput
              error={errors?.cityErr}
              placeholder={"city"}
              value={city}
              setValue={setCity}
            />
            <PMInput
              placeholder={"Phone (optional)"}
              type={"number"}
              icon={
                <BsFillQuestionCircleFill className="text-xl w-10 text-gray-600" />
              }
            />
          </div>
          <div className="flex mt-3 ">
            <PButton
              title={"continue to shipping"}
              width={"full"}
              toggle={handleSubmit}
              path={isTrue ? "/" : ""}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckOut;
