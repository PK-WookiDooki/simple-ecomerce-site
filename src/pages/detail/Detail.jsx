import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getData } from "../../features/apis/getData";
import { PButton, RCard, Spinner } from "../../components";
import { AiFillStar } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../features/services/productsSlice";
import { generateStars } from "../../features/functions/rating";

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
  const addItemToCart = () => {
    dispatch(addToCart(currentProduct));
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <section className="my-5 tracking-wide w-[90%] select-none">
      <div className="border  p-5 flex flex-col lg:flex-row gap-5 lg:gap-10">
        <div className=" w-full md:w-[600px] h-auto lg:h-96 ">
          <img
            src={currentProduct?.image}
            alt=""
            className=" h-full w-full object-contain mx-auto p-5 shadow"
          />
        </div>
        <div className="text-background flex flex-col gap-3 w-full pr-5">
          <p className=" w-fit text-sm text-gray-400 capitalize">
            {" "}
            {currentProduct?.category}{" "}
          </p>
          <h2 className="text-xl font-bold"> {currentProduct?.title} </h2>
          <div className="text-lg flex items-center justify-between">
            <p className=" font-medium"> ${currentProduct?.price} </p>
            <p className="flex  items-center gap-1">
              {generateStars(Math.floor(currentProduct?.rating?.rate))}
            </p>
          </div>
          <p className=" text-opacity-40"> {currentProduct?.description} </p>
          <div className=" flex items-center justify-between mt-auto">
            <Link
              to={`..`}
              className="px-6 py-2 rounded-sm  bg-black text-primary hover:bg-gray-800 active:scale-95 duration-150"
            >
              Back
            </Link>
            <PButton title={"Add to Cart"} toggle={addItemToCart} />
          </div>
        </div>
      </div>
      <div className=" mt-5 bg-gray-200 rounded-sm py-3">
        <h2 className=" capitalize text-lg font-semibold text-center">
          You may also like
        </h2>
        <div className=" flex flex-col md:flex-row flex-wrap gap-5 items-stretch justify-center mt-3 ">
          {sameCategory?.map((item) => {
            return <RCard key={item.id} item={item} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Detail;
