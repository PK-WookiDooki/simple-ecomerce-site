import React, { useEffect, useState } from "react";
import { getData } from "../../features/apis/getData";
import { useDispatch, useSelector } from "react-redux";
import { addProducts, setKeyword } from "../../features/services/productsSlice";
import { Card, Spinner, SInput } from "../../components";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    getProducts();
    dispatch(setKeyword(search));
  }, [search]);

  const { keyword } = useSelector((state) => state.products);

  const filteredProducts = products?.filter((item) =>
    item.title.toLowerCase().includes(keyword.toLowerCase())
  );

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

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <section className=" w-[90%] mx-auto">
      <div className=" py-5">
        <div className="flex flex-col mb-5 gap-3 md:flex-row items-start md:items-center justify-between">
          <h1 className="text-2xl font-bold text-background ">
            Explore What You Want!
          </h1>
          <SInput
            search={search}
            setSearch={setSearch}
            handleSubmit={handleSubmit}
          />
        </div>
        <div className="flex flex-row flex-wrap items-stretch justify-center gap-5">
          {filteredProducts?.map((item) => {
            return <Card key={item.id} item={item} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Products;
