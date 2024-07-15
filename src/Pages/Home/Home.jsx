import Footer from "../Shared/Footer/Footer";
import Categories from "./Categories/Categories";
import HowItWorks from "./HowItWorks/HowItWorks";
import Slider from "./Slider/Slider";

const Home = () => {
  return (
    <div>
      <Slider></Slider>

      <HowItWorks />
      <Categories />
      <div className="my-10 text-white bg-gradient-to-r from-[#151515] to-transparent py-full ">
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

      <Footer />
    </div>
  );
};

export default Home;
