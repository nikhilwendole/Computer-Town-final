


import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import hero1 from "../assets/imp (1) (1).jpg"
import hero2 from "../assets/imp (2) (1).jpg"
import hero3 from "../assets/imp (3) (1).jpg"
import hero4 from "../assets/imp (4) (1).jpg"
import hero5 from "../assets/imp (5) (1).jpg"




const images = [
  hero1,hero2,hero3,hero4,hero5

];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  // Auto change image every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[110vh] sm:h-[105vh] flex items-center  overflow-hidden">
    {/* // <div className="relative w-full h-[110vh] sm:h-[110vh] flex items-center justify-center bg-gray-100"> */}

      {/* Image Slider */}
      <div
        className="flex transition-transform duration-[2000ms] ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((src, index) => (
          <div key={index} className="w-full flex-shrink-0 h-[100vh] relative">
            <img
              src={src}
              alt={`slide-${index}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/80"></div>
          </div>
        ))}
      </div>

      {/* Text Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center  text-white px-6">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 animate-fadeInUp drop-shadow-lg ">
    WELCOME TO THE COMPUTER TOWN
        </h1>
        <p className="text-base sm:text-lg md:text-xl mb-6 animate-fadeInUp delay-200 opacity-90">
         “Your Trusted Destination for Premium Laptops.”
        </p>
        <button
          onClick={() => navigate("/all-laptops")}
          className="px-6 py-2 sm:px-8 sm:py-3 bg-white text-black font-semibold rounded-full shadow-lg hover:scale-105 hover:bg-gray-200 transition-transform duration-300 animate-fadeInUp delay-300"
        >
          Shop Now
        </button>
      </div>

      {/* Slide Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <div
            key={i}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-500 ${
              current === i ? "bg-white scale-125" : "bg-white/40"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
