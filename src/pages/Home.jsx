import React from "react";
import ProductCard from "../components/ProductCard";
import { laptopData } from "../assets/laptopData";

const Home = () => {
  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {laptopData.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Home;
