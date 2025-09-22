import final from "../assets/final.mp4";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function HeroSection() {
  const navigate = useNavigate(); // ✅ Hook for navigation

  return (
    <section className="relative h-screen w-full flex flex-col justify-end items-center overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-contain md:object-cover"
        src={final}
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />

      {/* Hero Content */}
      <div className="relative z-10 text-center text-white px-6 mb-12">
        <h1 className="text-3xl md:text-5xl font-extrabold drop-shadow-lg">
          Computer Town
        </h1>
        <p className="mt-2 text-lg md:text-2xl font-medium">
          Your Trusted Laptop Destination
        </p>

        {/* Explore Laptops Button */}
        <button
          onClick={() => navigate("/all-laptops")} // ✅ Navigate to AllLaptopsPage
          className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl shadow-lg transition-all"
        >
          EXPLORE ALL LAPTOPS
        </button>
      </div>
    </section>
  );
}
