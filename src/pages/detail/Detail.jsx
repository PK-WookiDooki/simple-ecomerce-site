import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getData } from "../../features/apis/getData";
import { RCard, Spinner } from "../../components";
import { AiFillStar } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../features/services/productsSlice";

const Detail = () => {
  const { id } = useParams();
  const [currentProduct, setCurrentProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getSingleProduct();
    getProducts();
  }, [id]);

  const getSingleProduct = async () => {
    const { data } = await getData(`https://fakestoreapi.com/products/${id}`);
    setCurrentProduct(data);
    setIsLoading(false);
  };

  const getProducts = async () => {
    try {
      const { data } = await getData("https://fakestoreapi.com/products");
      setIsLoading(false);
      setProducts(data);
    } catch (err) {
      console.log(err);
    }
  };
  const sameCategory = products?.filter(
    (item) =>
      item.category === currentProduct?.category &&
      item.id !== Number(currentProduct.id)
  );

  const dispatch = useDispatch();

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <section className="my-5 ">
      <div className="border rounded p-5 flex flex-col lg:flex-row gap-5 lg:gap-10">
        <div className=" w-full max-w-lg h-auto lg:h-96 ">
          <img
            src={currentProduct?.image}
            alt=""
            className=" h-full w-full object-contain mx-auto p-5 shadow"
          />
        </div>
        <div className="text-background flex flex-col gap-3">
          <p className=" px-5 py-1 w-fit rounded-lg bg-background text-primary capitalize">
            {" "}
            {currentProduct?.category}{" "}
          </p>
          <h2 className="text-xl font-bold"> {currentProduct?.title} </h2>
          <p className=" text-opacity-40"> {currentProduct?.description} </p>
          <div className="text-lg flex items-center justify-between">
            <p className=" font-medium"> ${currentProduct?.price} </p>
            <p className="flex  items-center gap-1">
              {" "}
              <AiFillStar className="text-lg" /> {currentProduct?.rating?.rate}{" "}
              / 5{" "}
            </p>
          </div>
          <div className=" flex items-center justify-between mt-auto">
            <Link
              to={`..`}
              className="px-6 py-[5px] rounded bg-black text-primary hover:scale-105 active:scale-95 duration-150"
            >
              Back
            </Link>
            <button
              onClick={() => dispatch(addToCart(currentProduct))}
              className="px-6 py-[5px] rounded bg-background text-primary hover:scale-105 active:scale-95 duration-150"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <div className=" mt-5">
        <h2 className=" capitalize text-lg font-medium">You may also like</h2>
        <div className=" flex flex-col md:flex-row flex-wrap gap-3 items-stretch justify-normal mt-3 ">
          {sameCategory?.map((item) => {
            return <RCard key={item.id} item={item} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Detail;
