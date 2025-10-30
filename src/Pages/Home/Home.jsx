import axios from "axios";
import Footer from "../Shared/Footer/Footer";
import Categories from "./Categories/Categories";
import FeatureProducts from "./FeaturedProducts/FeatureProducts";
import HowItWorks from "./HowItWorks/HowItWorks";
import Slider from "./Slider/Slider";
import { useState, useEffect } from "react";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animations when component mounts
    setIsVisible(true);
    
    axios
      .get("products.json")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error(err.message));
  }, []);

  return (
    <div>
      {/* Hero Section with Enhanced Design */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-900 to-emerald-800 opacity-90"></div>
        <div className="relative z-10 my-10 px-4 md:px-10 text-white py-20 md:py-32">
          <h1 className={`text-4xl md:text-6xl font-bold mb-6 animate__animated ${isVisible ? 'animate__fadeInLeft' : ''}`}>
            Natural Products <br />
            For Lovers of <span className="text-yellow-400">Healthy</span> <br /> Organic Food
          </h1>
          <p className={`text-xl mb-8 max-w-2xl animate__animated ${isVisible ? 'animate__fadeInUp animate__delay-1s' : ''}`}>
            Discover fresh, organic produce directly from local farmers to your table.
          </p>
          <button className={`bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105 animate__animated ${isVisible ? 'animate__fadeIn animate__delay-2s' : ''}`}>
            Discover More
          </button>
        </div>
      </div>

      {/* Sections with Animations */}
      <div className="container mx-auto px-4">
        <div className={`animate__animated ${isVisible ? 'animate__fadeInUp' : ''} mt-12`}>
          <Slider />
        </div>
        
        <div className={`mt-16 animate__animated ${isVisible ? 'animate__fadeInUp animate__delay-1s' : ''}`}>
          <Categories />
        </div>
        
        <div className={`mt-16 animate__animated ${isVisible ? 'animate__fadeInUp animate__delay-2s' : ''}`}>
          <FeatureProducts products={products} />
        </div>
        
        <div className={`mt-16 animate__animated ${isVisible ? 'animate__fadeInUp animate__delay-3s' : ''}`}>
          <HowItWorks />
        </div>
      </div>

      <div className={`mt-16 animate__animated ${isVisible ? 'animate__fadeIn' : ''}`}>
        <Footer />
      </div>
    </div>
  );
};

export default Home;