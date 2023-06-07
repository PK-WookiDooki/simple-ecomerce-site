import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import FLink from "./FLink";

const Footer = () => {
  const pricing = ["Overview", "Premium Plans", "Promotions"];
  const partners = ["Google", "Amazon", "Shopify", "AWS"];
  const legal = ["Terms & Conditions", "Privacy Policy", "Terms of use"];
  const about = ["Our Story", "Benefits", "Team"];
  const company = [];

  return (
    <footer className="mt-auto bg-gray-800 text-primary py-10">
      <div className=" w-[90%] mx-auto flex flex-col md:flex-row gap-8 items-start">
        <div className=" flex md:flex-col items-center justify-between md:items-start md:justify-start w-full md:w-[50%] gap-5">
          <h2 className="text-xl font-bold uppercase">e-commerce</h2>
          <div className=" flex flex-row items-center gap-3 text-xl">
            <Link
              to={"https://www.facebook.com"}
              target="blank"
              className=" h-8 w-8 flex items-center justify-center rounded-full bg-blue-800 group"
            >
              <FaFacebookF />
            </Link>
            <Link
              to={"https://www.twitter.com"}
              target="blank"
              className=" h-8 w-8 flex items-center justify-center rounded-full bg-blue-500 group"
            >
              <FaTwitter />
            </Link>
            <Link
              to={"https://www.instagram.com"}
              target="blank"
              className=" h-8 w-8 flex items-center justify-center rounded-full bg-red-500 group"
            >
              <FaInstagram />
            </Link>
            <Link
              to={"https://www.linkedin.com"}
              target="blank"
              className=" h-8 w-8 flex items-center justify-center rounded-full bg-blue-600 group"
            >
              <FaLinkedinIn />
            </Link>
          </div>
        </div>
        <div className=" flex justify-between flex-wrap md:flex-nowrap w-full gap-3">
          <FLink title={"Pricing"} links={pricing} />
          <FLink title={"partners"} links={partners} />
          <FLink title={"legal"} links={legal} />
          <FLink title={"About Us"} links={about} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
