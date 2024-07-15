import React, { useEffect } from "react";
import { Link } from "react-router-dom";
const Error = () => {
  return (
    <div className="bg-green-100 min-h-screen flex items-center justify-center">
      <div className="max-w-md mx-auto text-center p-6">
        <h2 className="text-4xl text-green-800 mb-4">404 - Page Not Found</h2>
        <p className="text-lg text-gray-800 mb-4">
          Oops! Looks like you’ve wandered off the field.
        </p>
        <p className="text-lg text-gray-800 mb-4">
          Don’t worry, we’ll get you back to the harvest soon.
        </p>
        <Link
          to="/"
          className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md transition duration-300"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Error;
