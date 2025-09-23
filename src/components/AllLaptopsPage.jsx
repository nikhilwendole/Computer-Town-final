// import React, { useEffect, useState } from "react";
// import { getLaptops } from "../services/laptopService";
// import { useNavigate } from "react-router-dom";

// export default function AllLaptopsPage() {
//   const [laptops, setLaptops] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const data = await getLaptops();
//         setLaptops(data);
//       } catch (error) {
//         console.error("Error fetching laptops:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   if (loading) {
//     return <p className="pt-20 text-center">Loading laptops...</p>;
//   }

//   return (
//     <div className="pt-20 px-6">
//       <h2 className="text-2xl font-bold mb-6">All Laptops</h2>
//       {laptops.length === 0 ? (
//         <p className="text-gray-500 text-center">No laptops available</p>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//           {laptops.map((laptop) => (
//             <div
//               key={laptop._id}
//               className="p-4 border rounded-lg shadow hover:shadow-lg transition cursor-pointer"
//               onClick={() => navigate(`/product/${laptop._id}`)}
//             >
//               <img
//                 src={laptop.image || "https://placehold.co/400x300?text=No+Image"}
//                 alt={laptop.model}
//                 className="w-full h-40 object-contain mb-4 rounded"
//               />
//               <h3 className="text-lg font-semibold">
//                 {laptop.brand} {laptop.model}
//               </h3>
//               <p className="text-green-600 font-bold mt-1">₹{laptop.price}</p>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }import React, { useEffect, useState } from "react";import React, { useState, useEffect } from "react";



// import { laptops as laptopData } from "../data/laptop.js";
// import { useNavigate } from "react-router-dom";


// import React, { useState, useEffect } from "react";
// import { laptops as laptopData } from "../data/laptop.js";
// import { useNavigate } from "react-router-dom";


// export default function AllLaptopsPage() {
//   const [laptops, setLaptops] = useState([]);
//   const [filteredLaptops, setFilteredLaptops] = useState([]);
//   const [filters, setFilters] = useState({
//     brand: "",
//     ram: "",
//     storage: "",
//     processor: "",
//   });
//   const [sortBy, setSortBy] = useState(""); // "low-high" | "high-low"

//   const navigate = useNavigate();

//   useEffect(() => {
//     setLaptops(laptopData);
//     setFilteredLaptops(laptopData);
//   }, []);

//   // 🔍 Apply Filters & Sorting
//   useEffect(() => {
//     let result = [...laptops];

//     // Apply filters
//     if (filters.brand) {
//       result = result.filter((l) => l.brand === filters.brand);
//     }
//     if (filters.ram) {
//       result = result.filter((l) => l.ram === filters.ram);
//     }
//     if (filters.storage) {
//       result = result.filter((l) => l.storage === filters.storage);
//     }
//     if (filters.processor) {
//       result = result.filter((l) => l.processor === filters.processor);
//     }

//     // Apply sorting
//     if (sortBy === "low-high") {
//       result.sort((a, b) => parseInt(a.price) - parseInt(b.price));
//     } else if (sortBy === "high-low") {
//       result.sort((a, b) => parseInt(b.price) - parseInt(a.price));
//     }

//     setFilteredLaptops(result);
//   }, [filters, sortBy, laptops]);

//   // Update filter state
//   const handleFilterChange = (e) => {
//     setFilters({ ...filters, [e.target.name]: e.target.value });
//   };

//   if (filteredLaptops.length === 0) {
//     return (
//       <p className="pt-20 text-center text-gray-500">No laptops available.</p>
//     );
//   }

//   return (
//     <div className="bg-gray-100 min-h-screen font-sans py-12 px-4 sm:px-6 lg:px-8">
//       {/* Page Header */}
//       <header className="mb-10 text-center">
//         <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
//           Explore Our Laptops
//         </h1>
//         <p className="mt-2 text-lg text-gray-500">
//           Find the perfect device for your work, study, and play.
//         </p>
//       </header>

//       {/* Filter & Sort Section */}
//       <div className="max-w-7xl mx-auto mb-8 grid grid-cols-1 md:grid-cols-5 gap-4">
//         <select
//           name="brand"
//           onChange={handleFilterChange}
//           value={filters.brand}
//           className="p-2 rounded border"
//         >
//           <option value="">All Brands</option>
//           <option value="Dell">Dell</option>
//           <option value="HP">HP</option>
//           <option value="Lenovo">Lenovo</option>
//         </select>

//         <select
//           name="ram"
//           onChange={handleFilterChange}
//           value={filters.ram}
//           className="p-2 rounded border"
//         >
//           <option value="">All RAM</option>
//           <option value="8GB">8GB</option>
//           <option value="16GB">16GB</option>
//           <option value="32GB">32GB</option>
//         </select>

//         <select
//           name="storage"
//           onChange={handleFilterChange}
//           value={filters.storage}
//           className="p-2 rounded border"
//         >
//           <option value="">All Storage</option>
//           <option value="256GB SSD">256GB SSD</option>
//           <option value="512GB SSD">512GB SSD</option>
//           <option value="1TB SSD">1TB SSD</option>
//         </select>

//         <select
//           name="processor"
//           onChange={handleFilterChange}
//           value={filters.processor}
//           className="p-2 rounded border"
//         >
//           <option value="">All Processors</option>
//           <option value="Intel i5">Intel i5</option>
//           <option value="Intel i7">Intel i7</option>
//           <option value="Ryzen 5">Ryzen 5</option>
//           <option value="Ryzen 7">Ryzen 7</option>
//         </select>

//         <select
//           onChange={(e) => setSortBy(e.target.value)}
//           value={sortBy}
//           className="p-2 rounded border"
//         >
//           <option value="">Sort by Price</option>
//           <option value="low-high">Low → High</option>
//           <option value="high-low">High → Low</option>
//         </select>
//       </div>

//       {/* Laptop Grid */}
//       <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
//         {filteredLaptops.map((laptop) => (
//           <div
//             key={laptop.id}
//             onClick={() => navigate(`/product/${laptop.id}`)}
//             className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer overflow-hidden"
//           >
//             {/* Product Image */}
//             <div className="w-full h-48 md:h-56 p-4 flex items-center justify-center bg-gray-50 rounded-t-xl transition-transform duration-500 group-hover:scale-105">
//               <img
//                 src={
//                   laptop.images?.[0] ||
//                   "https://placehold.co/400x300?text=No+Image"
//                 }
//                 alt={laptop.name}
//                 className="max-h-full max-w-full object-contain rounded-lg"
//               />
//             </div>

//             {/* Product Info */}
//             <div className="p-4 flex flex-col items-start">
//               <h3 className="text-lg font-semibold text-gray-800 truncate w-full">
//                 {laptop.brand} {laptop.name}
//               </h3>
//               <p className="text-sm text-gray-500 mt-1">
//                 {laptop.processor} | {laptop.ram} RAM | {laptop.storage}
//               </p>
//               <div className="flex items-center justify-between w-full mt-3">
//                 <p className="text-green-600 font-bold text-xl">
//                   {laptop.price}
//                 </p>
//                 <div className="p-2 rounded-full bg-blue-100 text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     strokeWidth={2}
//                     stroke="currentColor"
//                     className="w-5 h-5"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
//                     />
//                   </svg>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
// //   );
// // }import React, { useEffect, useState } from "react";
// import { laptops as laptopData } from "../data/laptop.js";
// import { useNavigate } from "react-router-dom";

// import { motion } from "framer-motion";

// import React, { useState, useEffect } from "react";
// import { laptops as laptopData } from "../data/laptop.js";
// import { useNavigate } from "react-router-dom";

// export default function AllLaptopsPage() {
//   const [laptops, setLaptops] = useState([]);
//   const [filteredLaptops, setFilteredLaptops] = useState([]);
//   const [filters, setFilters] = useState({
//     brand: "",
//     ram: "",
//     storage: "",
//     processor: "",
//   });
//   const [sortBy, setSortBy] = useState(""); // "low-high" | "high-low"

//   const navigate = useNavigate();

//   useEffect(() => {
//     setLaptops(laptopData);
//     setFilteredLaptops(laptopData);
//   }, []);

//   // 🔍 Apply Filters & Sorting
//   useEffect(() => {
//     let result = [...laptops];

//     // Apply filters
//     if (filters.brand) result = result.filter((l) => l.brand === filters.brand);
//     if (filters.ram) result = result.filter((l) => l.ram === filters.ram);
//     if (filters.storage) result = result.filter((l) => l.storage === filters.storage);
//     if (filters.processor) result = result.filter((l) => l.processor === filters.processor);

//     // Apply sorting
//     if (sortBy === "low-high") {
//       result.sort((a, b) => parseFloat(a.price.replace(/[$,]/g, "")) - parseFloat(b.price.replace(/[$,]/g, "")));
//     } else if (sortBy === "high-low") {
//       result.sort((a, b) => parseFloat(b.price.replace(/[$,]/g, "")) - parseFloat(a.price.replace(/[$,]/g, "")));
//     }

//     setFilteredLaptops(result);
//   }, [filters, sortBy, laptops]);

//   // Update filter state
//   const handleFilterChange = (e) => {
//     setFilters({ ...filters, [e.target.name]: e.target.value });
//   };

//   // Reset filters
//   const resetFilters = () => {
//     setFilters({ brand: "", ram: "", storage: "", processor: "" });
//     setSortBy("");
//     setFilteredLaptops(laptops);
//   };

//   // --- NEW: Function to handle card click and scroll to top ---
//   const handleLaptopClick = (laptopId) => {
//     // Scroll to the top of the window
//     window.scrollTo({ top: 0, behavior: "smooth" });
//     // Navigate to the product page
//     navigate(`/product/${laptopId}`);
//   };

//   return (

//       <motion.div
//       className="bg-gray-100 min-h-screen font-sans py-8 sm:py-12 px-5 sm:px-6 lg:px-8"
//       initial={{ opacity: 0, y: 50 }}
//       animate={{ opacity: 1, y: 0 }}
//       exit={{ opacity: 0, y: -50 }}
//       transition={{ duration: 0.6 }}
//     >
//     <div className="bg-gray-100 min-h-screen font-sans py-8 sm:py-12 px-5 sm:px-6 lg:px-8">
//       {/* Page Header */}
//       <header className="mb-8 sm:mb-12 text-center">
//         <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
//           Find Your Perfect Laptop
//         </h1>
//         <p className="mt-2 text-base sm:text-lg text-gray-500">
//           Explore a wide selection of devices tailored to your needs.
//         </p>
//       </header>

//       {/* Filter & Sort Section */}
//       <div className="max-w-7xl mx-auto mb-8 bg-white p-4 rounded-lg shadow-md md:flex md:justify-between md:items-center">
//         <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 w-full">
//           <select
//             name="brand"
//             onChange={handleFilterChange}
//             value={filters.brand}
//             className="p-3 rounded-lg border border-gray-300 bg-gray-50 text-gray-700"
//           >
//             <option value="">All Brands</option>
//             <option value="Dell">Dell</option>
//             <option value="HP">HP</option>
//             <option value="Lenovo">Lenovo</option>
//           </select>

//           <select
//             name="ram"
//             onChange={handleFilterChange}
//             value={filters.ram}
//             className="p-3 rounded-lg border border-gray-300 bg-gray-50 text-gray-700"
//           >
//             <option value="">All RAM</option>
//             <option value="8GB">8GB</option>
//             <option value="16GB">16GB</option>
//             <option value="32GB">32GB</option>
//           </select>

//           <select
//             name="storage"
//             onChange={handleFilterChange}
//             value={filters.storage}
//             className="p-3 rounded-lg border border-gray-300 bg-gray-50 text-gray-700"
//           >
//             <option value="">All Storage</option>
//             <option value="256GB SSD">256GB SSD</option>
//             <option value="512GB SSD">512GB SSD</option>
//             <option value="1TB SSD">1TB SSD</option>
//           </select>

//           <select
//             name="processor"
//             onChange={handleFilterChange}
//             value={filters.processor}
//             className="p-3 rounded-lg border border-gray-300 bg-gray-50 text-gray-700"
//           >
//             <option value="">All Processors</option>
//             <option value="Intel i5">Intel i5</option>
//             <option value="Intel i7">Intel i7</option>
//             <option value="Ryzen 5">Ryzen 5</option>
//             <option value="Ryzen 7">Ryzen 7</option>
//           </select>

//           <select
//             onChange={(e) => setSortBy(e.target.value)}
//             value={sortBy}
//             className="p-3 rounded-lg border border-gray-300 bg-gray-50 text-gray-700"
//           >
//             <option value="">Sort by Price</option>
//             <option value="low-high">Low → High</option>
//             <option value="high-low">High → Low</option>
//           </select>
//         </div>
//       </div>

//       {/* Laptop Grid or Empty Message */}
//       <div className="max-w-8xl mx-auto">
//         {filteredLaptops.length === 0 ? (
//           <div className="text-center py-16">
//             <p className="text-gray-500 text-lg">No laptops match your filters.</p>
//             <button
//               onClick={resetFilters}
//               className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
//             >
//               Reset Filters
//             </button>
//           </div>
//         ) : (
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
//             {filteredLaptops.map((laptop) => (
//               <div
//                 key={laptop.id}
//                 // --- Updated onClick handler ---
//                 onClick={() => handleLaptopClick(laptop.id)}
//                 className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer overflow-hidden"
//               >
//                 {/* Product Image */}
//                 <div className="w-full h-48 md:h-56 p-4 flex items-center justify-center bg-gray-50 rounded-t-xl transition-transform duration-500 group-hover:scale-105">
//                   <img
//                     src={laptop.images?.[0] || "https://placehold.co/400x300?text=No+Image"}
//                     alt={laptop.name}
//                     className="max-h-full max-w-full object-contain rounded-lg"
//                   />
//                 </div>

//                 {/* Product Info */}
//                 <div className="p-4 flex flex-col items-start">
//                   <h3 className="text-lg font-semibold text-gray-800 truncate w-full">
//                     {laptop.brand} {laptop.name}
//                   </h3>
//                   <p className="text-sm text-gray-500 mt-1">
//                     {laptop.processor} | {laptop.ram} | {laptop.storage}
//                   </p>
//                   <div className="flex items-center justify-between w-full mt-3">
//                     <p className="text-green-600 font-bold text-xl">{laptop.price}</p>
//                     <div className="p-2 rounded-full bg-blue-100 text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                       ➡
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//     </motion.div>
//   );
// }








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
      <div className="max-w-7xl mx-auto mb-8 bg-white p-4 rounded-lg shadow-md md:flex md:justify-between md:items-center">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 w-full">
          <select name="brand" value={filters.brand} onChange={handleFilterChange} className="p-3 rounded-lg border border-gray-300 bg-gray-50 text-gray-700">
            <option value="">All Brands</option>
            <option value="Dell">Dell</option>
            <option value="HP">HP</option>
            <option value="Lenovo">Lenovo</option>
          </select>

          <select name="ram" value={filters.ram} onChange={handleFilterChange} className="p-3 rounded-lg border border-gray-300 bg-gray-50 text-gray-700">
            <option value="">All RAM</option>
            <option value="8GB DDR4">8GB DDR4</option>
            <option value="16GB DDR4">16GB DDR4</option>
            <option value="32GB DDR4">32GB DDR4</option>
          </select>

          <select name="storage" value={filters.storage} onChange={handleFilterChange} className="p-3 rounded-lg border border-gray-300 bg-gray-50 text-gray-700">
            <option value="">All Storage</option>
            <option value="256GB SSD">256GB SSD</option>
            <option value="512GB SSD">512GB SSD</option>
            <option value="1TB SSD">1TB SSD</option>
          </select>

          <select name="processor" value={filters.processor} onChange={handleFilterChange} className="p-3 rounded-lg border border-gray-300 bg-gray-50 text-gray-700">
            <option value="">All Processors</option>
            <option value="Intel i5">Intel i5</option>
            <option value="Intel i7">Intel i7</option>
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
