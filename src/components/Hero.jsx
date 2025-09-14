// // 


// import React from "react";
// import { motion } from "framer-motion";
// import { useNavigate } from "react-router-dom"; // ✅ FIX: Import useNavigate

// const videoSrc = "/new2.mp4";

// const HeroSection = () => {
//   const navigate = useNavigate();

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.5 },
//     },
//   };

//   const textVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.8, ease: "easeOut" },
//     },
//   };

//   const buttonVariants = {
//     hidden: { opacity: 0, scale: 0.8 },
//     visible: {
//       opacity: 1,
//       scale: 1,
//       transition: { duration: 0.6, ease: "easeOut" },
//     },
//   };

//   return (
//     <div className="relative  h-screen overflow-hidden">
//       {/* ✅ Background Video */}
//       <video
//         autoPlay
//         loop
//         muted
//         playsInline
//         className="absolute top-1/2 left-1/2 min-w-full min-h-full -translate-x-1/2 -translate-y-1/2 object-cover z-[-1]"
//       >
//         <source src={videoSrc} type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>

//       {/* ✅ Dark Overlay */}
//       <div className="absolute inset-0 bg-black opacity-20 z-[-1]"></div>

//       {/* ✅ Content */}
//       <motion.div
//         className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white p-5"
//         variants={containerVariants}
//         initial="hidden"
//         animate="visible"
//       >
//         <motion.h1
//           className="text-4xl font-bold leading-tight md:text-5xl lg:text-7xl drop-shadow-lg"
//           variants={textVariants}
//         >
//           Quality Refurbished Laptops
//         </motion.h1>

//         <motion.p
//           className="mt-4 text-base md:text-xl lg:text-2xl max-w-3xl drop-shadow-md"
//           variants={textVariants}
//         >
//           {/* Find your perfect device at an unbeatable price. All our laptops are
//           professionally refurbished and certified for top performance. */}
//         </motion.p>

//         {/* ✅ Navigate to All Laptops Page */}
//         <motion.button
//             onClick={() => navigate("/all-laptops")}
//             className="mt-8 px-8 py-4 text-white font-semibold rounded-full bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300"
//             variants={buttonVariants}
//             initial="rest"
//             whileHover="hover"
//             whileTap="tap"
//         >
//             Explore Now
//         </motion.button>
        
//       </motion.div>
//     </div>
//   );
// };

// export default HeroSection;


import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";


import images from "../assets/image1.png";
import images2 from "../assets/image2.jpg";
import dell1 from "../assets/dell1.jpg";
import dell2 from "../assets/dell3.jpg";
import dell3 from "../assets/dell2.jpg";
// Use a local image if you have one, or a public URL for a placeholder
const heroImages = [
  images,images2,dell1,dell2,dell3
];

const HeroSection = () => {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Animate image every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.5 },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background Images */}
      {heroImages.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Laptop showcase ${index + 1}`}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
            index === currentImageIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-40 z-10"></div>

      {/* Content */}
      <motion.div
        className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white p-5"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-4xl font-bold leading-tight md:text-5xl lg:text-7xl drop-shadow-lg"
          variants={textVariants}
        >
          Quality Refurbished Laptops
        </motion.h1>

        <motion.p
          className="mt-4 text-base md:text-xl lg:text-2xl max-w-3xl drop-shadow-md"
          variants={textVariants}
        >
          Find your perfect device at an unbeatable price. All our laptops are
          professionally refurbished and certified for top performance.
        </motion.p>

        <motion.button
          onClick={() => navigate("/all-laptops")}
          className="mt-8 px-8 py-4 text-white font-semibold rounded-full bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
          variants={buttonVariants}
        >
          Explore Now
        </motion.button>
      </motion.div>
    </div>
  );
};

export default HeroSection;