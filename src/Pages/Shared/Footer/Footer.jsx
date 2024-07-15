import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
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

const Plans = ["Paid Memberships", "For Whole-sell", "Business Solutions"];
const Community = ["Forums", "Chapters", "Events"];

const Footer = () => {
  return (
    <div className="bg-gray-800">
      <h1 className="text-white w-11/12 pt-5 mx-auto">
        <div className="lg:pl-6 -pb-6 ">
          <Link to="/">
            <img
              src="https://i.ibb.co/5RKgH3K/logo.png"
              className="w-40 h-10 rounded-3xl grayscale hover:grayscale-0 hover:scale-105  transition-all duration-400"
            />
          </Link>
        </div>
      </h1>
      <div className="flex flex-col lg:flex-row gap-8 items-center justify-between w-11/12 max-w- text-gray-400 leading-6 mx-auto relative pt-8 pb-14">
        <div className="w-full  space-y-4 flex flex-col lg:flex-row pb-5 border-b border-gray-700">
          <div className="lg:w-1/2 w-full grid grid-cols-2  justify-between lg:border-r border-gray-700 lg:pl-6 lg:pr-5 gap-3 ">
            <div className="flex flex-col gap-3 w-full   mb-7  ">
              <h1 className="text-gray-50 font-semibold text-lg">About Us</h1>
              <div className="flex flex-col gap-2">
                {["Our Story", "Team", "Partners"].map((ele, i) => (
                  <Link
                    key={i}
                    to={ele.replace(/\s+/g, "-").toLowerCase()}
                    className="text-sm cursor-pointer hover:text-gray-50 transition-all duration-200"
                  >
                    {ele}
                  </Link>
                ))}
              </div>

              <div className="flex gap-3 text-lg mt-4 ">
                <FaFacebook className="cursor-pointer hover:text-gray-50 transition-all duration-20" />
                <FaTwitter className="cursor-pointer hover:text-gray-50 transition-all duration-20" />
                <FaYoutube className="cursor-pointer hover:text-gray-50 transition-all duration-20" />
              </div>
            </div>

            <div className="flex flex-col gap-3 w-full   mb-7 ">
              <h1 className="text-gray-50 font-semibold text-lg">Resources</h1>
              <div className="flex flex-col gap-2 mt-2">
                {Resources.map((ele, index) => (
                  <Link
                    key={index}
                    to={ele.replace(/\s+/g, "-").toLowerCase()}
                    className="text-sm cursor-pointer hover:text-gray-50 transition-all duration-200"
                  >
                    {ele}
                  </Link>
                ))}
              </div>
              <h1 className="text-gray-50 font-semibold text-lg mt-7">
                Support
              </h1>
              <Link
                to="/help-center"
                className="text-sm cursor-pointer hover:text-gray-50 transition-all duration-200 mt-2"
              >
                Help Center
              </Link>
            </div>

            <div className="flex flex-col gap-3 w-full   mb-7 ">
              <h1 className="text-gray-50 font-semibold text-lg">Plans</h1>
              <div className="flex flex-col gap-2 mt-2">
                {Plans.map((ele, index) => (
                  <Link
                    key={index}
                    to={ele.replace(/\s+/g, "-").toLowerCase()}
                    className="text-sm cursor-pointer hover:text-gray-50 transition-all duration-200"
                  >
                    {ele}
                  </Link>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-3 w-full   mb-7 ">
              <h1 className="text-gray-50 font-semibold text-lg ">Community</h1>
              <div className="flex flex-col gap-2 mt-2">
                {Community.map((ele, index) => (
                  <Link
                    key={index}
                    to={ele.replace(/\s+/g, "-").toLowerCase()}
                    className="text-sm cursor-pointer hover:text-gray-50 transition-all duration-200"
                  >
                    {ele}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div className="lg:w-1/2  w-full grid grid-cols-2 justify-between   lg:pl-5 gap-3 ">
            {FooterLink.map((ele, i) => (
              <div key={i} className="flex flex-col gap-3 w-full lg:w-1/3 mb-7">
                <h1 className="text-gray-50 font-semibold text-lg">
                  {ele.title}
                </h1>
                <div className="flex flex-col gap-2 mt-2">
                  {ele.links.map((link, index) => (
                    <Link
                      key={index}
                      to={link.link}
                      className="text-sm cursor-pointer hover:text-gray-50 transition-all duration-200"
                    >
                      {link.title}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-between w-11/12 max-w- text-gray-400 mx-auto pb-14 text-sm">
        {/* Bottom Footer */}
        <div className="flex flex-col lg:flex-row justify-between items-center w-full gap-3">
          <div className="flex flex-row gap-3">
            {BottomFooter.map((ele, i) => (
              <Link
                key={i}
                to={ele.replace(/\s+/g, "-").toLowerCase()}
                className={`px-3 ${
                  i < BottomFooter.length - 1 ? "border-r border-gray-700" : ""
                } cursor-pointer hover:text-gray-50 transition-all duration-200`}
              >
                {ele}
              </Link>
            ))}
          </div>
          <div className="text-center">
            Made with © {new Date().getFullYear()} KrishiBondu
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
