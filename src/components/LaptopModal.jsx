

// import React, { useState, useEffect } from "react";

// const LaptopModal = ({ laptop, onClose }) => {
//   if (!laptop) return null;

//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   const {
//     name,
//     processor,
//     ram,
//     storage,
//     display,
//     gpu,
//     price,
//     images = [],
//     description,
//     battery,
//     ports,
//     os,
//     warranty,
//   } = laptop;

//   // Auto-slide images every 1.5s
//   useEffect(() => {
//     if (images.length <= 1) return;

//     const interval = setInterval(() => {
//       setCurrentImageIndex((prevIndex) =>
//         prevIndex === images.length - 1 ? 0 : prevIndex + 1
//       );
//     }, 1500);

//     return () => clearInterval(interval);
//   }, [images]);

//   const handleNextImage = () => {
//     setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };

//   const handlePrevImage = () => {
//     setCurrentImageIndex((prevIndex) =>
//       prevIndex === 0 ? images.length - 1 : prevIndex - 1
//     );
//   };

//   return (
//     // Backdrop with fade-in animation
//     <div className="fixed inset-0 backdrop-blur-lg bg-opacity-70 flex items-center justify-center z-50 p-4 transition-opacity duration-300 animate-scaleIn">
//       {/* Modal container with scale-in animation */}
//       <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-8 max-w-5xl w-full max-h-[90vh] overflow-y-auto transform transition-transform duration-300 animate-scaleIn relative">
//         {/* Close Button */}
//         <button
//           className="absolute top-4 right-4 text-gray-500 hover:text-gray-900 transition-colors duration-300 focus:outline-none"
//           onClick={onClose}
//         >
//           <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//           </svg>
//         </button>

//         <div className="grid md:grid-cols-2 gap-8 items-center md:gap-12">
//           {/* Image Gallery */}
//           <div className="relative overflow-hidden rounded-xl">
//             {images.length > 0 && (
//               <img
//                 key={currentImageIndex}
//                 src={images[currentImageIndex]}
//                 alt={name}
//                 className="w-full h-56 md:h-80 object-cover rounded-xl transition-all duration-700 ease-in-out animate-imageFade"
//               />
//             )}
//             {images.length > 1 && (
//               <>
//                 <button
//                   onClick={handlePrevImage}
//                   className="absolute top-1/2 left-4 transform -translate-y-1/2 p-2 rounded-full bg-gray-800/40 hover:bg-gray-800/60 transition-all text-white backdrop-blur-sm"
//                 >
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//                   </svg>
//                 </button>
//                 <button
//                   onClick={handleNextImage}
//                   className="absolute top-1/2 right-4 transform -translate-y-1/2 p-2 rounded-full bg-gray-800/40 hover:bg-gray-800/60 transition-all text-white backdrop-blur-sm"
//                 >
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                   </svg>
//                 </button>
//               </>
//             )}
//           </div>

//           {/* Product Details */}
//           <div className="flex flex-col">
//             <h2 className="text-3xl md:text-4xl font-extrabold mb-2 text-gray-900 leading-tight">{name}</h2>
//             <p className="text-4xl md:text-5xl font-extrabold text-green-600 mb-6">{price}</p>

//             <p className="text-gray-600 mb-6 leading-relaxed text-sm md:text-base">{description}</p>

//             <div className="grid grid-cols-2 gap-x-4 gap-y-3 text-sm text-gray-700">
//               <p><span className="font-semibold text-gray-900">Processor:</span> {processor}</p>
//               <p><span className="font-semibold text-gray-900">RAM:</span> {ram}</p>
//               <p><span className="font-semibold text-gray-900">Storage:</span> {storage}</p>
//               <p><span className="font-semibold text-gray-900">Display:</span> {display}</p>
//               <p><span className="font-semibold text-gray-900">GPU:</span> {gpu}</p>
//               <p><span className="font-semibold text-gray-900">OS:</span> {os}</p>
//               <p><span className="font-semibold text-gray-900">Battery:</span> {battery}</p>
//               <p><span className="font-semibold text-gray-900">Ports:</span> {ports}</p>
//             </div>

//             <div className="mt-6 text-sm text-gray-500 border-t border-gray-200 pt-4">
//               <p><span className="font-semibold text-gray-700">Warranty:</span> {warranty}</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LaptopModal;
