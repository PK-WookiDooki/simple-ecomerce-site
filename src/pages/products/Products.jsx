import React, { useEffect, useState } from "react";
import { getData } from "../../features/apis/getData";
import { useDispatch } from "react-redux";
import { addProducts } from "../../features/services/productsSlice";
import { Card, Spinner } from "../../components";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    getProducts();
  }, []);

  const dispatch = useDispatch();

  const getProducts = async () => {
    try {
      const { data } = await getData("https://fakestoreapi.com/products");
      setIsLoading(false);
      setProducts(data);
      dispatch(addProducts(data));
    } catch (err) {
      console.log(err);
    }
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <section className="">
      <div className=" py-5">
        <h1 className="text-2xl text-background text-center mb-5">
          Explore What You Want!
        </h1>
        <div className="flex flex-row flex-wrap items-stretch justify-center gap-5">
          {products?.map((item) => {
            return <Card key={item.id} item={item} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Products;
