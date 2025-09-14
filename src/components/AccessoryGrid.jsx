// import React, { useState, useEffect } from "react";

// const accessoriesData = [
//   {
//     id: 1,
//     name: "Mechanical Keyboard",
//     type: "Keyboard",
//     price: 2999,
//     image: "https://placehold.co/400x300?text=Keyboard",
//     desc: "RGB backlit mechanical keyboard for gaming and work.",
//   },
//   {
//     id: 2,
//     name: "Wireless Mouse",
//     type: "Mouse",
//     price: 1499,
//     image: "https://placehold.co/400x300?text=Mouse",
//     desc: "Ergonomic wireless mouse with fast response.",
//   },
//   {
//     id: 3,
//     name: "500GB SSD",
//     type: "SSD",
//     price: 3999,
//     image: "https://placehold.co/400x300?text=SSD",
//     desc: "High-speed solid state drive for faster performance.",
//   },
//   {
//     id: 4,
//     name: "Cooling Pad",
//     type: "Cooling",
//     price: 1299,
//     image: "https://placehold.co/400x300?text=Cooling+Pad",
//     desc: "Efficient cooling pad to keep your laptop cool.",
//   },
// ];

// export default function AccessoryGrid() {
//   const [accessories, setAccessories] = useState(accessoriesData);
//   const [filter, setFilter] = useState("");
//   const [sortBy, setSortBy] = useState("");

//   useEffect(() => {
//     let result = [...accessoriesData];

//     if (filter) {
//       result = result.filter((item) => item.type === filter);
//     }

//     if (sortBy === "low-high") {
//       result.sort((a, b) => a.price - b.price);
//     } else if (sortBy === "high-low") {
//       result.sort((a, b) => b.price - a.price);
//     }

//     setAccessories(result);
//   }, [filter, sortBy]);

//   return (
//     <div className="bg-gray-100 min-h-screen py-10 px-5 sm:px-10">
//       {/* Hero Section */}
//       <header className="text-center mb-10">
//         <h1 className="text-4xl font-extrabold text-gray-900">Laptop Accessories</h1>
//         <p className="mt-2 text-gray-600 text-lg">
//           Enhance your laptop experience with premium accessories.
//         </p>
//       </header>

//       {/* Filters */}
//       <div className="bg-white shadow-md rounded-lg p-4 flex flex-col md:flex-row gap-4 justify-between items-center mb-8">
//         <select
//           value={filter}
//           onChange={(e) => setFilter(e.target.value)}
//           className="p-3 rounded-lg border border-gray-300 bg-gray-50"
//         >
//           <option value="">All Categories</option>
//           <option value="Keyboard">Keyboard</option>
//           <option value="Mouse">Mouse</option>
//           <option value="SSD">SSD</option>
//           <option value="Cooling">Cooling</option>
//         </select>

//         <select
//           value={sortBy}
//           onChange={(e) => setSortBy(e.target.value)}
//           className="p-3 rounded-lg border border-gray-300 bg-gray-50"
//         >
//           <option value="">Sort by Price</option>
//           <option value="low-high">Low → High</option>
//           <option value="high-low">High → Low</option>
//         </select>
//       </div>

//       {/* Accessories Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//         {accessories.map((item) => (
//           <div
//             key={item.id}
//             className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 cursor-pointer"
//           >
//             <div className="h-48 flex items-center justify-center bg-gray-50 rounded-t-xl overflow-hidden">
//               <img
//                 src={item.image}
//                 alt={item.name}
//                 className="object-contain h-full w-full transition-transform duration-500 hover:scale-110"
//               />
//             </div>
//             <div className="p-4 flex flex-col">
//               <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
//               <p className="text-sm text-gray-500 mt-1">{item.desc}</p>
//               <div className="flex justify-between items-center mt-3">
//                 <p className="text-green-600 font-bold text-xl">₹{item.price}</p>
//                 <button className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
//                   Add to Cart
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
