import Carousel from "../../components/Carousel/Carousel";

const Home = () => {
  return (
    <div>
      <Carousel className="relative"></Carousel>
      <div className="absolute bottom-1/3 left-1/3 text-white">
        <h1 className="text-5xl font-semibold">
          Natural Products <br />
          For Lovers of <span className="text-yellow-600">
            Healthy
          </span> <br /> Organic Food
        </h1>
        <button className="btn btn-success text-white mt-4">
          Discover more
        </button>
      </div>
    </div>
  );
};

export default Home;
