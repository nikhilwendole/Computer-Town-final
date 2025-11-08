// import React, { useState, useEffect } from "react";

// const AddLaptop = () => {
//   const [laptopData, setLaptopData] = useState({
//     id: "",
//     name: "",
//     brand: "",
//     price: "",
//     specs: "",
//     image: "",
//   });

//   const [laptops, setLaptops] = useState([]);

//   Load saved laptops from localStorage when page loads
//   useEffect(() => {
//     const savedLaptops = JSON.parse(localStorage.getItem("laptops")) || [];
//     setLaptops(savedLaptops);
//   }, []);

//   Handle input change
//   const handleChange = (e) => {
//     setLaptopData({ ...laptopData, [e.target.name]: e.target.value });
//   };

//   Save laptop data to localStorage
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!laptopData.name || !laptopData.price || !laptopData.brand) {
//       alert("Please fill all required fields!");
//       return;
//     }

//     const newLaptop = { ...laptopData, id: Date.now() };
//     const updatedLaptops = [...laptops, newLaptop];

//     setLaptops(updatedLaptops);
//     localStorage.setItem("laptops", JSON.stringify(updatedLaptops));

//     alert("✅ Laptop added successfully!");
//     setLaptopData({ id: "", name: "", brand: "", price: "", specs: "", image: "" });
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-[#F5F7FF] via-[#fffbee] to-[#E6EFFF] py-10 px-4">
//       <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
//         🖥️ Add New Laptop
//       </h2>

//       <form
//         onSubmit={handleSubmit}
//         className="max-w-lg mx-auto bg-white p-6 rounded-2xl shadow-lg space-y-4"
//       >
//         <input
//           type="text"
//           name="name"
//           value={laptopData.name}
//           onChange={handleChange}
//           placeholder="Laptop Name"
//           className="w-full border rounded-lg p-2"
//           required
//         />

//         <input
//           type="text"
//           name="brand"
//           value={laptopData.brand}
//           onChange={handleChange}
//           placeholder="Brand (HP, Dell, Lenovo...)"
//           className="w-full border rounded-lg p-2"
//           required
//         />

//         <input
//           type="text"
//           name="price"
//           value={laptopData.price}
//           onChange={handleChange}
//           placeholder="Price (e.g., ₹45,000)"
//           className="w-full border rounded-lg p-2"
//           required
//         />

//         <textarea
//           name="specs"
//           value={laptopData.specs}
//           onChange={handleChange}
//           placeholder="Specifications (RAM, Storage, Processor...)"
//           className="w-full border rounded-lg p-2"
//         />

//         <input
//           type="text"
//           name="image"
//           value={laptopData.image}
//           onChange={handleChange}
//           placeholder="Image URL"
//           className="w-full border rounded-lg p-2"
//         />

//         <button
//           type="submit"
//           className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-2 rounded-lg font-semibold"
//         >
//           Add Laptop
//         </button>
//       </form>

//       {/* Display added laptops below */}
//       <div className="max-w-5xl mx-auto mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {laptops.map((lap) => (
//           <div
//             key={lap.id}
//             className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition"
//           >
//             <img
//               src={
//                 lap.image ||
//                 "https://placehold.co/300x200/e2e8f0/475569?text=No+Image"
//               }
//               alt={lap.name}
//               className="w-full h-32 object-contain mb-2"
//             />
//             <h3 className="font-semibold text-gray-800">{lap.name}</h3>
//             <p className="text-cyan-600 font-bold">{lap.price}</p>
//             <p className="text-sm text-gray-600">{lap.brand}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AddLaptop;
