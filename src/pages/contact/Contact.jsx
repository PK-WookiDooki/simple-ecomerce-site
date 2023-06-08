import React, { useState } from "react";
import { PButton, PMInput } from "../../components";
import { showAlert } from "../../features/functions/alert";
import contactUs from "../../assets/images/contact.png";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [nameErr, setNameErr] = useState("");
  const [phoneErr, setPhoneErr] = useState("");
  const [messageErr, setMessageErr] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
    setNameErr("");
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
    setEmailErr("");
  };

  const handleMessage = (e) => {
    setMessage(e.target.value);
    setMessageErr("");
  };
  const handlePhone = (e) => {
    setPhone(e.target.value);
    setPhoneErr("");
  };

  const handleSubmit = () => {
    if (name.trim().length === 0) {
      setNameErr("Name is required!");
      return;
    }
    if (!email.includes("@gmail.com")) {
      setEmailErr("Please provide valid email address!");
      return;
    }
    if (message.trim().length === 0) {
      setMessageErr("message is required!");
      return;
    }

    if (isNaN(phone)) {
      setPhoneErr("Enter valid phone no!");
      return;
    }

    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
    showAlert("Success", "Your message has been sent successfully", "success");
  };

  return (
    <section className="py-5 pt-10 w-[90%] flex flex-col md:flex-row-reverse px-3 items-center ">
      <div className="w-full">
        <img src={contactUs} alt="" />
      </div>
      <div className="w-full md:w-[70%]">
        <h2 className="text-xl font-bold text-center mb-5">Contact Us</h2>
        <div className="mb-3">
          <PMInput
            placeholder={"Enter your name"}
            value={name}
            handleChange={handleName}
            error={nameErr}
          />
          <PMInput
            placeholder={"Enter your email"}
            type={"email"}
            value={email}
            handleChange={handleEmail}
            error={emailErr}
          />
          <PMInput
            placeholder={"Phone No. (optional)"}
            value={phone}
            handleChange={handlePhone}
            error={phoneErr}
          />
          <div className="">
            <textarea
              value={message}
              onChange={handleMessage}
              name="message"
              id="message"
              placeholder="Your Message"
              rows="8"
              className={` border border-background rounded-sm w-full outline-none p-2 placeholder:capitalize placeholder:text-gray-500 duration-150 `}
            ></textarea>
            {messageErr && (
              <p className="text-sm mt-1 text-red-500"> {messageErr} </p>
            )}
          </div>
        </div>
        <div className=" flex">
          <PButton
            title={"Send Message"}
            ml={"ml"}
            width={"full"}
            toggle={handleSubmit}
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
