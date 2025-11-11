// // // // // import React from "react";
// // // // // import { useLocation, useNavigate } from "react-router-dom";

// // // // // const AccessoryDetails = () => {
// // // // //   const location = useLocation();
// // // // //   const navigate = useNavigate();
// // // // //   const accessory = location.state;

// // // // //   if (!accessory) {
// // // // //     return (
// // // // //       <div className="text-center text-white p-8 bg-gray-950 min-h-screen">
// // // // //         <p>Accessory details not found.</p>
// // // // //         <button
// // // // //           onClick={() => navigate("/accessories")}
// // // // //           className="mt-4 bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700"
// // // // //         >
// // // // //           Go Back
// // // // //         </button>
// // // // //       </div>
// // // // //     );
// // // // //   }

// // // // //   return (
// // // // //     <div className="min-h-screen bg-gray-950 text-white p-6">
// // // // //       <div className="max-w-5xl mx-auto bg-gray-900 rounded-2xl p-6 border border-gray-800">
// // // // //         <button
// // // // //           onClick={() => navigate(-1)}
// // // // //           className="mb-6 bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg"
// // // // //         >
// // // // //           ⬅ Back
// // // // //         </button>

// // // // //         <div className="grid md:grid-cols-2 gap-6">
// // // // //           <img
// // // // //             src={accessory.img}
// // // // //             alt={accessory.name}
// // // // //             className="w-full h-80 object-cover rounded-2xl"
// // // // //           />
// // // // //           <div>
// // // // //             <h1 className="text-3xl font-bold mb-2">{accessory.name}</h1>
// // // // //             <p className="text-gray-400 mb-4">₹{accessory.price.toLocaleString()}</p>
// // // // //             <p className="text-gray-300 mb-4">{accessory.desc}</p>

// // // // //             <h3 className="text-xl font-semibold mb-2">Specifications</h3>
// // // // //             <ul className="space-y-2 text-gray-400">
// // // // //               {Object.entries(accessory.specs).map(([key, value]) => (
// // // // //                 <li key={key}>
// // // // //                   <strong className="text-gray-200">{key}:</strong> {value}
// // // // //                 </li>
// // // // //               ))}
// // // // //             </ul>

// // // // //             <button className="mt-6 bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg w-full">
// // // // //               Add to Cart
// // // // //             </button>
// // // // //           </div>
// // // // //         </div>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default AccessoryDetails;
// // // // import React from "react";
// // // // import { useParams, Link } from "react-router-dom";
// // // // import { accessories } from "../data/laptop";

// // // // const AccessoryDetails = () => {
// // // //   const { id } = useParams();
// // // // //   const accessory = accessories.find((item) => item.id === parseInt(id));
// // // // const accessory = accessories.find((item) => String(item.id) === id);


// // // //   if (!accessory) {
// // // //     return (
// // // //       <div className="p-8 text-center">
// // // //         <h2 className="text-2xl font-bold text-red-600">Accessory Not Found</h2>
// // // //         <Link to="/accessories" className="text-blue-600 underline">Back to Accessories</Link>
// // // //       </div>
// // // //     );
// // // //   }

// // // //   return (
// // // //     <div className="p-8 bg-gray-100 min-h-screen">
// // // //       <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-6">
// // // //         <img src={accessory.image} alt={accessory.name} className="h-60 w-full object-contain mb-4" />
// // // //         <h1 className="text-2xl font-bold mb-2">{accessory.name}</h1>
// // // //         <p className="text-gray-700 mb-4">Price: ₹{accessory.price}</p>

// // // //         <h3 className="text-xl font-semibold mb-2">Specifications:</h3>
// // // //         <ul className="list-disc pl-6 text-gray-600">
// // // //           {Object.entries(accessory.specs).map(([key, value]) => (
// // // //             <li key={key}>
// // // //               <strong>{key}:</strong> {value}
// // // //             </li>
// // // //           ))}
// // // //         </ul>

// // // //         {/* <Link to="/accessories"> */}
// // // //         <Link to={`/accessories/${item.id}`}>
// // // //           <button className="mt-5 bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700">
// // // //             Back to Accessories
// // // //           </button>
// // // //         </Link>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default AccessoryDetails;





// // // import React from "react";
// // // import { useParams, useLocation, Link } from "react-router-dom";
// // // import { accessories } from "../data/laptop";

// // // const AccessoryDetails = () => {
// // //   const { id } = useParams();
// // //   const location = useLocation();

// // //   // 1️⃣ Get data from state (if available)
// // //   const accessoryFromState = location.state;

// // //   // 2️⃣ Fallback — find in data by ID if direct access
// // //   const accessory =
// // //     accessoryFromState || accessories.find((item) => item.id === parseInt(id));

// // //   if (!accessory) {
// // //     return (
// // //       <div className="p-8 text-center">
// // //         <h2 className="text-2xl font-bold text-red-600">
// // //           Accessory Not Found
// // //         </h2>
// // //         <Link to="/accessories" className="text-blue-600 underline">
// // //           Back to Accessories
// // //         </Link>
// // //       </div>
// // //     );
// // //   }

// // //   return (
// // //     <div className="min-h-screen from-[#F5F7FF] via-[#fffbee] to-[#E6EFFF] text-gray-800">
// // //       <div className="max-w-3xl mx-auto bg-gray-900 rounded-xl shadow-lg p-6">
// // //         <img
// // //           src={accessory.image}
// // //           alt={accessory.name}
// // //           className="h-64 w-full object-contain mb-4 rounded-lg"
// // //         />
// // //         <h1 className="text-3xl font-bold mb-2">{accessory.name}</h1>
// // //         <p className="text-gray-400 mb-4 text-lg">
// // //           Price: ₹{accessory.price?.toLocaleString()}
// // //         </p>

// // //         <h3 className="text-xl font-semibold mb-2">Specifications:</h3>
// // //         {accessory.specs ? (
// // //           <ul className="list-disc pl-6 text-gray-300">
// // //             {Object.entries(accessory.specs).map(([key, value]) => (
// // //               <li key={key}>
// // //                 <strong>{key}:</strong> {value}
// // //               </li>
// // //             ))}
// // //           </ul>
// // //         ) : (
// // //           <p className="text-gray-500">No specs available</p>
// // //         )}

// // //         <Link to="/accessories">
// // //           <button className="mt-6 bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg">
// // //             Back to Accessories
// // //           </button>
// // //         </Link>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default AccessoryDetails;















// // // import React from "react";
// // // import { useParams, useLocation, Link } from "react-router-dom";
// // // import { accessories } from "../data/laptop";

// // // const AccessoryDetails = () => {
// // //   const { id } = useParams();
// // //   const location = useLocation();
// // //   const accessoryFromState = location.state;
// // //   const accessory =
// // //     accessoryFromState || accessories.find((item) => item.id === parseInt(id));

// // //   if (!accessory) {
// // //     return (
// // //       <div className="p-8 text-center">
// // //         <h2 className="text-2xl font-bold text-red-600">
// // //           Accessory Not Found
// // //         </h2>
// // //         <Link to="/accessories" className="text-blue-600 underline">
// // //           Back to Accessories
// // //         </Link>
// // //       </div>
// // //     );
// // //   }

// // //   // 🧩 Example similar products (You can fetch dynamically if needed)
// // //   const similarProducts = accessories
// // //     .filter((item) => item.category === accessory.category && item.id !== accessory.id)
// // //     .slice(0, 4);

// // //   return (
// // //     <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white px-4 py-10">
// // //       <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">
// // //         {/* 📸 Image Section with Scroll */}
// // //         <div className="flex flex-col gap-4 overflow-x-auto scrollbar-hide">
// // //           {accessory.images ? (
// // //             accessory.images.map((img, idx) => (
// // //               <img
// // //                 key={idx}
// // //                 src={img}
// // //                 alt={`${accessory.name}-${idx}`}
// // //                 className="h-72 w-full object-contain rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
// // //               />
// // //             ))
// // //           ) : (
// // //             <img
// // //               src={accessory.image}
// // //               alt={accessory.name}
// // //               className="h-80 w-full object-contain rounded-2xl shadow-lg"
// // //             />
// // //           )}
// // //         </div>

// // //         {/* 🧾 Product Info Section */}
// // //         <div>
// // //           <h1 className="text-4xl font-bold mb-3">{accessory.name}</h1>
// // //           <p className="text-gray-400 text-lg mb-6 leading-relaxed">
// // //             {accessory.description ||
// // //               "Experience next-level performance and design with this high-quality accessory designed for gamers and professionals alike."}
// // //           </p>

// // //           {/* 💰 Price Section */}
// // //           <div className="bg-gradient-to-r from-blue-700 to-blue-500 p-5 rounded-xl inline-block shadow-md mb-6">
// // //             <p className="text-xl font-semibold">Price:</p>
// // //             <p className="text-3xl font-extrabold">₹{accessory.price?.toLocaleString()}</p>
// // //           </div>

// // //           {/* 🧠 Technical Specifications */}
// // //           <div className="bg-gray-800 p-5 rounded-xl mb-8 shadow-md">
// // //             <h3 className="text-2xl font-semibold mb-4 border-b border-gray-700 pb-2">
// // //               Technical Specifications
// // //             </h3>
// // //             {accessory.specs ? (
// // //               <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-300">
// // //                 {Object.entries(accessory.specs).map(([key, value]) => (
// // //                   <li key={key}>
// // //                     <strong className="text-gray-200">{key}:</strong> {value}
// // //                   </li>
// // //                 ))}
// // //               </ul>
// // //             ) : (
// // //               <p className="text-gray-500">No specifications available.</p>
// // //             )}
// // //           </div>

// // //           {/* 🔙 Back Button */}
// // //           <Link to="/accessories">
// // //             <button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-xl shadow-lg transition-transform hover:scale-105">
// // //               ← Back to Accessories
// // //             </button>
// // //           </Link>
// // //         </div>
// // //       </div>

// // //       {/* 🧩 About Product Section */}
// // //       <div className="max-w-6xl mx-auto mt-16">
// // //         <h2 className="text-3xl font-bold mb-4 border-b border-gray-700 pb-2">
// // //           About the Product
// // //         </h2>
// // //         <p className="text-gray-400 text-lg leading-relaxed">
// // //           {accessory.about ||
// // //             "This accessory is built to enhance your productivity, style, and performance. With top-grade materials and precision design, it complements your setup perfectly."}
// // //         </p>
// // //       </div>

// // //       {/* 🛒 Similar Products Section */}
// // //       {similarProducts.length > 0 && (
// // //         <div className="max-w-6xl mx-auto mt-16">
// // //           <h2 className="text-3xl font-bold mb-8 border-b border-gray-700 pb-2">
// // //             Similar Products
// // //           </h2>
// // //           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
// // //             {similarProducts.map((item) => (
// // //               <Link
// // //                 key={item.id}
// // //                 to={`/accessory/${item.id}`}
// // //                 state={item}
// // //                 className="bg-gray-800 hover:bg-gray-700 rounded-xl shadow-md overflow-hidden transition-transform hover:scale-105"
// // //               >
// // //                 <img
// // //                   src={item.image}
// // //                   alt={item.name}
// // //                   className="h-48 w-full object-contain p-4"
// // //                 />
// // //                 <div className="p-4">
// // //                   <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
// // //                   <p className="text-blue-400 font-bold">
// // //                     ₹{item.price?.toLocaleString()}
// // //                   </p>
// // //                 </div>
// // //               </Link>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       )}
// // //     </div>
// // //   );
// // // };

// // // export default AccessoryDetails;










// // import React, { useRef, useState } from "react";
// // import { useParams, useLocation, Link } from "react-router-dom";
// // import { accessories } from "../data/laptop";
// // import { ChevronLeft, ChevronRight, X } from "lucide-react";

// // const AccessoryDetails = () => {
// //   const { id } = useParams();
// //   const location = useLocation();
// //   const accessoryFromState = location.state;
// //   const accessory =
// //     accessoryFromState || accessories.find((item) => item.id === parseInt(id));

// //   const scrollRef = useRef(null);
// //   const [zoomedImage, setZoomedImage] = useState(null);

// //   if (!accessory) {
// //     return (
// //       <div className="p-8 text-center">
// //         <h2 className="text-2xl font-bold text-red-600">Accessory Not Found</h2>
// //         <Link to="/accessories" className="text-blue-600 underline">
// //           Back to Accessories
// //         </Link>
// //       </div>
// //     );
// //   }

// //   const similarProducts = accessories
// //     .filter(
// //       (item) => item.category === accessory.category && item.id !== accessory.id
// //     )
// //     .slice(0, 4);

// //   // 🔁 Scroll functions
// //   const scrollLeft = () => {
// //     scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
// //   };
// //   const scrollRight = () => {
// //     scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
// //   };

// //   return (
// //     <div className="min-h-screen bg-gradient-to-br text-white px-4 py-10 relative">
// //       {/* 🔙 Back Button */}
// //       <Link
// //         to="/accessories"
// //         className="absolute top-6 left-6 bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-full text-sm flex items-center gap-2 shadow-lg z-50"
// //       >
// //         ← Back
// //       </Link>

// //       {/* 🖼️ Zoomed Image Modal */}
// //       {zoomedImage && (
// //         <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50">
// //           <img
// //             src={zoomedImage}
// //             alt="Zoomed"
// //             className="max-h-[90vh] max-w-[90vw] rounded-xl"
// //           />
// //           <button
// //             onClick={() => setZoomedImage(null)}
// //             className="absolute top-6 right-6 bg-red-600 hover:bg-red-700 p-2 rounded-full"
// //           >
// //             <X size={20} />
// //           </button>
// //         </div>
// //       )}

// //       <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">
// //         {/* 📸 Image Scroll Section */}
// //         <div className="relative">
// //           <button
// //             onClick={scrollLeft}
// //             className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-800 hover:bg-gray-700 p-2 rounded-full z-10"
// //           >
// //             <ChevronLeft size={24} />
// //           </button>
// //           <div
// //             ref={scrollRef}
// //             className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth"
// //           >
// //             {accessory.images ? (
// //               accessory.images.map((img, idx) => (
// //                 <img
// //                   key={idx}
// //                   src={img}
// //                   alt={`${accessory.name}-${idx}`}
// //                   className="h-72 w-[340px] object-contain rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
// //                   onClick={() => setZoomedImage(img)}
// //                 />
// //               ))
// //             ) : (
// //               <img
// //                 src={accessory.image}
// //                 alt={accessory.name}
// //                 className="h-80 w-full object-contain rounded-2xl shadow-lg"
// //                 onClick={() => setZoomedImage(accessory.image)}
// //               />
// //             )}
// //           </div>
// //           <button
// //             onClick={scrollRight}
// //             className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-800 hover:bg-gray-700 p-2 rounded-full z-10"
// //           >
// //             <ChevronRight size={24} />
// //           </button>
// //         </div>

// //         {/* 🧾 Product Info */}
// //         <div>
// //           <h1 className="text-4xl font-bold mb-3">{accessory.name}</h1>
// //           <p className="text-gray-400 text-lg mb-6 leading-relaxed">
// //             {accessory.description ||
// //               "Experience next-level performance and design with this high-quality accessory designed for gamers and professionals alike."}
// //           </p>

// //           {/* 💰 Price Section */}
// //           <div className="bg-gradient-to-r from-blue-700 to-blue-500 p-5 rounded-xl inline-block shadow-md mb-6">
// //             <p className="text-xl font-semibold">Price:</p>
// //             <p className="text-3xl font-extrabold">
// //               ₹{accessory.price?.toLocaleString()}
// //             </p>
// //           </div>

// //           {/* ⚙️ Technical Specifications */}
// //           <div className="bg-gray-800 p-5 rounded-xl mb-8 shadow-md">
// //             <h3 className="text-2xl font-semibold mb-4 border-b border-gray-700 pb-2">
// //               Technical Specifications
// //             </h3>
// //             {accessory.specs ? (
// //               <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-300">
// //                 {Object.entries(accessory.specs).map(([key, value]) => (
// //                   <li key={key}>
// //                     <strong className="text-gray-200">{key}:</strong> {value}
// //                   </li>
// //                 ))}
// //               </ul>
// //             ) : (
// //               <p className="text-gray-500">No specifications available.</p>
// //             )}
// //           </div>
// //         </div>
// //       </div>

// //       {/* 📘 About Product Section */}
// //       <div className="max-w-6xl mx-auto mt-16">
// //         <h2 className="text-3xl font-bold mb-4 border-b border-gray-700 pb-2">
// //           About the Product
// //         </h2>
// //         <p className="text-gray-400 text-lg leading-relaxed">
// //           {accessory.about ||
// //             "This accessory is built to enhance your productivity, style, and performance. With top-grade materials and precision design, it complements your setup perfectly."}
// //         </p>
// //       </div>

// //       {/* 🛍️ Similar Products Section */}
// //       {similarProducts.length > 0 && (
// //         <div className="max-w-6xl mx-auto mt-16">
// //           <h2 className="text-3xl font-bold mb-8 border-b border-gray-700 pb-2">
// //             Similar Products
// //           </h2>
// //           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
// //             {similarProducts.map((item) => (
// //               <Link
// //                 key={item.id}
// //                 to={`/accessories/${item.id}`}
// //                 state={item}
// //                 className="bg-gray-800 hover:bg-gray-700 rounded-xl shadow-md overflow-hidden transition-transform hover:scale-105"
// //               >
// //                 <img
// //                   src={item.image}
// //                   alt={item.name}
// //                   className="h-48 w-full object-contain p-4"
// //                 />
// //                 <div className="p-4">
// //                   <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
// //                   <p className="text-blue-400 font-bold">
// //                     ₹{item.price?.toLocaleString()}
// //                   </p>
// //                 </div>
// //               </Link>
// //             ))}
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default AccessoryDetails;









// import React, { useRef, useState } from "react";
// import { useParams, useLocation, Link } from "react-router-dom";
// import { accessories } from "../data/laptop";
// import { ChevronLeft, ChevronRight, X } from "lucide-react";

// const AccessoryDetails = () => {
//   const { id } = useParams();
//   const location = useLocation();
//   const accessoryFromState = location.state;
//   const accessory =
//     accessoryFromState || accessories.find((item) => item.id === parseInt(id));

//   const scrollRef = useRef(null);
//   const [zoomedImage, setZoomedImage] = useState(null);

//   if (!accessory) {
//     return (
//       <div className="w-screen h-screen flex flex-col items-center justify-center bg-black text-white">
//         <h2 className="text-3xl font-bold text-red-500 mb-4">Accessory Not Found</h2>
//         <Link to="/accessories" className="text-blue-400 underline">
//           ← Back to Accessories
//         </Link>
//       </div>
//     );
//   }

//   const similarProducts = accessories
//     .filter(
//       (item) => item.category === accessory.category && item.id !== accessory.id
//     )
//     .slice(0, 4);

//   const scrollLeft = () => {
//     scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
//   };
//   const scrollRight = () => {
//     scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
//   };

//   const handleBackdropClick = (e) => {
//     if (e.target.id === "zoom-backdrop") {
//       setZoomedImage(null);
//     }
//   };

//   return (
//     <div className="w-screen min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white overflow-x-hidden overflow-y-auto">
//       {/* 🔙 Back Button */}
//       <Link
//         to="/accessories"
//         className="absolute top-6 left-6 bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-full text-sm flex items-center gap-2 shadow-lg z-50"
//       >
//         ← Back
//       </Link>

//       {/* 🖼️ Zoom Modal */}
//       {zoomedImage && (
//         <div
//           id="zoom-backdrop"
//           onClick={handleBackdropClick}
//           className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
//         >
//           <img
//             src={zoomedImage}
//             alt="Zoomed"
//             className="max-h-[90vh] max-w-[90vw] object-contain rounded-2xl"
//           />
//           <button
//             onClick={() => setZoomedImage(null)}
//             className="absolute top-6 right-6 bg-red-600 hover:bg-red-700 p-2 rounded-full"
//           >
//             <X size={22} />
//           </button>
//         </div>
//       )}

//       {/* 🌟 Product Section */}
//       <div className="w-full min-h-screen flex flex-col md:flex-row items-center justify-center gap-10 p-6 md:p-12">
//         {/* 📸 Image Carousel */}
//         <div className="relative w-full md:w-1/2 flex justify-center">
//           <button
//             onClick={scrollLeft}
//             className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-800/70 hover:bg-gray-700 p-2 rounded-full z-10"
//           >
//             <ChevronLeft size={24} />
//           </button>

//           <div
//             ref={scrollRef}
//             className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide w-full justify-center"
//           >
//             {(accessory.images || [accessory.image]).map((img, idx) => (
//               <div
//                 key={idx}
//                 className="flex-shrink-0 snap-center w-full sm:w-[400px]"
//               >
//                 <img
//                   src={img}
//                   alt={`${accessory.name}-${idx}`}
//                   className="h-80 sm:h-[450px] w-full object-contain bg-gray-800 rounded-2xl shadow-lg hover:scale-[1.03] transition-transform duration-300 cursor-pointer"
//                   onClick={() => setZoomedImage(img)}
//                 />
//               </div>
//             ))}
//           </div>

//           <button
//             onClick={scrollRight}
//             className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-800/70 hover:bg-gray-700 p-2 rounded-full z-10"
//           >
//             <ChevronRight size={24} />
//           </button>
//         </div>

//         {/* 🧾 Product Details */}
//         <div className="w-full md:w-1/2">
//           <h1 className="text-4xl md:text-5xl font-bold mb-4">{accessory.name}</h1>
//           <p className="text-gray-300 text-lg mb-6 leading-relaxed">
//             {accessory.description ||
//               "Experience next-level performance and aesthetics with this high-quality accessory."}
//           </p>

//           {/* 💰 Price Section */}
//           <div className="bg-gradient-to-r from-blue-600 to-indigo-500 p-6 rounded-2xl shadow-lg mb-8 inline-block">
//             <p className="text-xl text-gray-100 font-semibold">Price:</p>
//             <p className="text-4xl font-extrabold text-white">
//               ₹{accessory.price?.toLocaleString()}
//             </p>
//           </div>

//           {/* ⚙️ Technical Specs */}
//           <div className="bg-gray-800/80 p-6 rounded-2xl shadow-lg">
//             <h3 className="text-2xl font-semibold mb-4 border-b border-gray-700 pb-2">
//               Technical Specifications
//             </h3>
//             {accessory.specs ? (
//               <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-200">
//                 {Object.entries(accessory.specs).map(([key, value]) => (
//                   <li key={key}>
//                     <span className="text-gray-400">{key}:</span>{" "}
//                     <strong className="text-white">{value}</strong>
//                   </li>
//                 ))}
//               </ul>
//             ) : (
//               <p className="text-gray-400">No specifications available.</p>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* 📘 About Product */}
//       <div className="w-full px-6 md:px-16 py-10 bg-gray-900/50">
//         <h2 className="text-3xl font-bold mb-4 border-b border-gray-700 pb-2">
//           About the Product
//         </h2>
//         <p className="text-gray-300 text-lg leading-relaxed">
//           {accessory.about ||
//             "Built for professionals and gamers, this accessory combines durability, modern design, and premium quality to upgrade your setup."}
//         </p>
//       </div>

//       {/* 🛍️ Similar Products */}
//       {similarProducts.length > 0 && (
//         <div className="w-full px-6 md:px-16 py-12 bg-black/70">
//           <h2 className="text-3xl font-bold mb-8 border-b border-gray-700 pb-2">
//             Similar Products
//           </h2>
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//             {similarProducts.map((item) => (
//               <Link
//                 key={item.id}
//                 to={`/accessories/${item.id}`}
//                 state={item}
//                 className="bg-gray-800 hover:bg-gray-700 rounded-2xl shadow-md overflow-hidden transition-transform hover:scale-105 duration-300"
//               >
//                 <img
//                   src={item.image}
//                   alt={item.name}
//                   className="h-52 w-full object-contain p-4 bg-gray-900"
//                 />
//                 <div className="p-4">
//                   <h3 className="text-lg font-semibold mb-1 truncate">
//                     {item.name}
//                   </h3>
//                   <p className="text-blue-400 font-bold">
//                     ₹{item.price?.toLocaleString()}
//                   </p>
//                 </div>
//               </Link>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AccessoryDetails;



// // import React, { useRef, useState } from "react";
// // import { useParams, useLocation, Link } from "react-router-dom";
// // import { accessories } from "../data/laptop";
// // import { ChevronLeft, ChevronRight, X } from "lucide-react";

// // const AccessoryDetails = () => {
// //   const { id } = useParams();
// //   const location = useLocation();
// //   const accessoryFromState = location.state;
// //   const accessory =
// //     accessoryFromState || accessories.find((item) => item.id === parseInt(id));

// //   const scrollRef = useRef(null);
// //   const [zoomedImage, setZoomedImage] = useState(null);

// //   if (!accessory) {
// //     return (
// //       <div className="p-8 text-center">
// //         <h2 className="text-2xl font-bold text-red-600">Accessory Not Found</h2>
// //         <Link to="/accessories" className="text-blue-600 underline">
// //           Back to Accessories
// //         </Link>
// //       </div>
// //     );
// //   }

// //   const similarProducts = accessories
// //     .filter(
// //       (item) => item.category === accessory.category && item.id !== accessory.id
// //     )
// //     .slice(0, 4);

// //   // 🔁 Scroll functions
// //   const scrollLeft = () => {
// //     scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
// //   };
// //   const scrollRight = () => {
// //     scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
// //   };

// //   // 🧠 Handle closing zoom modal when clicking outside
// //   const handleBackdropClick = (e) => {
// //     if (e.target.id === "zoom-backdrop") {
// //       setZoomedImage(null);
// //     }
// //   };

// //   return (
// //     <div className="w-screen bg-gradient-to-br  text-black px-0 py-10 relative overflow-hidden">
// //       {/* 🔙 Back Button */}
// //       <Link
// //         to="/accessories"
// //         className="absolute top-6 left-6 bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-full text-sm flex items-center gap-2 shadow-lg z-50"
// //       >
// //         ← Back
// //       </Link>

// //       {/* 🖼️ Zoomed Image Modal */}
// //       {zoomedImage && (
// //         <div
// //           id="zoom-backdrop"
// //           onClick={handleBackdropClick}
// //           className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 transition-all duration-300"
// //         >
// //           <img
// //             src={zoomedImage}
// //             alt="Zoomed"
// //             className="max-h-[90vh] max-w-[90vw] rounded-2xl object-contain transform scale-100 transition-transform duration-300"
// //           />
// //           <button
// //             onClick={() => setZoomedImage(null)}
// //             className="absolute top-6 right-6 bg-red-600 hover:bg-red-700 p-2 rounded-full shadow-md"
// //           >
// //             <X size={22} />
// //           </button>
// //         </div>
// //       )}

// //       {/* 🌟 Main Layout */}
// //       <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-start">
// //         {/* 📸 Image Carousel */}
// //         <div className="relative group">
// //           <button
// //             onClick={scrollLeft}
// //             className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-800/70 hover:bg-gray-700 p-2 rounded-full z-10 opacity-0 group-hover:opacity-100 transition-opacity"
// //           >
// //             <ChevronLeft size={24} />
// //           </button>
// //           <div
// //             ref={scrollRef}
// //             className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory"
// //           >
// //             {(accessory.images || [accessory.image]).map((img, idx) => (
// //               <div
// //                 key={idx}
// //                 className="flex-shrink-0 snap-center w-full sm:w-[340px]"
// //               >
// //                 <img
// //                   src={img}
// //                   alt={`${accessory.name}-${idx}`}
// //                   className="h-80 sm:h-96 w-full object-contain bg-gray-800 rounded-2xl shadow-lg hover:scale-[1.03] transition-transform duration-300 cursor-pointer"
// //                   onClick={() => setZoomedImage(img)}
// //                 />
// //               </div>
// //             ))}
// //           </div>
// //           <button
// //             onClick={scrollRight}
// //             className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-800/70 hover:bg-gray-700 p-2 rounded-full z-10 opacity-0 group-hover:opacity-100 transition-opacity"
// //           >
// //             <ChevronRight size={24} />
// //           </button>
// //         </div>

// //         {/* 🧾 Product Info */}
// //         <div className="flex flex-col justify-between">
// //           <h1 className="text-4xl font-bold mb-3">{accessory.name}</h1>
// //           <p className="text-gray-900 text-lg mb-6 leading-relaxed">
// //             {accessory.description ||
// //               "Experience next-level performance and design with this premium accessory built for gamers and professionals alike."}
// //           </p>

// //           {/* 💰 Price Section */}
// //           <div className="bg-gradient-to-r from-blue-600 to-indigo-500 p-5 rounded-2xl inline-block shadow-md mb-6">
// //             <p className="text-xl font-semibold text-gray-100">Price:</p>
// //             <p className="text-4xl font-extrabold">
// //               ₹{accessory.price?.toLocaleString()}
// //             </p>
// //           </div>

// //           {/* ⚙️ Technical Specifications */}
// //           <div className="bg-gray-800/70 backdrop-blur-lg p-6 rounded-2xl shadow-md">
// //             <h3 className="text-2xl font-semibold mb-4 border-b border-gray-700 pb-2">
// //               Technical Specifications
// //             </h3>
// //             {accessory.specs ? (
// //               <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-100">
// //                 {Object.entries(accessory.specs).map(([key, value]) => (
// //                   <li key={key}>
// //                     <span className="text-gray-100">{key}:</span>{" "}
// //                     <strong className="text-gray-100">{value}</strong>
// //                   </li>
// //                 ))}
// //               </ul>
// //             ) : (
// //               <p className="text-gray-900">No specifications available.</p>
// //             )}
// //           </div>
// //         </div>
// //       </div>

// //       {/* 📘 About Product Section */}
// //       <div className="max-w-7xl mx-auto mt-20">
// //         <h2 className="text-3xl font-bold mb-4 border-b border-gray-900 pb-2">
// //           About the Product
// //         </h2>
// //         <p className="text-gray-900 text-lg leading-relaxed">
// //           {accessory.about ||
// //             "Designed with precision and performance in mind, this accessory combines durability, modern aesthetics, and functionality to enhance your setup and workflow."}
// //         </p>
// //       </div>

// //       {/* 🛍️ Similar Products Section */}
// //       {similarProducts.length > 0 && (
// //         <div className="max-w-7xl mx-auto mt-16">
// //           <h2 className="text-3xl font-bold mb-8 border-b border-gray-700 pb-2">
// //             Similar Products
// //           </h2>
// //           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
// //             {similarProducts.map((item) => (
// //               <Link
// //                 key={item.id}
// //                 to={`/accessories/${item.id}`}
// //                 state={item}
// //                 className="bg-gray-800/80 hover:bg-gray-700 rounded-2xl shadow-md overflow-hidden transition-transform hover:scale-105 duration-300"
// //               >
// //                 <img
// //                   src={item.image}
// //                   alt={item.name}
// //                   className="h-52 w-full object-contain p-4 bg-gray-900"
// //                 />
// //                 <div className="p-4">
// //                   <h3 className="text-lg font-semibold mb-1 truncate">
// //                     {item.name}
// //                   </h3>
// //                   <p className="text-blue-400 font-bold">
// //                     ₹{item.price?.toLocaleString()}
// //                   </p>
// //                 </div>
// //               </Link>
// //             ))}
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default AccessoryDetails;
import React, { useState } from "react";
import { useParams, useLocation, Link } from "react-router-dom";
import { accessories } from "../data/laptop";
import { X } from "lucide-react";

const AccessoryDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const accessoryFromState = location.state;
  const accessory =
    accessoryFromState || accessories.find((item) => item.id === parseInt(id));

  const [zoomedImage, setZoomedImage] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);

  if (!accessory) {
    return (
      <div className="w-screen h-screen flex flex-col items-center justify-center bg-black text-white">
        <h2 className="text-3xl font-bold text-red-500 mb-4">Accessory Not Found</h2>
        <Link to="/accessories" className="text-blue-400 underline">
          ← Back to Accessories
        </Link>
      </div>
    );
  }

  const similarProducts = accessories
    .filter(
      (item) => item.category === accessory.category && item.id !== accessory.id
    )
    .slice(0, 4);

  const handleBackdropClick = (e) => {
    if (e.target.id === "zoom-backdrop") {
      setZoomedImage(null);
    }
  };

  return (
    <div className="min-h-screen w-screen bg-gradient-to-br text-white overflow-x-hidden">
      {/* 🔙 Back Button */}
      <Link
        to="/accessories"
        className="absolute top-6 left-6 bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-full text-sm flex items-center gap-2 shadow-lg z-50"
      >
        ← Back
      </Link>

      {/* 🖼 Zoom Modal */}
      {zoomedImage && (
        <div
          id="zoom-backdrop"
          onClick={handleBackdropClick}
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
        >
          <img
            src={zoomedImage}
            alt="Zoomed"
            className="max-h-[90vh] max-w-[90vw] object-contain rounded-2xl"
          />
          <button
            onClick={() => setZoomedImage(null)}
            className="absolute top-6 right-6 bg-red-600 hover:bg-red-700 p-2 rounded-full"
          >
            <X size={22} />
          </button>
          
        </div>
      )}

      {/* 🌟 Main Product Section */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-10 px-6 md:px-16 py-20 max-w-7xl mx-auto">
        {/* 📸 Modern Image Gallery */}
        <div className="w-full lg:w-1/2 flex flex-col items-center">
          <div className="relative w-full bg-gray-900 rounded-2xl shadow-xl overflow-hidden">
            <img
              src={accessory.images?.[selectedImage] || accessory.image}
              alt={accessory.name}
              className="w-full h-[400px] sm:h-[500px] object-contain transition-all duration-500 ease-in-out hover:scale-[1.03] cursor-pointer"
              onClick={() => setZoomedImage(accessory.images?.[selectedImage] || accessory.image)}
            />
            <span className="absolute bottom-4 right-4 bg-black/70 text-sm text-gray-900 px-3 py-1 rounded-full">
              {selectedImage + 1} / {accessory.images?.length || 1}
            </span>
          </div>

          {/* Thumbnails */}
          <div className="flex gap-3 mt-5 overflow-x-auto scrollbar-hide w-full justify-center px-2">
            {(accessory.images || [accessory.image]).map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`${accessory.name}-${index}`}
                onClick={() => setSelectedImage(index)}
                className={`h-20 w-24 sm:h-24 sm:w-28 object-contain rounded-xl cursor-pointer border-2 transition-all duration-300 ${
                  selectedImage === index
                    ? "border-blue-500 scale-105"
                    : "border-transparent opacity-70 hover:opacity-100"
                }`}
              />
            ))}
          </div>
        </div>

        {/* 🧾 Product Details */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 ">{accessory.name}</h1>
          <p className="text-gray-900 text-lg mb-6 leading-relaxed">
            {accessory.description ||
              "Experience next-level performance and aesthetics with this high-quality accessory built for gamers and professionals alike."}
          </p>

          {/* 💰 Price Section */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-500 p-6 rounded-2xl shadow-lg mb-8 inline-block">
            <p className="text-xl text-gray-100 font-semibold">Price:</p>
            <p className="text-4xl font-extrabold text-white">
              ₹{accessory.price?.toLocaleString()}
            </p>
          </div>

          {/* ⚙️ Technical Specs */}
          <div className="bg-gray-800/80 p-6 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-semibold mb-4 border-b border-gray-700 pb-2">
              Technical Specifications
            </h3>
            {accessory.specs ? (
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-200">
                {Object.entries(accessory.specs).map(([key, value]) => (
                  <li key={key}>
                    <span className="text-gray-400">{key}:</span>{" "}
                    <strong className="text-white">{value}</strong>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-400">No specifications available.</p>
            )}
          </div>
        </div>
      </div>

      {/* 📘 About Product */}
      <div className="w-full px-6 md:px-16 py-14 bg-gray-100/50 border-t border-gray-100">
        <h2 className="text-3xl font-bold mb-4 border-b text-indigo-950 border-gray-900 pb-2">
          About the Product
        </h2>
        <p className="text-gray-900 text-lg leading-relaxed">
          {accessory.about ||
            "Built for professionals and gamers, this accessory combines durability, modern design, and premium quality to upgrade your setup."}
        </p>
      </div>

      {/* 🛍️ Similar Products */}
      {similarProducts.length > 0 && (
        <div className="w-full px-6 md:px-16 py-16 border-t border-gray-100">
          <h2 className="text-3xl font-bold mb-8 border-b text-black border-gray-700 pb-2">
            Similar Products
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {similarProducts.map((item) => (
              <Link
                key={item.id}
                to={`/accessories/${item.id}`}
                state={item}
                className="bg-gray-800 hover:bg-gray-700 rounded-2xl shadow-md overflow-hidden transition-transform hover:scale-105 duration-300"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-52 w-full object-contain p-4 bg-gray-900"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-1 truncate">
                    {item.name}
                  </h3>
                  <p className="text-blue-400 font-bold">
                    ₹{item.price?.toLocaleString()}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AccessoryDetails;
