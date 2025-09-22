// import React, { useState } from "react";

// const FilterSidebar = ({ filters, setFilters }) => {
//   // Local state for price range
//   const [priceRange, setPriceRange] = useState([0, 200000]);

//   const handleCheckbox = (category, value) => {
//     setFilters((prev) => ({
//       ...prev,
//       [category]: prev[category].includes(value)
//         ? prev[category].filter((item) => item !== value)
//         : [...prev[category], value],
//     }));
//   };

//   return (
//     <div className="w-64 p-4 bg-white shadow-lg rounded-xl">
//       {/* Processor */}
//       <h2 className="font-bold mb-2">Processor</h2>
//       {["i3", "i5", "i7", "Ryzen 5", "Ryzen 7"].map((proc) => (
//         <label key={proc} className="block">
//           <input
//             type="checkbox"
//             checked={filters.processor.includes(proc)}
//             onChange={() => handleCheckbox("processor", proc)}
//           />{" "}
//           {proc}
//         </label>
//       ))}

//       {/* RAM */}
//       <h2 className="font-bold mt-4 mb-2">RAM</h2>
//       {["4GB DDR4", "8GB DDR4", "16GB DDR4"].map((ram) => (
//         <label key={ram} className="block">
//           <input
//             type="checkbox"
//             checked={filters.ram.includes(ram)}
//             onChange={() => handleCheckbox("ram", ram)}
//           />{" "}
//           {ram}
//         </label>
//       ))}

//       {/* Storage */}
//       <h2 className="font-bold mt-4 mb-2">Storage</h2>
//       {["256GB SSD ", "512GB SSD", "1TB SSD"].map((storage) => (
//         <label key={storage} className="block">
//           <input
//             type="checkbox"
//             checked={filters.storage.includes(storage)}
//             onChange={() => handleCheckbox("storage", storage)}
//           />{" "}
//           {storage}
//         </label>
//       ))}

//       {/* Touchscreen */}
//       <h2 className="font-bold mt-4 mb-2">Touchscreen</h2>
//       {["Touch", "Non-Touch"].map((type) => (
//         <label key={type} className="block">
//           <input
//             type="checkbox"
//             checked={filters.touchscreen.includes(type)}
//             onChange={() => handleCheckbox("touchscreen", type)}
//           />{" "}
//           {type}
//         </label>
//       ))}

//       {/* Price Range */}
//       <h2 className="font-bold mt-4 mb-2">Price</h2>
//       <input
//         type="range"
//         min="0"
//         max="200000"
//         step="1000"
//         value={priceRange[1]}
//         onChange={(e) => {
//           const newRange = [0, Number(e.target.value)];
//           setPriceRange(newRange);
//           setFilters((prev) => ({ ...prev, price: newRange }));
//         }}
//         className="w-full"
//       />
//       <p>Up to ₹{priceRange[1]}</p>
//     </div>
//   );
// };

// export default FilterSidebar;
