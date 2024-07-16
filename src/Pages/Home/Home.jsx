import axios from "axios";
import Footer from "../Shared/Footer/Footer";
import Categories from "./Categories/Categories";
import FeatureProducts from "./FeaturedProducts/FeatureProducts";
import HowItWorks from "./HowItWorks/HowItWorks";
import Slider from "./Slider/Slider";
import { useState } from "react";

const Home = () => {
  const [products, setProducts] = useState([]);
  axios
    .get("products.json")
    .then((res) => setProducts(res.data))
    .catch((err) => err.message);
  return (
    <div>
      <Slider></Slider>
      <Categories />
      <div className="my-10 px-10 text-white bg-gradient-to-r from-[#151515] to-transparent py-full ">
        <h1 className="text-3xl md:text-5xl font-semibold p-10 pt-28">
          Natural Products <br />
          For Lovers of <span className="text-yellow-500">
            Healthy
          </span> <br /> Organic Food
        </h1>
        <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md transition duration-300 m-10">
          Discover more
        </button>
      </div>
      <FeatureProducts products={products}></FeatureProducts>
      <HowItWorks />

      <Footer />
    </div>
  );
};

export default Home;
