import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="pt-24 px-6 md:px-16 lg:px-24 text-center">
      <h1 className="text-4xl font-bold mb-4">
        Welcome to Our Refurbished Laptop Store
      </h1>
      <p className="text-gray-600 mb-6">
        Find high-quality refurbished laptops at the best prices.
      </p>
      <Link
        to="/all-laptops"
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Shop Now
      </Link>
    </div>
  );
};

export default Home;
