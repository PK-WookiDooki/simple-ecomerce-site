import React from "react";
import { FaApplePay, FaGooglePay, FaAmazonPay } from "react-icons/fa";
import { SiSamsungpay } from "react-icons/si";
import { Link } from "react-router-dom";
import PMLink from "./PMLink";

const Payments = () => {
  return (
    <section className="border border-background relative p-3 rounded-sm tracking-wide">
      <h2 className="text-lg font-semibold absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4 bg-primary px-1  min-w-max">
        Express Checkout
      </h2>
      <div className="flex items-center justify-center gap-2 ">
        <PMLink
          icon={<FaAmazonPay />}
          color={"gold"}
          path={"https://www.amazon.com"}
        />
        <PMLink
          icon={<FaApplePay />}
          color={"black"}
          path={"https://www.apple.com"}
        />
        <PMLink
          icon={<FaGooglePay />}
          color={"red"}
          path={"https://www.amazon.com"}
        />
        <PMLink
          icon={<SiSamsungpay />}
          color={"blue"}
          path={"https://www.amazon.com"}
        />
      </div>
    </section>
  );
};

export default Payments;
