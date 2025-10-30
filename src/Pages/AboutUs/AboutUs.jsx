import { FaSeedling, FaLeaf, FaHandsHelping, FaChartLine } from "react-icons/fa";
import Carousel from "../../Components/Shared/Carousel";

const AboutUs = () => {
  // Custom slides for the About page carousel
  const aboutCarouselSlides = [
    {
      type: 'image',
      src: "https://i.ibb.co/WpNxtXT/advanced-crop-1.jpg",
      alt: "Our Farms",
      overlay: true,
      content: {
        title: "Our Sustainable Farms",
        description: "Discover how we work with local farmers to promote sustainable agriculture"
      }
    },
    {
      type: 'image',
      src: "https://i.ibb.co/3FZR6HP/crops.jpg",
      alt: "Fresh Produce",
      overlay: true,
      content: {
        title: "Fresh From Farm to Table",
        description: "Get the freshest produce directly from our farmers to your kitchen"
      }
    },
    {
      type: 'image',
      src: "https://i.ibb.co/GkGCzpC/CUCUMBER.jpg",
      alt: "Organic Products",
      overlay: true,
      content: {
        title: "100% Organic Products",
        description: "All our products are grown without harmful chemicals or pesticides"
      }
    }
  ];

  return (
    <div className="bg-gradient-to-br from-green-50 to-emerald-100 min-h-screen py-10 animate__animated animate__fadeIn">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <header className="text-center mb-16 mt-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 animate__animated animate__fadeInDown">
            About KrishiBondhu
          </h1>
          <div className="w-24 h-1 bg-green-500 mx-auto rounded-full"></div>
          <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto animate__animated animate__fadeInUp animate__delay-1s">
            Connecting farmers directly to consumers for a sustainable future
          </p>
        </header>

        {/* Hero Carousel Section */}
        <section className="max-w-6xl mx-auto mb-16 animate__animated animate__fadeInUp">
          <Carousel 
            slides={aboutCarouselSlides}
            autoPlay={true}
            delay={4000}
            className="rounded-2xl shadow-xl"
          />
        </section>

        {/* Hero Section */}
        <section className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl p-8 mb-16 animate__animated animate__fadeInUp">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Welcome to KrishiBondhu</h2>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Welcome to KrishiBondhu, your trusted platform connecting farmers directly to consumers in Bangladesh. 
                We are committed to bridging the gap between local farmers and consumers, ensuring fresh, quality produce 
                reaches your table while empowering farmers to get fair prices for their hard work.
              </p>
              <div className="flex items-center gap-4 mt-8">
                <div className="bg-green-100 p-3 rounded-full">
                  <FaSeedling className="text-green-600 text-2xl" />
                </div>
                <p className="text-gray-600 font-medium">Supporting Local Farmers</p>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-80 md:h-96 flex items-center justify-center">
                <span className="text-gray-500">Farmers & Community Image</span>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl p-8 mb-16 animate__animated animate__fadeInUp animate__delay-1s">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Mission</h2>
            <div className="w-16 h-1 bg-green-500 mx-auto rounded-full"></div>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2 order-2 md:order-1">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-80 flex items-center justify-center">
                <span className="text-gray-500">Mission Image</span>
              </div>
            </div>
            <div className="md:w-1/2 order-1 md:order-2">
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                At KrishiBondhu, our mission is simple: to create a sustainable, transparent, and efficient marketplace 
                for agricultural products. We aim to support the local farming community by providing them with the tools 
                they need to succeed and grow, while also delivering fresh, healthy, and affordable produce to consumers.
              </p>
              <div className="flex items-center gap-4 mt-6">
                <div className="bg-emerald-100 p-3 rounded-full">
                  <FaLeaf className="text-emerald-600 text-2xl" />
                </div>
                <p className="text-gray-600 font-medium">Promoting Sustainable Agriculture</p>
              </div>
            </div>
          </div>
        </section>

        {/* What We Offer Section */}
        <section className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl p-8 mb-16 animate__animated animate__fadeInUp">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">What We Offer</h2>
            <div className="w-16 h-1 bg-green-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-green-50 p-6 rounded-xl border border-green-100 transform transition-all duration-300 hover:scale-105">
              <div className="bg-green-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <FaHandsHelping className="text-green-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Direct Connection</h3>
              <p className="text-gray-600">
                Eliminating middlemen to ensure farmers get fair prices and consumers receive fresher goods at competitive prices.
              </p>
            </div>
            
            <div className="bg-emerald-50 p-6 rounded-xl border border-emerald-100 transform transition-all duration-300 hover:scale-105">
              <div className="bg-emerald-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <FaLeaf className="text-emerald-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Wide Variety</h3>
              <p className="text-gray-600">
                Access to diverse agricultural products including fruits, vegetables, grains, dairy, and more, all sourced locally.
              </p>
            </div>
            
            <div className="bg-teal-50 p-6 rounded-xl border border-teal-100 transform transition-all duration-300 hover:scale-105">
              <div className="bg-teal-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <FaChartLine className="text-teal-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Easy Platform</h3>
              <p className="text-gray-600">
                User-friendly interface for farmers to list products and for consumers to browse, order, and track purchases.
              </p>
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section className="max-w-6xl mx-auto bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl shadow-xl p-8 mb-16 text-white animate__animated animate__fadeInUp">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Our Impact</h2>
            <div className="w-16 h-1 bg-white mx-auto rounded-full mb-6"></div>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Making a positive impact on the agricultural community in Bangladesh by connecting farmers directly with consumers.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
              <div className="bg-white/20 p-6 rounded-xl backdrop-blur-sm">
                <div className="text-4xl font-bold mb-2">500+</div>
                <div className="text-lg">Farmers Connected</div>
              </div>
              
              <div className="bg-white/20 p-6 rounded-xl backdrop-blur-sm">
                <div className="text-4xl font-bold mb-2">1000+</div>
                <div className="text-lg">Happy Customers</div>
              </div>
              
              <div className="bg-white/20 p-6 rounded-xl backdrop-blur-sm">
                <div className="text-4xl font-bold mb-2">50+</div>
                <div className="text-lg">Product Categories</div>
              </div>
            </div>
          </div>
        </section>

        {/* Join Us Section */}
        <section className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl p-8 mb-16 animate__animated animate__fadeInUp">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Join Us</h2>
            <div className="w-16 h-1 bg-green-500 mx-auto rounded-full mb-6"></div>
            <p className="text-gray-700 mb-8 text-lg max-w-3xl mx-auto">
              Whether you are a farmer looking to expand your market reach or a consumer seeking fresh, local produce, 
              KrishiBondhu is here to serve you. Join us in our mission to create a more sustainable and equitable 
              food system in Bangladesh.
            </p>
            <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
              Get Started Today
            </button>
          </div>
        </section>

        {/* Contact Section */}
        <section className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 animate__animated animate__fadeInUp">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Contact Us</h2>
            <div className="w-16 h-1 bg-green-500 mx-auto rounded-full mb-6"></div>
            <p className="text-gray-700 mb-6">
              Have questions or need assistance? Our dedicated support team is always ready to help.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6 mt-8">
              <div className="flex items-center justify-center gap-3">
                <div className="bg-green-100 p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <a href="mailto:email@example.com" className="text-green-600 font-medium hover:underline">
                  email@example.com
                </a>
              </div>
              <div className="flex items-center justify-center gap-3">
                <div className="bg-green-100 p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <a href="tel:+8801234567890" className="text-green-600 font-medium hover:underline">
                  +880 1234-567890
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;