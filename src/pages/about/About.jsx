import React, { useEffect, useState } from "react";
import { getData } from "../../features/apis/getData";
import { CatCard, Spinner } from "../../components";
import message from "../../assets/images/message.png";

const About = () => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = async () => {
    const { data } = await getData(
      "https://fakestoreapi.com/products/categories"
    );
    setIsLoading(false);
    setCategories(data);
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <section className=" w-[90%] py-5 tracking-wide">
      <div className="flex flex-col lg:flex-row items-center lg:gap-10">
        <div className=" text-center md:text-left w-full p-3">
          <h2 className=" text-2xl font-bold mb-5"> Story About Us </h2>
          <p className="text-gray-500 leading-7 px-2 md:px-0">
            Welcome to our ecommerce website! We are passionate about delivering
            exceptional products and a seamless shopping experience. With a
            curated selection of top-quality items, we strive to provide our
            customers with the best of the best. Our dedicated team works
            tirelessly to source products that meet our strict standards of
            quality, durability, and style. We believe in making online shopping
            convenient and enjoyable, which is why we offer fast shipping and
            hassle-free returns. Whether you're searching for fashion, home
            goods, electronics, or more, you'll find a wide range of options to
            suit your needs and preferences.
          </p>
        </div>
        <div className="w-full">
          <img src={message} alt="" />
        </div>
      </div>
      <div className="mt-5">
        <h2 className="text-2xl font-bold capitalize text-center lg:text-left p-3">
          {" "}
          Category Lists in our shop{" "}
        </h2>
        <div className="flex flex-col md:flex-row flex-wrap gap-5 items-stretch justify-center mt-3">
          <CatCard
            title={"electronics"}
            desc={
              " Discover the latest in cutting-edge technology with our extensive range of electronics. From smartphones and laptops to home appliances and entertainment systems, we offer top brands and innovative gadgets that enhance your digital lifestyle. "
            }
          />
          <CatCard
            title={"jewelry"}
            desc={
              " Adorn yourself with the timeless beauty of our exquisite jewelry collection. From delicate necklaces and statement rings to sparkling earrings and sophisticated bracelets, each piece is crafted with precision and attention to detail."
            }
          />
          <CatCard
            title={"men's clothing"}
            desc={
              " Elevate your style with our collection of men's clothing, designed to make a statement. Whether you're looking for tailored suits, casual wear, or accessories, our fashion-forward selection ensures you'll find the perfect pieces to suit your taste and personality."
            }
          />
          <CatCard
            title={"women's clothing"}
            desc={
              "Embrace your individuality and express your personal style with our diverse range of women's clothing. From trendy dresses and chic tops to comfortable lounge-wear and elegant accessories, our curated collection caters to every occasion and fashion preference."
            }
          />
        </div>
      </div>
    </section>
  );
};

export default About;
