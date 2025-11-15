


import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { laptops as laptopData } from "../data/laptop.js";
import { useNavigate } from "react-router-dom";

export default function AllLaptopsPage() {
  const [laptops, setLaptops] = useState([]);
  const [filteredLaptops, setFilteredLaptops] = useState([]);
  const [filters, setFilters] = useState({
    brand: "",
    ram: "",
    storage: "",
    processor: "",
  });
  const [sortBy, setSortBy] = useState(""); // "low-high" | "high-low"

  const navigate = useNavigate();

  useEffect(() => {
    setLaptops(laptopData);
    setFilteredLaptops(laptopData);
  }, []);

  // Apply Filters & Sorting
  useEffect(() => {
    let result = [...laptops];

    // Filters
    if (filters.brand) result = result.filter(l => l.brand === filters.brand);
    if (filters.ram) result = result.filter(l => l.ram === filters.ram);
    if (filters.storage) result = result.filter(l => l.storage === filters.storage);
    if (filters.processor) result = result.filter(l => l.processor === filters.processor);

    // Sorting
    if (sortBy === "low-high") {
      result.sort((a, b) => parseFloat(a.price.replace(/[^0-9]/g, "")) - parseFloat(b.price.replace(/[^0-9]/g, "")));
    } else if (sortBy === "high-low") {
      result.sort((a, b) => parseFloat(b.price.replace(/[^0-9]/g, "")) - parseFloat(a.price.replace(/[^0-9]/g, "")));
    }

    setFilteredLaptops(result);
  }, [filters, sortBy, laptops]);

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const resetFilters = () => {
    setFilters({ brand: "", ram: "", storage: "", processor: "" });
    setSortBy("");
    setFilteredLaptops(laptops);
  };

  const handleLaptopClick = (laptopId) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate(`/product/${laptopId}`);
  };


  

  return (
    <motion.div
      className="bg-gray-100 min-h-screen font-sans py-8 sm:py-12 px-5 sm:px-6 lg:px-8"
      
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.6 }}
    >
      {/* Page Header */}
      <header className="mb-8 sm:mb-12 text-center">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
          Find Your Perfect Laptop
        </h1>
        <p className="mt-2 text-base sm:text-lg text-gray-500">
          Explore a wide selection of devices tailored to your needs.
        </p>
      </header>

      {/* Filters & Sort */}
      <div className="max-w-9xl mx-auto mb-8 bg-white p-4 rounded-lg shadow-md md:flex md:justify-between md:items-center">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 w-full">
          <select name="brand" value={filters.brand} onChange={handleFilterChange} className="p-3 rounded-lg border border-gray-300 bg-gray-50 text-gray-700">
            <option value="">All Brands</option>
            <option value="DELL">Dell</option>
            <option value="HP">HP</option>
            <option value="LENOVO">Lenovo</option>
            <option value="Acer">Acer</option>
            <option value="Apple">Apple</option>
            
            

          </select>

          <select name="ram" value={filters.ram} onChange={handleFilterChange} className="p-3 rounded-lg border border-gray-300 bg-gray-50 text-gray-700">
            <option value="">All RAM</option>
            <option value="8GB DDR4">8GB DDR4</option>
            <option value="16GB DDR4">16GB DDR4</option>
            <option value="32GB DDR4">32GB DDR4</option>
          </select>

          <select name="storage" value={filters.storage} onChange={handleFilterChange} className="p-3 rounded-lg border border-gray-300 bg-gray-50 text-gray-700">
            <option value="">All Storage</option>
            <option value="256GB NVMe SSD">256GB SSD</option>
            <option value="512GB NVMe SSD">512GB SSD</option>
            <option value="1TB NVMe SSD">1TB SSD</option>
          </select>

          <select name="processor" value={filters.processor} onChange={handleFilterChange} className="p-3 rounded-lg border border-gray-300 bg-gray-50 text-gray-700">
            <option value="">All Processors</option>
            <option value="Intel Core i5 - 8th Gen">  Intel Core i5 - 8th Gen</option>
            <option value="Intel Core i5 - 11th Gen"> Intel Core i5 - 11th Gen</option>
            <option value="Ryzen 5">Ryzen 5</option>
            <option value="Ryzen 7">Ryzen 7</option>
          </select>

          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="p-3 rounded-lg border border-gray-300 bg-gray-50 text-gray-700">
            <option value="">Sort by Price</option>
            <option value="low-high">Low → High</option>
            <option value="high-low">High → Low</option>
          </select>
        </div>
      </div>

      {/* Laptop Grid */}
      <div className="max-w-8xl mx-auto">
        {filteredLaptops.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">No laptops match your filters.</p>
            <button onClick={resetFilters} className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
            {filteredLaptops.map((laptop) => (
              <div key={laptop.id} onClick={() => handleLaptopClick(laptop.id)} className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer overflow-hidden">
                <div className="w-full h-48 md:h-56 p-4 flex items-center justify-center bg-gray-50 rounded-t-xl transition-transform duration-500 group-hover:scale-105">
                  
     <div className="relative w-full h-48 md:h-56 p-4 flex items-center justify-center bg-gray-50 rounded-t-xl transition-transform duration-500">
            {/* 🔥 Always visible discount ribbon */}
            {laptop.discount && (
              <div className="absolute top-1 left-0  bg-gradient-to-r from-pink-500 to-orange-500 text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-lg tracking-wide ">
                {laptop.discount}% OFF
              </div>
            )}
            </div>


                  <img
                    src={laptop.images?.[0] || "https://placehold.co/400x300?text=No+Image"}
                    alt={laptop.name}
                    className="max-h-full max-w-full object-contain rounded-lg"
                  />
                </div>
                <div className="p-4 flex flex-col items-start">
                  <h3 className="text-lg font-semibold text-gray-800 truncate w-full">{laptop.brand} {laptop.name}</h3>
                  <p className="text-sm text-gray-500 mt-1">{laptop.processor} | {laptop.ram} | {laptop.storage}</p>
                  <div className="flex items-center justify-between w-full mt-3">
                    <p className="text-green-600 font-bold text-xl">{laptop.price}</p>
                    <div className="p-2 rounded-full bg-blue-100 text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">➡</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}










