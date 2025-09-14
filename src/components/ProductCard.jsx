


import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/product/${product.id}`)}
      className="bg-gray-900 text-white rounded-xl p-4 cursor-pointer hover:scale-105 transition"
    >
      <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-md" />
      <h3 className="mt-3 font-semibold">{product.name}</h3>
      <p className="text-sm text-gray-400">{product.brand}</p>
      <p className="mt-2 font-bold text-green-400">{product.price}</p>
    </div>
  );
};

export default ProductCard;
