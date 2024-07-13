import Navbar from "../../shared/Navbar/Navbar";

const Banner = () => {
  return (
    <div className="h-lvh banner_background">
      <Navbar></Navbar>
      <div>
        <div className="flex flex-col gap-3 mt-14">
          <h1 className="text-3xl text-white mx-auto">
            Welcome to Krishi Bondhu
          </h1>
          <p className="text-sm text-white mx-auto">
            We contents consumers direct to the Farmers
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
