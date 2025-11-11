// // import React, { useState } from "react";
// // import { motion } from "framer-motion";
// // import { useNavigate } from "react-router-dom";
// // import { accessories } from "../data/laptop"; // ✅ Import your accessories data

// // const Accessories = () => {
// //   const [selectedCategory, setSelectedCategory] = useState(null);
// //   const navigate = useNavigate();

// // //   const category = categories.find((c) => c.name === selectedCategory);
// //   const categories = [...new Set(accessories.map((item) => item.category))];


// //   const handleViewDetails = (item) => {
// //     navigate(`/accessories/${item.id}`, { state: item });
// //   };

// //   return (
// //     <div className="min-h-screen bg-gray-950 text-white p-6">
// //       {!selectedCategory ? (
// //         <>
// //           <h1 className="text-4xl font-bold text-center mb-8">Accessories</h1>
// //           <p className="text-center text-gray-400 mb-10">
// //             Choose a category to explore high-quality accessories for your setup
// //           </p>

// //           <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
// //             {categories.map((cat, index) => (
// //               <motion.div
// //                 key={index}
// //                 whileHover={{ scale: 1.05 }}
// //                 onClick={() => setSelectedCategory(cat.name)}
// //                 className="cursor-pointer"
// //               >
// //                 <div className="overflow-hidden rounded-2xl shadow-lg bg-gray-900 border border-gray-800 hover:shadow-2xl transition">
// //                   <img src={cat.image} alt={cat.name} className="h-56 w-full object-cover" />
// //                   <div className="p-6 text-center">
// //                     <h2 className="text-2xl font-bold mb-2">{cat.name}</h2>
// //                     <button className="mt-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg">
// //                       View Accessories
// //                     </button>
// //                   </div>
// //                 </div>
// //               </motion.div>
// //             ))}
// //           </div>
// //         </>
// //       ) : (
// //         <div className="max-w-6xl mx-auto">
// //           <button
// //             onClick={() => setSelectedCategory(null)}
// //             className="mb-6 flex items-center gap-2 bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg"
// //           >
// //             ⬅ Back
// //           </button>
// //           <h2 className="text-3xl font-bold mb-6 text-center">{selectedCategory}</h2>

// //           <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
// //             {category.items.map((item, i) => (
// //               <motion.div
// //                 key={i}
// //                 whileHover={{ scale: 1.05 }}
// //                 className="bg-gray-900 p-4 rounded-2xl shadow-md border border-gray-800"
// //               >
// //                 <img src={item.img} alt={item.name} className="w-full h-48 object-cover rounded-xl mb-4" />
// //                 <h3 className="text-xl font-semibold">{item.name}</h3>
// //                 <p className="text-gray-400 mt-1">₹{item.price.toLocaleString()}</p>
// //                 <button
// //                   onClick={() => handleViewDetails(item)}
// //                   className="mt-3 w-full bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg"
// //                 >
// //                   View Details
// //                 </button>
// //               </motion.div>
// //             ))}
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default Accessories;




// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { useNavigate } from "react-router-dom";
// import { accessories } from "../data/laptop"; // ✅ Import accessories data

// const Accessories = () => {
//   const [selectedCategory, setSelectedCategory] = useState(null);
//   const navigate = useNavigate();

//   // ✅ Define categories properly
//   const categories = [
//     {
//       name: "Gaming Accessories",
//       image: "/images/accessories/gaming-category.jpg",
//     },
//     {
//       name: "Computer Accessories",
//       image: "/images/accessories/computer-category.jpg",
//     },
//   ];

//   // ✅ Handle view details
//   const handleViewDetails = (item) => {
//     navigate(`/accessories/${item.id}`, { state: item });
//   };

//   // ✅ Filter items by selected category
//   const filteredAccessories = accessories.filter(
//     (item) => item.category === selectedCategory
//   );

//   return (
//     <div className="min-h-screen">
//       {!selectedCategory ? (
//         <>
//           <h1 className="text-4xl font-bold text-center mb-8">Accessories</h1>
//           <p className="text-center text-gray-400 mb-10">
//             Choose a category to explore high-quality accessories for your setup
//           </p>

//           <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
//             {categories.map((cat, index) => (
//               <motion.div
//                 key={index}
//                 whileHover={{ scale: 1.05 }}
//                 onClick={() => setSelectedCategory(cat.name)}
//                 className="cursor-pointer"
//               >
//                 <div className="overflow-hidden rounded-2xl shadow-lg  hover:shadow-2xl transition">
//                   <img
//                     src={cat.image}
//                     alt={cat.name}
//                     className="h-56 w-full object-cover"
//                   />
//                   <div className="p-6 text-center">
//                     <h2 className="text-2xl font-bold mb-2">{cat.name}</h2>
//                     <button className="mt-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg">
//                       View Accessories
//                     </button>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </>
//       ) : (
//         <div className="max-w-6xl mx-auto">
//           <button
//             onClick={() => setSelectedCategory(null)}
//             className="mb-6 flex items-center gap-2 bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg"
//           >
//             ⬅ Back
//           </button>
//           <h2 className="text-3xl font-bold mb-6 text-center">
//             {selectedCategory}
//           </h2>

//           <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {filteredAccessories.map((item, i) => (
//               <motion.div
//                 key={i}
//                 whileHover={{ scale: 1.05 }}
//                 className="bg-gray-900 p-4 rounded-2xl shadow-md border border-gray-800"
//               >
//                 <img
//                   src={
//                     item.image ||
//                     "https://via.placeholder.com/300x200?text=No+Image"
//                   }
//                   alt={item.name}
//                   className="w-full h-48 object-cover rounded-xl mb-4"
//                 />
//                 <h3 className="text-xl font-semibold">{item.name}</h3>
//                 <p className="text-gray-400 mt-1">
//                   ₹{item.price.toLocaleString()}
//                 </p>
//                 <button
//                   onClick={() => handleViewDetails(item)}
//                   className="mt-3 w-full bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg"
//                 >
//                   View Details
//                 </button>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Accessories;










import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { accessories } from "../data/laptop"; // ✅ Local data import

const Accessories = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const navigate = useNavigate();

  // ✅ Define main categories
  const categories = [
    {
      name: "Gaming Accessories",
      image: "/images/accessories/gaming-category.jpg",
      desc: "High-performance gear for ultimate gaming experience.",
    },
    {
      name: "Computer Accessories",
      image: "/images/accessories/computer-category.jpg",
      desc: "Essential peripherals and tools to boost productivity.",
    },
  ];

  // ✅ Filter items from local data
  const filteredAccessories = accessories.filter(
    (item) => item.category === selectedCategory
  );

  // ✅ Handle "View Details" navigation
  const handleViewDetails = (item) => {
    navigate(`/accessories/${item.id}`, { state: item });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b  text-white py-16 px-6">
      {!selectedCategory ? (
        <>
          {/* Header Section */}
          <div className="text-center mb-12">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"
            >
              Explore Accessories
            </motion.h1>
            <p className="text-gray-400 mt-3 text-lg">
              Choose a category to explore premium accessories for your setup.
            </p>
          </div>

          {/* Category Cards */}
          <div className="grid sm:grid-cols-2 gap-10 max-w-6xl mx-auto">
            {categories.map((cat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200 }}
                onClick={() => setSelectedCategory(cat.name)}
                className="cursor-pointer bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-blue-700/40 border border-gray-800 transition-all"
              >
                <div className="relative">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="h-60 w-full object-cover opacity-80 hover:opacity-100 transition"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <div className="p-6 text-center">
                  <h2 className="text-2xl font-bold text-blue-400">
                    {cat.name}
                  </h2>
                  <p className="text-gray-400 mt-2">{cat.desc}</p>
                  <button className="mt-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-purple-600 hover:to-blue-600 px-5 py-2 rounded-lg text-sm font-semibold transition">
                    View Accessories
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </>
      ) : (
        <>
          {/* Back Button */}
          <div className="max-w-6xl mx-auto">
            <button
              onClick={() => setSelectedCategory(null)}
              className="mb-8 bg-gray-800 hover:bg-gray-700 px-5 py-2 rounded-lg transition text-sm"
            >
              ⬅ Back to Categories
            </button>

            {/* Category Header */}
            <h2 className="text-3xl font-bold mb-8 text-center text-blue-400">
              {selectedCategory}
            </h2>

            {/* Products Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredAccessories.length > 0 ? (
                filteredAccessories.map((item, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.3 }}
                    className="bg-gray-900 border border-gray-800 p-5 rounded-2xl shadow-md hover:shadow-purple-700/30 transition-all"
                  >
                    <img
                      src={
                        item.image ||
                        "https://via.placeholder.com/300x200?text=No+Image"
                      }
                      alt={item.name}
                      className="w-full h-48 object-cover rounded-xl mb-4"
                    />
                    <h3 className="text-xl font-semibold text-gray-100">
                      {item.name}
                    </h3>
                    <p className="text-gray-400 mt-1">
                      ₹{item.price.toLocaleString()}
                    </p>
                    <button
                      onClick={() => handleViewDetails(item)}
                      className="mt-4 w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-purple-600 hover:to-blue-600 px-4 py-2 rounded-lg font-medium"
                    >
                      View Details
                    </button>
                  </motion.div>
                ))
              ) : (
                <p className="text-center text-gray-400 col-span-full">
                  No accessories found in this category.
                </p>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Accessories;





