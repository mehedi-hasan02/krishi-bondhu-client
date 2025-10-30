import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FooterLink } from "../../../data/FooterLinks";
import { GiFallingLeaf } from "react-icons/gi";

const Resources = [
  "Crop Cultivation",
  "Livestock Farming",
  "Organic Farming",
  "Market Prices",
  "Weather Forecast",
  "Government Schemes",
  "Research Articles",
];

const BottomFooter = ["Privacy Policy", "Cookie Policy", "Terms"];

const Footer = () => {
  return (
    <div className="bg-gray-900 text-white animate__animated animate__fadeIn">
      <div className="w-11/12 mx-auto pt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <GiFallingLeaf className="text-green-500 text-3xl" />
              <h2 className="text-2xl font-bold">Krishi Bondhu</h2>
            </div>
            <p className="text-gray-400">
              Connecting farmers and consumers for a sustainable future. 
              Fresh, organic produce delivered from farm to table.
            </p>
            <div className="flex gap-4">
              <FaFacebook className="text-xl cursor-pointer hover:text-green-500 transition-colors duration-300" />
              <FaTwitter className="text-xl cursor-pointer hover:text-green-500 transition-colors duration-300" />
              <FaInstagram className="text-xl cursor-pointer hover:text-green-500 transition-colors duration-300" />
              <FaYoutube className="text-xl cursor-pointer hover:text-green-500 transition-colors duration-300" />
              <FaLinkedin className="text-xl cursor-pointer hover:text-green-500 transition-colors duration-300" />
            </div>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Resources</h3>
            <ul className="space-y-3">
              {Resources.map((item, index) => (
                <li key={index}>
                  <Link 
                    to={`/${item.replace(/\s+/g, "-").toLowerCase()}`} 
                    className="text-gray-400 hover:text-green-500 transition-colors duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
            <div className="grid grid-cols-2 gap-3">
              {FooterLink.map((section, index) => (
                <div key={index}>
                  <h4 className="font-medium mb-3">{section.title}</h4>
                  <ul className="space-y-2">
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <Link 
                          to={link.link} 
                          className="text-gray-400 hover:text-green-500 text-sm transition-colors duration-300"
                        >
                          {link.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for the latest updates and offers.
            </p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-4 py-2 w-full rounded-l-lg focus:outline-none text-gray-800"
              />
              <button className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-r-lg transition-colors duration-300">
                Join
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Krishi Bondhu. All rights reserved.
            </div>
            <div className="flex gap-6">
              {BottomFooter.map((item, index) => (
                <Link 
                  key={index}
                  to={`/${item.replace(/\s+/g, "-").toLowerCase()}`}
                  className="text-gray-500 hover:text-green-500 text-sm transition-colors duration-300"
                >
                  {item}
                </Link>
              ))}
              <Link 
                to="/contact"
                className="text-gray-500 hover:text-green-500 text-sm transition-colors duration-300"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;