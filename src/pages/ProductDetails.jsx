



// import React, { useState, useEffect, useRef } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import laptops from "../data/laptop.js"; // Your laptops array

// export default function ProductDetails() {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [currentImage, setCurrentImage] = useState(0);
//   const [activeTab, setActiveTab] = useState("description");
//   const [show360, setShow360] = useState(false);
//   const intervalRef = useRef(null);

//   const laptop = laptops.find((l) => l.id === Number(id));

//   Auto scroll images
//   const startAutoScroll = () => {
//     if (intervalRef.current) clearInterval(intervalRef.current);
//     intervalRef.current = setInterval(() => {
//       setCurrentImage((prev) => (prev + 1) % laptop.images.length);
//     }, 3000);
//   };
//   const stopAutoScroll = () => intervalRef.current && clearInterval(intervalRef.current);

//   useEffect(() => {
//     if (laptop && laptop.images?.length > 1 && !show360) startAutoScroll();
//     return () => stopAutoScroll();
//   }, [laptop, show360]);

//   const handleManualImageChange = (index) => {
//     stopAutoScroll();
//     setCurrentImage(index);
//     setShow360(false);
//   };

//   const nextImage = () => {
//     stopAutoScroll();
//     setCurrentImage((prev) => (prev + 1) % laptop.images.length);
//   };

//   const prevImage = () => {
//     stopAutoScroll();
//     setCurrentImage((prev) => (prev - 1 + laptop.images.length) % laptop.images.length);
//   };

//   const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

//   const handleSimilarClick = (newId) => {
//     navigate(`/product/${newId}`);
//     scrollToTop();
//   };

//   const similar = laptops.filter((l) => l.brand === laptop.brand && l.id !== laptop.id);

//   if (!laptop)
//     return (
//       <div className="max-w-4xl mx-auto p-8 text-center bg-white rounded-lg shadow-xl mt-12">
//         <p className="text-red-600 text-lg font-semibold">Laptop not found!</p>
//         <button
//           onClick={() => navigate(-1)}
//           className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition"
//         >
//           Go Back
//         </button>
//       </div>
//     );

//   WhatsApp dynamic link function
//   const handleBuyNow = () => {
//     const phone = "918669779438"; // Your WhatsApp business number with country code
//     const message = `Hi! I'm interested in this laptop:

// Name: ${laptop.name}
// Brand: ${laptop.brand}
// Price: ${laptop.price}
// Specs: Processor: ${laptop.processor}, RAM: ${laptop.ram}, Storage: ${laptop.storage}, Display: ${laptop.display}, Battery: ${laptop.battery}, Ports: ${laptop.ports}
// Link: ${window.location.href}`;

//     const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
//     window.open(url, "_blank");
//   };

//   return (
//     <div className="w-full mx-0 px-0 py-3">
//       {/* Back Button */}
//       <button
//         onClick={() => navigate(-1)}
//         className="text-gray-600 hover:text-blue-600 mb-6 flex items-center gap-2 transition-colors"
//       >
//         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
//           <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
//         </svg>
//         Back to Laptops
//       </button>

//       {/* Main Product Content */}
//       <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 lg:p-10 md:flex md:gap-8 lg:gap-12">
//         {/* Image Section */}
//         <div className="md:w-1/2 flex flex-col items-center">
//           <div className="w-full h-64 md:h-80 lg:h-96 relative mb-4 group">
//             {show360 ? (
//               <div className="w-full h-full bg-gray-200 flex items-center justify-center rounded-lg text-gray-500">
//                 <span className="text-lg">360° View Placeholder</span>
//               </div>
//             ) : (
//               <img
//                 src={laptop.images?.[currentImage] || "https://placehold.co/600x450/e2e8f0/475569?text=No+Image"}
//                 alt={laptop.name}
//                 className="w-full h-full object-contain transition-transform duration-500 ease-in-out hover:scale-105"
//               />
//             )}
//             <button
//               onClick={prevImage}
//               className="absolute left-0 top-1/2 -translate-y-1/2 p-2 bg-black bg-opacity-30 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity"
//             >
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//               </svg>
//             </button>
//             <button
//               onClick={nextImage}
//               className="absolute right-0 top-1/2 -translate-y-1/2 p-2 bg-black bg-opacity-30 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity"
//             >
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//               </svg>
//             </button>
//           </div>

//           {/* Thumbnails & 360° Toggle */}
//           <div className="flex flex-wrap justify-center gap-3 md:gap-4 lg:gap-5 mb-6">
//             {laptop.images?.map((img, index) => (
//               <button
//                 key={index}
//                 onClick={() => handleManualImageChange(index)}
//                 className={`w-14 h-14 md:w-16 md:h-16 p-1 rounded-md border-2 transition-colors ${index === currentImage && !show360 ? "border-blue-500" : "border-gray-200 hover:border-blue-300"}`}
//               >
//                 <img src={img} alt={`${laptop.name}-${index}`} className="w-full h-full object-contain rounded-sm" />
//               </button>
//             ))}
//             <button
//               onClick={() => setShow360(!show360)}
//               className={`w-14 h-14 md:w-16 md:h-16 p-1 rounded-md border-2 text-center text-xs md:text-sm font-semibold transition-colors ${show360 ? "border-blue-500 text-blue-600" : "border-gray-200 text-gray-600 hover:border-blue-300"}`}
//             >
//               360°
//             </button>
//           </div>
//         </div>

//         {/* Product Details */}
//         <div className="md:w-1/2 flex flex-col justify-between">
//           <div>
//             <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900">{laptop.name}</h1>
//             <p className="text-gray-500 text-lg md:text-xl mt-1">{laptop.brand}</p>
//             <div className="flex items-center text-lg mt-2">
//               <span className="text-yellow-400">★★★★☆</span>
//               <span className="text-gray-500 ml-2">(1,250 reviews)</span>
//             </div>
//             <p className="text-green-600 text-6xl font-bold mt-4">{laptop.price}</p>

//             {/* Specs */}
//             <div className="mt-6 border-t pt-6">
//               <h2 className="text-xl font-bold mb-4 text-gray-800">Technical Specifications</h2>
//               <ul className="text-base space-y-3 text-gray-700">
//                 {["processor","ram","storage","display","battery","weight","ports"].map((spec) => (
//                   <li key={spec} className="grid grid-cols-2 gap-4 border-b border-gray-200 pb-2 mb-2">
//                     <span className="font-semibold capitalize">{spec}:</span>
//                     <span>{laptop[spec]}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>

//           {/* Action Buttons */}
//           <div className="flex flex-col sm:flex-row gap-4 mt-6">
//             <button className="flex-1 py-3 px-6 bg-blue-600 text-white font-semibold rounded-full shadow-lg hover:bg-blue-700 transition transform hover:-translate-y-1">
//               Add to Cart
//             </button>
//             <button
//               onClick={handleBuyNow}
//               className="flex-1 py-3 px-6 border border-gray-300 text-gray-800 font-semibold rounded-full hover:bg-gray-100 transition transform hover:-translate-y-1"
//             >
//               Buy Now
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Tabs */}
//       <div className="mt-12 bg-white rounded-xl shadow-lg">
//         <div className="border-b border-gray-200">
//           <nav className="flex space-x-4 md:space-x-8 px-6 pt-4">
//             {["description","reviews","faqs"].map((tab) => (
//               <button
//                 key={tab}
//                 onClick={() => setActiveTab(tab)}
//                 className={`whitespace-nowrap py-2 px-1 border-b-2 text-lg font-semibold transition-colors ${activeTab === tab ? "border-blue-600 text-blue-600" : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"}`}
//               >
//                 {tab === "description" ? "Description" : tab === "reviews" ? "Reviews & Ratings" : "FAQs"}
//               </button>
//             ))}
//           </nav>
//         </div>
//         <div className="p-8">
//           {activeTab === "description" && <p className="text-gray-700 leading-relaxed">{laptop.description}</p>}
//           {activeTab === "reviews" && <p>No reviews yet. Be the first to review this product!</p>}
//           {activeTab === "faqs" && <p>No questions submitted for this product.</p>}
//         </div>
//       </div>

//       {/* Similar Products */}
//       {similar.length > 0 && (
//         <div className="mt-12">
//           <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Similar Products</h2>
//           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
//             {similar.map((item) => (
//               <div
//                 key={item.id}
//                 onClick={() => handleSimilarClick(item.id)}
//                 className="p-4 bg-white rounded-lg shadow-md cursor-pointer hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1"
//               >
//                 <img
//                   src={item.images?.[0] || "https://placehold.co/400x300/e2e8f0/475569?text=No+Image"}
//                   alt={item.name}
//                   className="w-full h-32 object-contain mb-3"
//                 />
//                 <h3 className="font-semibold text-base truncate">{item.name}</h3>
//                 <p className="text-green-600 font-bold mt-1 text-lg">{item.price}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}
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
  const intervalRef = useRef(null);

  const laptop = laptops.find((l) => l.id === Number(id));

  // 🌀 Auto image scroll
  const startAutoScroll = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % laptop.images.length);
    }, 3000);
  };

  const stopAutoScroll = () => intervalRef.current && clearInterval(intervalRef.current);

  useEffect(() => {
    if (laptop && laptop.images?.length > 1 && !show360) startAutoScroll();
    return () => stopAutoScroll();
  }, [laptop, show360]);

  const handleManualImageChange = (index) => {
    stopAutoScroll();
    setCurrentImage(index);
    setShow360(false);
  };

  const nextImage = () => {
    stopAutoScroll();
    setCurrentImage((prev) => (prev + 1) % laptop.images.length);
  };

  const prevImage = () => {
    stopAutoScroll();
    setCurrentImage((prev) => (prev - 1 + laptop.images.length) % laptop.images.length);
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const handleSimilarClick = (newId) => {
    navigate(`/product/${newId}`);
    scrollToTop();
  };

  // 🧠 SMART SIMILAR PRODUCT LOGIC
  const similar = laptops
    .filter((item) => {
      if (item.id === laptop.id) return false;

      // ✅ Similar Price ±25%
      const priceWithinRange =
        item.price >= laptop.price * 0.75 && item.price <= laptop.price * 1.25;

      // ✅ Similar Processor or RAM
      const specSimilar =
        (item.processor &&
          laptop.processor &&
          item.processor
            .toLowerCase()
            .includes(laptop.processor.split(" ")[0].toLowerCase())) ||
        (item.ram &&
          laptop.ram &&
          item.ram.toLowerCase() === laptop.ram.toLowerCase());

      return priceWithinRange || specSimilar;
    })
    // ✅ Prioritize same brand first
    .sort((a, b) => {
      const sameBrandA = a.brand === laptop.brand ? -1 : 1;
      const sameBrandB = b.brand === laptop.brand ? -1 : 1;
      return sameBrandA - sameBrandB;
    })
    .slice(0, 10);

  // 🛒 WhatsApp Buy Now
  const handleBuyNow = () => {
    const phone = "918669779438";
    const message = `Hi! I'm interested in this laptop:

Name: ${laptop.name}
Brand: ${laptop.brand}
Price: ${laptop.price}
Specs: Processor: ${laptop.processor}, RAM: ${laptop.ram}, Storage: ${laptop.storage}, Display: ${laptop.display}, Battery: ${laptop.battery}, Ports: ${laptop.ports}
Link: ${window.location.href}`;

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  if (!laptop)
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

  return (
    <div className="w-full mx-0 px-0 py-3">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="text-gray-600 hover:text-blue-600 mb-6 flex items-center gap-2 transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path
            fillRule="evenodd"
            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
        Back to Laptops
      </button>

      {/* Main Product Section */}
      <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 lg:p-10 md:flex md:gap-8 lg:gap-12">
        {/* Image Section */}
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
                className="w-full h-full object-contain transition-transform duration-500 ease-in-out hover:scale-105"
              />
            )}
            {/* Nav Arrows */}
            <button
              onClick={prevImage}
              className="absolute left-0 top-1/2 -translate-y-1/2 p-2 bg-black/30 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity"
            >
              ◀
            </button>
            <button
              onClick={nextImage}
              className="absolute right-0 top-1/2 -translate-y-1/2 p-2 bg-black/30 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity"
            >
              ▶
            </button>
          </div>

          {/* Thumbnails */}
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {laptop.images?.map((img, index) => (
              <button
                key={index}
                onClick={() => handleManualImageChange(index)}
                className={`w-14 h-14 md:w-16 md:h-16 p-1 rounded-md border-2 transition-colors ${
                  index === currentImage && !show360
                    ? "border-blue-500"
                    : "border-gray-200 hover:border-blue-300"
                }`}
              >
                <img src={img} alt={`${laptop.name}-${index}`} className="w-full h-full object-contain rounded-sm" />
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

        {/* Product Info */}
        <div className="md:w-1/2 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900">{laptop.name}</h1>
            <p className="text-gray-500 text-lg mt-1">{laptop.brand}</p>
            <div className="flex items-center text-lg mt-2">
              <span className="text-yellow-400">★★★★☆</span>
              <span className="text-gray-500 ml-2">(1,250 reviews)</span>
            </div>
            <p className="text-green-600 text-5xl font-bold mt-4">{laptop.price}</p>

            {/* Specs */}
            <div className="mt-6 border-t pt-6">
              <h2 className="text-xl font-bold mb-4 text-gray-800">Technical Specifications</h2>
              <ul className="text-base space-y-3 text-gray-700">
                {["processor", "ram", "storage", "display", "battery", "weight", "ports"].map((spec) => (
                  <li key={spec} className="grid grid-cols-2 gap-4 border-b border-gray-200 pb-2 mb-2">
                    <span className="font-semibold capitalize">{spec}:</span>
                    <span>{laptop[spec]}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <button className="flex-1 py-3 px-6 bg-blue-600 text-white font-semibold rounded-full shadow-lg hover:bg-blue-700 transition transform hover:-translate-y-1">
              Add to Cart
            </button>
            <button
              onClick={handleBuyNow}
              className="flex-1 py-3 px-6 border border-gray-300 text-gray-800 font-semibold rounded-full hover:bg-gray-100 transition transform hover:-translate-y-1"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="mt-12 bg-white rounded-xl shadow-lg">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-4 md:space-x-8 px-6 pt-4">
            {["description", "reviews", "terms"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`whitespace-nowrap py-2 px-1 border-b-2 text-lg font-semibold transition-colors ${
                  activeTab === tab
                    ? "border-blue-600 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                {tab === "description"
                  ? "Description"
                  : tab === "reviews"
                  ? "Reviews & Ratings"
                  : "terms & condition"}
              </button>
            ))}
          </nav>
        </div>
        <div className="p-8">
          {activeTab === "description" && <p className="text-gray-700 leading-relaxed">{laptop.description}</p>}
          {activeTab === "reviews" && <p>No reviews yet. Be the first to review this product!</p>}
          {/* {activeTab === "faqs" && <p>No questions submitted for this product.</p>} */}
          {activeTab === "terms" && (
  <div>
    <h3 className="text-lg font-semibold mb-2">Terms & Conditions</h3>
    <ul className="list-disc ml-6 space-y-1 text-gray-700">
      <li>All laptops are quality checked before delivery.</li>
      <li>Warranty depends on brand or store policy.</li>
      <li>Returns accepted within 7 days of purchase.</li>
      <li>Keep the original bill and packaging for support.</li>
      <li>Physical or liquid damage is not covered.</li>
    </ul>
  </div>
)}

        </div>
      </div>

      {/* 💡 Similar Products Section */}
      {similar.length > 0 && (
        <div className="mt-16">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center tracking-wide">
            💻 Similar Products You May Like
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
            {similar.map((item) => (
              <div
                key={item.id}
                onClick={() => handleSimilarClick(item.id)}
                className="group bg-gradient-to-b from-[#F5F7FF] via-[#fffbee] to-[#E6EFFF] p-4 rounded-2xl shadow-md cursor-pointer hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 hover:scale-[1.03]"
              >
                <div className="relative w-full h-32 flex items-center justify-center overflow-hidden rounded-lg bg-white">
                  <img
                    src={item.images?.[0] || "https://placehold.co/400x300/e2e8f0/475569?text=No+Image"}
                    alt={item.name}
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="mt-3 text-center">
                  <h3 className="font-semibold text-sm md:text-base text-gray-800 truncate">
                    {item.name}
                  </h3>
                  <p className="text-green-600 font-bold mt-1 text-lg">
                    {item.price}
                  </p>
                  <p className="text-gray-600 text-xs mt-1">
                    {item.processor || "Intel / AMD"} | {item.ram || "8GB RAM"}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
