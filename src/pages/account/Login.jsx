import React, { useState } from "react";
import { PButton, PMInput } from "../../components";
import cookie from "cookiejs";
import { useNavigate } from "react-router-dom";
import image from "../../assets/images/sign_up.png";
import { showAlert } from "../../features/functions/alert";

const Login = () => {
  const [info, setInfo] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const nav = useNavigate();

  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = () => {
    if (!info.email.includes("@") || info.email.trim().length === 0) {
      setErrors({ ...errors, email: "Enter valid email address!" });
      return;
    }
    if (info.password.trim().length < 8 || info.password.trim().length === 0) {
      setErrors({ ...errors, password: "Your password is incorrect!" });
      return;
    }
    const token = Math.random().toString(36).slice(2);
    cookie.set("token", token);
    showAlert(
      "Success",
      "Login account successful! You can now checkout your order!",
      "success"
    );
    nav("/");
  };

  return (
    <section className="w-[90%] py-5 pt-10 flex flex-col md:flex-row-reverse items-center md:justify-between gap-5 md:px-3">
      <div className="w-full md:w-[60%] ">
        <img src={image} alt="" className="w-full" />
      </div>
      <div className="w-full md:w-[50%]">
        <h2 className="text-xl font-bold text-center capitalize">
          {" "}
          login Account
        </h2>

        <div className="mt-5">
          <PMInput
            placeholder={" email"}
            type={"email"}
            value={info.email}
            handleChange={handleChange}
            error={errors.email}
          />
          <PMInput
            placeholder={"Password"}
            type={"password"}
            value={info.password}
            handleChange={handleChange}
            error={errors.password}
          />
        </div>
        <div className=" flex">
          <button
            onClick={handleSubmit}
            className={` text-center bg-background hover:bg-green-900 duration-150 px-6 py-2 rounded-sm w-full md:w-fit md:ml-auto text-primary capitalize`}
          >
            Login Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Login;
