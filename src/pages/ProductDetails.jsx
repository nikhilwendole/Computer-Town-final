// import React, { useState, useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import {
//   FaMicrochip,
//   FaMemory,
//   FaHdd,
//   FaLaptop,
//   FaBatteryFull,
//   FaWeightHanging,
//   FaPlug,
//   FaWifi,
// } from "react-icons/fa";
// import axios from "axios";

// export default function ProductDetails() {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [laptop, setLaptop] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [currentImage, setCurrentImage] = useState(0);
//   const [activeTab, setActiveTab] = useState("specs");
//   const [error, setError] = useState(null);

//   // Fetch laptop from backend
//   useEffect(() => {
//     const fetchLaptop = async () => {
//       setLoading(true);
//       try {
//         const res = await axios.get(`http://localhost:5000/api/laptops/${id}`);
//         setLaptop(res.data);
//       } catch (err) {
//         console.error("Error fetching laptop:", err);
//         setError("Failed to load laptop data. Showing fallback info.");

//         // Fallback dummy data
//         setLaptop({
//           _id: id,
//           name: "Sample Laptop",
//           brand: "Sample Brand",
//           price: "$999",
//           processor: "Intel i5",
//           ram: "8GB",
//           storage: "256GB SSD",
//           display: "14 inch FHD",
//           battery: "45Wh",
//           weight: "1.5kg",
//           ports: "USB-C, HDMI",
//           connectivity: "Wi-Fi 6",
//           images: [
//             "https://placehold.co/600x450/e2e8f0/475569?text=Laptop+1",
//             "https://placehold.co/600x450/e2e8f0/475569?text=Laptop+2",
//           ],
//           description: "This is fallback laptop info because the backend is offline.",
//         });
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchLaptop();
//   }, [id]);

//   // Auto slideshow for images
//   useEffect(() => {
//     if (!laptop?.images || laptop.images.length <= 1) return;
//     const interval = setInterval(() => {
//       setCurrentImage((prev) => (prev + 1) % laptop.images.length);
//     }, 2500);
//     return () => clearInterval(interval);
//   }, [laptop?.images]);

//   if (loading) return <p className="pt-20 text-center">Loading...</p>;

//   return (
//     <div className="bg-gray-50 min-h-screen font-sans py-8 px-4 sm:px-6 lg:px-8">
//       {error && <p className="text-red-600 text-center mb-4 font-semibold">{error}</p>}

//       <button
//         onClick={() => navigate(-1)}
//         className="flex items-center gap-2 text-gray-600 hover:text-blue-600 mb-6 transition-colors"
//       >
//         ← Back to Laptops
//       </button>

//       <div className="bg-white rounded-xl shadow-lg p-6 md:grid md:grid-cols-2 md:gap-8 lg:gap-12">
//         {/* Images */}
//         <div className="flex flex-col items-center">
//           <div className="w-full h-64 md:h-80 lg:h-96 relative mb-4 cursor-pointer">
//             <img
//               src={laptop.images[currentImage]}
//               alt={laptop.name}
//               className="w-full h-full object-contain rounded-lg transition-transform duration-500 ease-in-out hover:scale-105"
//             />
//           </div>

//           <div className="flex gap-3">
//             {laptop.images.map((img, index) => (
//               <button
//                 key={index}
//                 onClick={() => setCurrentImage(index)}
//                 className={`w-14 h-14 p-1 rounded-md border-2 ${
//                   index === currentImage ? "border-blue-500" : "border-gray-200"
//                 }`}
//               >
//                 <img src={img} alt={index} className="w-full h-full object-cover rounded-sm" />
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Product Details */}
//         <div>
//           <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
//             {laptop.name}
//           </h1>
//           <p className="text-gray-500 text-lg md:text-xl mt-1">{laptop.brand}</p>
//           <p className="text-green-600 text-4xl font-bold mt-4">{laptop.price}</p>

//           <div className="flex flex-col sm:flex-row gap-4 mt-6">
//             <button className="flex-1 py-3 px-6 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition">
//               Add to Cart
//             </button>
//             <button className="flex-1 py-3 px-6 border border-gray-300 text-gray-800 font-semibold rounded-full hover:bg-gray-100 transition">
//               Buy Now
//             </button>
//           </div>

//           <div className="mt-8 border-t pt-8">
//             <nav className="flex space-x-4 md:space-x-8 mb-4">
//               {["specs", "description", "reviews"].map((tab) => (
//                 <button
//                   key={tab}
//                   onClick={() => setActiveTab(tab)}
//                   className={`whitespace-nowrap py-2 px-1 border-b-2 text-lg font-semibold ${
//                     activeTab === tab
//                       ? "border-blue-600 text-blue-600"
//                       : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
//                   }`}
//                 >
//                   {tab.charAt(0).toUpperCase() + tab.slice(1)}
//                 </button>
//               ))}
//             </nav>

//             <div className="p-4 text-gray-700 text-base">
//               {activeTab === "description" && <p>{laptop.description}</p>}
//               {activeTab === "specs" && (
//                 <ul className="space-y-3">
//                   <li className="flex justify-between">
//                     <span className="flex items-center gap-2 font-semibold">
//                       <FaMicrochip className="text-blue-600" /> CPU:
//                     </span>
//                     {laptop.processor}
//                   </li>
//                   <li className="flex justify-between">
//                     <span className="flex items-center gap-2 font-semibold">
//                       <FaMemory className="text-purple-600" /> RAM:
//                     </span>
//                     {laptop.ram}
//                   </li>
//                   <li className="flex justify-between">
//                     <span className="flex items-center gap-2 font-semibold">
//                       <FaHdd className="text-green-600" /> Storage:
//                     </span>
//                     {laptop.storage}
//                   </li>
//                   <li className="flex justify-between">
//                     <span className="flex items-center gap-2 font-semibold">
//                       <FaLaptop className="text-gray-600" /> Display:
//                     </span>
//                     {laptop.display}
//                   </li>
//                   <li className="flex justify-between">
//                     <span className="flex items-center gap-2 font-semibold">
//                       <FaBatteryFull className="text-yellow-500" /> Battery:
//                     </span>
//                     {laptop.battery}
//                   </li>
//                   <li className="flex justify-between">
//                     <span className="flex items-center gap-2 font-semibold">
//                       <FaWeightHanging className="text-red-500" /> Weight:
//                     </span>
//                     {laptop.weight}
//                   </li>
//                   <li className="flex justify-between">
//                     <span className="flex items-center gap-2 font-semibold">
//                       <FaPlug className="text-indigo-600" /> Ports:
//                     </span>
//                     {laptop.ports}
//                   </li>
//                   <li className="flex justify-between">
//                     <span className="flex items-center gap-2 font-semibold">
//                       <FaWifi className="text-teal-600" /> Connectivity:
//                     </span>
//                     {laptop.connectivity}
//                   </li>
//                 </ul>
//               )}
//               {activeTab === "reviews" && <p>No reviews yet.</p>}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }




// import React, { useState, useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import {
//   FaMicrochip,
//   FaMemory,
//   FaHdd,
//   FaLaptop,
//   FaBatteryFull,
//   FaWeightHanging,
//   FaPlug,
//   FaWifi,
// } from "react-icons/fa";

// // Import laptops from local file
// import { laptops } from "../data/laptop.js";

// export default function ProductDetails() {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [laptop, setLaptop] = useState(null);
//   const [currentImage, setCurrentImage] = useState(0);
//   const [activeTab, setActiveTab] = useState("specs");

//   useEffect(() => {
//     // Find laptop by id from local array
//     const selected = laptops.find((l) => l.id === Number(id));
//     setLaptop(selected || null);
//   }, [id]);

//   // Auto slideshow for images
//   useEffect(() => {
//     if (!laptop?.images || laptop.images.length <= 1) return;
//     const interval = setInterval(() => {
//       setCurrentImage((prev) => (prev + 1) % laptop.images.length);
//     }, 2500);
//     return () => clearInterval(interval);
//   }, [laptop?.images]);

//   if (!laptop) return <p className="pt-20 text-center">Laptop not found.</p>;

//   return (
//     <div className="bg-gray-50 min-h-screen font-sans py-8 px-4 sm:px-6 lg:px-8">
//       <button
//         onClick={() => navigate(-1)}
//         className="flex items-center gap-2 text-gray-600 hover:text-blue-600 mb-6 transition-colors"
//       >
//         ← Back to Laptops
//       </button>

//       <div className="bg-white rounded-xl shadow-lg p-6 md:grid md:grid-cols-2 md:gap-8 lg:gap-12">
//         {/* Images */}
//         <div className="flex flex-col items-center">
//           <div className="w-full h-64 md:h-80 lg:h-96 relative mb-4 cursor-pointer">
//             <img
//               src={laptop.images[currentImage]}
//               alt={laptop.name}
//               className="w-full h-full object-contain rounded-lg transition-transform duration-500 ease-in-out hover:scale-105"
//             />
//           </div>

//           <div className="flex gap-3">
//             {laptop.images.map((img, index) => (
//               <button
//                 key={index}
//                 onClick={() => setCurrentImage(index)}
//                 className={`w-14 h-14 p-1 rounded-md border-2 ${
//                   index === currentImage ? "border-blue-500" : "border-gray-200"
//                 }`}
//               >
//                 <img src={img} alt={index} className="w-full h-full object-cover rounded-sm" />
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Product Details */}
//         <div>
//           <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
//             {laptop.name}
//           </h1>
//           <p className="text-gray-500 text-lg md:text-xl mt-1">{laptop.brand}</p>
//           <p className="text-green-600 text-4xl font-bold mt-4">{laptop.price}</p>

//           <div className="flex flex-col sm:flex-row gap-4 mt-6">
//             <button className="flex-1 py-3 px-6 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition">
//               Add to Cart
//             </button>
//             <button className="flex-1 py-3 px-6 border border-gray-300 text-gray-800 font-semibold rounded-full hover:bg-gray-100 transition">
//               Buy Now
//             </button>
//           </div>

//           <div className="mt-8 border-t pt-8">
//             <nav className="flex space-x-4 md:space-x-8 mb-4">
//               {["specs", "description", "reviews"].map((tab) => (
//                 <button
//                   key={tab}
//                   onClick={() => setActiveTab(tab)}
//                   className={`whitespace-nowrap py-2 px-1 border-b-2 text-lg font-semibold ${
//                     activeTab === tab
//                       ? "border-blue-600 text-blue-600"
//                       : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
//                   }`}
//                 >
//                   {tab.charAt(0).toUpperCase() + tab.slice(1)}
//                 </button>
//               ))}
//             </nav>

//             <div className="p-4 text-gray-700 text-base">
//               {activeTab === "description" && <p>{laptop.description}</p>}
//               {activeTab === "specs" && (
//                 <ul className="space-y-3">
//                   <li className="flex justify-between">
//                     <span className="flex items-center gap-2 font-semibold">
//                       <FaMicrochip className="text-blue-600" /> CPU:
//                     </span>
//                     {laptop.processor}
//                   </li>
//                   <li className="flex justify-between">
//                     <span className="flex items-center gap-2 font-semibold">
//                       <FaMemory className="text-purple-600" /> RAM:
//                     </span>
//                     {laptop.ram}
//                   </li>
//                   <li className="flex justify-between">
//                     <span className="flex items-center gap-2 font-semibold">
//                       <FaHdd className="text-green-600" /> Storage:
//                     </span>
//                     {laptop.storage}
//                   </li>
//                   <li className="flex justify-between">
//                     <span className="flex items-center gap-2 font-semibold">
//                       <FaLaptop className="text-gray-600" /> Display:
//                     </span>
//                     {laptop.display}
//                   </li>
//                   <li className="flex justify-between">
//                     <span className="flex items-center gap-2 font-semibold">
//                       <FaBatteryFull className="text-yellow-500" /> Battery:
//                     </span>
//                     {laptop.battery}
//                   </li>
//                   <li className="flex justify-between">
//                     <span className="flex items-center gap-2 font-semibold">
//                       <FaWeightHanging className="text-red-500" /> Weight:
//                     </span>
//                     {laptop.weight}
//                   </li>
//                   <li className="flex justify-between">
//                     <span className="flex items-center gap-2 font-semibold">
//                       <FaPlug className="text-indigo-600" /> Ports:
//                     </span>
//                     {laptop.ports}
//                   </li>
//                   <li className="flex justify-between">
//                     <span className="flex items-center gap-2 font-semibold">
//                       <FaWifi className="text-teal-600" /> Connectivity:
//                     </span>
//                     {laptop.connectivity}
//                   </li>
//                 </ul>
//               )}
//               {activeTab === "reviews" && <p>No reviews yet.</p>}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import laptops from "../data/laptop.js";

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentImage, setCurrentImage] = useState(0);
  const [activeTab, setActiveTab] = useState("description");
  const [show360, setShow360] = useState(false);

  // Ref to store the interval ID
  const intervalRef = useRef(null);

  const laptop = laptops.find((l) => l.id === Number(id));

  // Function to start the automatic image rotation
  const startAutoScroll = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % laptop.images.length);
    }, 3000);
  };

  const stopAutoScroll = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  useEffect(() => {
    if (laptop && laptop.images && laptop.images.length > 1 && !show360) {
      startAutoScroll();
    }
    return () => stopAutoScroll();
  }, [laptop, show360]);

  const handleManualImageChange = (index) => {
    stopAutoScroll();
    setCurrentImage(index);
  };

  const nextImage = () => {
    stopAutoScroll();
    setCurrentImage((prev) => (prev + 1) % laptop.images.length);
  };

  const prevImage = () => {
    stopAutoScroll();
    setCurrentImage((prev) => (prev - 1 + laptop.images.length) % laptop.images.length);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSimilarClick = (newId) => {
    navigate(`/product/${newId}`);
    scrollToTop();
  };

  const similar = laptops.filter(
    (l) => l.brand === laptop.brand && l.id !== laptop.id
  );

  if (!laptop) {
    return (
      <div className="max-w-4xl mx-auto p-8 text-center bg-white rounded-lg shadow-xl mt-12">
        <p className="text-red-600 text-lg font-semibold">Laptop not found!</p>
        <button
          onClick={() => navigate(-1)}
          className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    // <div className="bg-gray-100 min-h-screen font-sans">
      // <div className="max-full-7xl mx-auto py-9 px-9 sm:px-9 lg:px-9  ">
      // <div className="max-w-7xl mx-auto pt-0 pb-9 px-0">
/* <div className="max-w-7xl mx-auto mt-[-12px] px-0 sm:px-0 lg:px-0"> */
  //  <div className="max-w-7xl mx-auto mt-[-12px] px-0">
  <div className="w-full mx-0 px-0 py-3">
  {/* Your content here */}




        {/* Back Button */}
         <button
          onClick={() => navigate(-1)}
          className="text-gray-600 hover:text-blue-600 mb-6 flex items-center gap-2 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
          Back to Laptops
        </button> 

        {/* Main Product Content */}
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 lg:p-10 md:flex md:gap-8 lg:gap-12">
          {/* Image & Gallery Section */}
          <div className="md:w-1/2 flex flex-col items-center">
            <div className="w-full h-64 md:h-80 lg:h-96 relative mb-4 group">
              {show360 ? (
                <div className="w-full h-full bg-gray-200 flex items-center justify-center rounded-lg text-gray-500">
                  <span className="text-lg">360° View Placeholder</span>
                </div>
              ) : (
                <img
                  src={laptop.images?.[currentImage] || "https://placehold.co/600x450/e2e8f0/475569?text=No+Image"}
                  alt={laptop.name}
                  className="w-full h-full object-contain rotate-0 transition-transform duration-500 ease-in-out hover:scale-105"
                />
              )}
              {/* Image Navigation Buttons */}
              <button
                onClick={prevImage}
                className="absolute left-0 top-1/2 -translate-y-1/2 p-2 bg-black bg-opacity-30 rounded-full text-white transition-opacity opacity-0 group-hover:opacity-100"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextImage}
                className="absolute right-0 top-1/2 -translate-y-1/2 p-2 bg-black bg-opacity-30 rounded-full text-white transition-opacity opacity-0 group-hover:opacity-100"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Thumbnails & 360° Toggle */}
            <div className="flex flex-wrap justify-center gap-3 md:gap-4 lg:gap-5 mb-6">
              {laptop.images?.length > 1 &&
                laptop.images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => { setShow360(false); handleManualImageChange(index); }}
                    className={`w-14 h-14 md:w-16 md:h-16 p-1 rounded-md border-2 transition-colors ${
                      !show360 && index === currentImage ? "border-blue-500" : "border-gray-200 hover:border-blue-300"
                    }`}
                  >
                    <img
                      src={img}
                      alt={`${laptop.name}-${index}`}
                      className="w-full h-full object-contain rotate-0 rounded-sm"
                    />
                  </button>
                ))}
              <button
                onClick={() => setShow360(!show360)}
                className={`w-14 h-14 md:w-16 md:h-16 p-1 rounded-md border-2 text-center text-xs md:text-sm font-semibold transition-colors ${
                  show360 ? "border-blue-500 text-blue-600" : "border-gray-200 text-gray-600 hover:border-blue-300"
                }`}
              >
                360°
              </button>
            </div>
          </div>

          {/* Product Details Section */}
          <div className="md:w-1/2 flex flex-col justify-between">
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">{laptop.name}</h1>
              <p className="text-gray-500 text-lg md:text-xl mt-1">{laptop.brand}</p>
              <div className="flex items-center text-lg mt-2">
                <span className="text-yellow-400">★★★★☆</span>
                <span className="text-gray-500 ml-2">(1,250 reviews)</span>
              </div>
              <p className="text-green-600 text-6xl font-bold mt-4">{laptop.price}</p>



{/* Specs List */}
{/* Specs List */}<div className="mt-6 border-t pt-6">
  <h2 className="text-xl font-bold mb-4 text-gray-800">Technical Specifications</h2>
  <ul className="text-base space-y-3 text-gray-700">
    <li className="grid grid-cols-2 gap-4 border-b border-gray-200 pb-2 mb-2">
      <div className="flex items-center space-x-2">
        {/* Processor Icon */}
        <span className="text-blue-500">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm0 2h10v10H5V5zM8 8h4v4H8V8z"/>
          </svg>
        </span>
        <span className="font-semibold">Processor:</span>
      </div>
      <span>{laptop.processor}</span>
    </li>
    <li className="grid grid-cols-2 gap-4 border-b border-gray-200 pb-2 mb-2">
      <div className="flex items-center space-x-2">
        {/* RAM Icon */}
        <span className="text-blue-500">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path d="M7 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zM14 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zM9 5a1 1 0 00-1 1v8a1 1 0 102 0V6a1 1 0 00-1-1z"/>
          </svg>
        </span>
        <span className="font-semibold">RAM:</span>
      </div>
      <span>{laptop.ram}</span>
    </li>
    <li className="grid grid-cols-2 gap-4 border-b border-gray-200 pb-2 mb-2">
      <div className="flex items-center space-x-2">
        {/* Storage Icon */}
        <span className="text-blue-500">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
          </svg>
        </span>
        <span className="font-semibold">Storage:</span>
      </div>
      <span>{laptop.storage}</span>
    </li>
    <li className="grid grid-cols-2 gap-4 border-b border-gray-200 pb-2 mb-2">
      <div className="flex items-center space-x-2">
        {/* Display Icon */}
        <span className="text-blue-500">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10 2a2 2 0 00-2 2v1a1 1 0 00-2 0V4a1 1 0 00-1-1H4a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V4a1 1 0 00-1-1h-1a1 1 0 00-1 1v1a1 1 0 00-2 0V4a2 2 0 00-2-2zM5 4h10v12H5V4z"/>
          </svg>
        </span>
        <span className="font-semibold">Display:</span>
      </div>
      <span>{laptop.display}</span>
    </li>
    <li className="grid grid-cols-2 gap-4 border-b border-gray-200 pb-2 mb-2">
      <div className="flex items-center space-x-2">
        {/* Battery Icon */}
        <span className="text-blue-500">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm10 2a1 1 0 10-2 0v6a1 1 0 102 0V7z" clipRule="evenodd" />
          </svg>
        </span>
        <span className="font-semibold">Battery:</span>
      </div>
      <span>{laptop.battery}</span>
    </li>
    <li className="grid grid-cols-2 gap-4 border-b border-gray-200 pb-2 mb-2">
      <div className="flex items-center space-x-2">
        {/* Weight Icon */}
        <span className="text-blue-500">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zM5 1a1 1 0 00-1 1v16a1 1 0 102 0V2a1 1 0 00-1-1zM15 1a1 1 0 00-1 1v16a1 1 0 102 0V2a1 1 0 00-1-1z"/>
          </svg>
        </span>
        <span className="font-semibold">Weight:</span>
      </div>
      <span>{laptop.weight}</span>
    </li>
    <li className="grid grid-cols-2 gap-4 border-b border-gray-200 pb-2 mb-2">
      <div className="flex items-center space-x-2">
        {/* Ports Icon */}
        <span className="text-blue-500">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path d="M5 2a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V4a2 2 0 00-2-2H5zm0 2h10v12H5V4z"/>
          </svg>
        </span>
        <span className="font-semibold">Ports:</span>
      </div>
      <span>{laptop.ports}</span>
    </li>
  </ul>
</div>
</div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <button className="flex-1 py-3 px-6 bg-blue-600 text-white font-semibold rounded-full shadow-lg hover:bg-blue-700 transition transform hover:-translate-y-1">
                Add to Cart
              </button>
              <button className="flex-1 py-3 px-6 border border-gray-300 text-gray-800 font-semibold rounded-full hover:bg-gray-100 transition transform hover:-translate-y-1">
                Buy Now
              </button>
            </div>
          </div>
        </div>

        {/* Tabs for Description, Reviews, etc. */}
        <div className="mt-12 bg-white rounded-xl shadow-lg">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-4 md:space-x-8 px-6 pt-4" aria-label="Tabs">
              <button
                onClick={() => setActiveTab("description")}
                className={`whitespace-nowrap py-2 px-1 border-b-2 text-lg font-semibold transition-colors ${
                  activeTab === "description" ? "border-blue-600 text-blue-600" : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                Description
              </button>
              <button
                onClick={() => setActiveTab("reviews")}
                className={`whitespace-nowrap py-2 px-1 border-b-2 text-lg font-semibold transition-colors ${
                  activeTab === "reviews" ? "border-blue-600 text-blue-600" : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                Reviews & Ratings
              </button>
              <button
                onClick={() => setActiveTab("faqs")}
                className={`whitespace-nowrap py-2 px-1 border-b-2 text-lg font-semibold transition-colors ${
                  activeTab === "faqs" ? "border-b-2 border-blue-600 text-blue-600" : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                FAQs
              </button>
            </nav>
          </div>
          <div className="p-8">
            {activeTab === "description" && (
              <p className="text-gray-700 leading-relaxed">{laptop.description}</p>
            )}
            {activeTab === "reviews" && (
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Customer Reviews</h3>
                <p>No reviews yet. Be the first to review this product!</p>
              </div>
            )}
            {activeTab === "faqs" && (
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Frequently Asked Questions</h3>
                <p>No questions submitted for this product.</p>
              </div>
            )}
          </div>
        </div>

        {/* Similar Products */}
        {similar.length > 0 && (
          <div className="mt-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Similar Products</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
              {similar.map((item) => (
                <div
                  key={item.id}
                  onClick={() => handleSimilarClick(item.id)}
                  className="p-4 bg-white rounded-lg shadow-md cursor-pointer hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1"
                >
                  <img
                    src={item.images?.[0] || "https://placehold.co/400x300/e2e8f0/475569?text=No+Image"}
                    alt={item.name}
                    className="w-full h-32 object-contain rotate-0 mb-3"
                  />
                  <h3 className="font-semibold text-base truncate">{item.name}</h3>
                  <p className="text-green-600 font-bold mt-1 text-lg">{item.price}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    // </div>
  );
}
