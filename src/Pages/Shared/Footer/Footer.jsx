import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link to="/">
              <img
                src="https://i.ibb.co/5RKgH3K/logo.png"
                className="w-full md:w-1/3"
              />
            </Link>
            <p className="text-gray-400">
              Connecting farmers and consumers in Bangladesh
            </p>
          </div>
          <div className="flex space-x-4 mb-4 md:mb-0">
            <Link to="/" className="text-gray-400 hover:text-white">
              Home
            </Link>
            <Link to="/about" className="text-gray-400 hover:text-white">
              About Us
            </Link>
            <Link to="/contact" className="text-gray-400 hover:text-white">
              Contact
            </Link>
            <Link
              to="/privacy-policy"
              className="text-gray-400 hover:text-white"
            >
              Privacy Policy
            </Link>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
        <div className="text-center text-gray-400 mt-4">
          &copy; 2024 KrishiBondhu. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
