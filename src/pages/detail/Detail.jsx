import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getData } from "../../features/apis/getData";
import { Spinner } from "../../components";
import { AiFillStar } from "react-icons/ai";

const Detail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getSingleProduct();
  }, []);

  const getSingleProduct = async () => {
    const { data } = await getData(`https://fakestoreapi.com/products/${id}`);
    setProduct(data);
    setIsLoading(false);
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="border my-5 rounded p-5 flex flex-col lg:flex-row gap-5 lg:gap-10">
      <div className=" w-full max-w-lg h-auto lg:h-96 ">
        <img
          src={product?.image}
          alt=""
          className=" h-full w-full object-contain mx-auto p-5 shadow"
        />
      </div>
      <div className="text-background flex flex-col gap-3">
        <p className=" px-5 py-1 w-fit rounded-lg bg-background text-primary capitalize">
          {" "}
          {product?.category}{" "}
        </p>
        <h2 className="text-lg font-bold"> {product?.title} </h2>
        <p className=" text-opacity-40"> {product?.description} </p>
        <div className="text-lg flex items-center justify-between">
          <p className=" font-medium"> ${product?.price} </p>
          <p className="flex  items-center gap-1">
            {" "}
            <AiFillStar className="text-lg" /> {product?.rating?.rate} / 5{" "}
          </p>
        </div>
        <div className=" flex items-center justify-between mt-auto">
          <Link
            to={`..`}
            className="px-6 py-[5px] rounded bg-black text-primary hover:scale-105 active:scale-95 duration-150"
          >
            Back
          </Link>
          <button className="px-6 py-[5px] rounded bg-background text-primary hover:scale-105 active:scale-95 duration-150">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Detail;
