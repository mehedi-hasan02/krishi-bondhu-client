import Carousel from "../Shared/Navbar/Carousel";
import Categories from "./Categories/Categories";
import HowItWorks from "./HowItWorks/HowItWorks";

const Home = () => {
  return (
    <div>
      <Carousel className="relative"></Carousel>
      <div className="absolute top-1/3 left-10 lg:left-1/4 text-white bg-gradient-to-r from-[#151515] to-transparent py-full ">
        <h1 className="text-3xl md:text-5xl font-semibold p-10 pt-28">
          Natural Products <br />
          For Lovers of <span className="text-yellow-500">
            Healthy
          </span> <br /> Organic Food
        </h1>
        <button className="btn btn-success text-white mb-4 mx-10">
          Discover more
        </button>
      </div>
      <HowItWorks></HowItWorks>
      <Categories></Categories>
    </div>
  );
};

export default Home;
