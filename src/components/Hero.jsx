import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import logoImg from "../assets/bgremoveimg.png";
import logoText from "../assets/bgremovetext.png";
import lappee1 from "../assets/lappee1.jpg";
import lappee3 from "../assets/lappee3.jpg";
import videoframe from "../assets/videoframe.png";

const Hero = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Laptops", path: "/all-laptops" },
    { name: "Services", path: "/#services" },
    { name: "Contact", path: "/#contact" },
    { name: "About", path: "/#about" },
  ];

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-[#eef2ff] via-[#fffbee] to-[#e0f7fa] max-h-screen overflow-hidden">
      {/* Top Gradient Welcome Banner */}
      <div className="absolute top-6 w-full text-center py-5 bg-gradient-to-r from-indigo-600 via-purple-400 to-pink-900 animate-pulse z-90 font-extrabold-800 ">
        <h2 className="text-lg sm:text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-white to-green-300 drop-shadow-lg ">
          Welcome to Computer Town 
        </h2>
      </div>

      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 w-full flex items-center justify-between px-4 md:px-16 lg:px-24 xl:px-32 transition-all duration-500 z-50 ${
          isScrolled
            ? "bg-white/80 shadow-md text-gray-700 backdrop-blur-lg py-3 md:py-4"
            : "bg-transparent py-5 md:py-6"
        }`}
      >
        {/* Logo */}
        <Link to="/" className="flex items-center gap-7 group">
          <img
            src={logoImg}
            alt="Computer Town Logo"
            className="h-9 transition-transform duration-300 group-hover:scale-110"
          />
          <img
            src={logoText}
            alt="Computer Town Text"
            className="h-9 hidden sm:block transition-transform duration-300 group-hover:scale-110"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6 lg:gap-10">
          {navLinks.map((link, i) =>
            link.path.includes("#") ? (
              <HashLink
                key={i}
                smooth
                to={link.path}
                className={`group flex flex-col gap-0.5 font-medium ${
                  isScrolled ? "text-gray-700" : "text-black"
                }`}
              >
                {link.name}
                <div
                  className={`${
                    isScrolled ? "bg-gray-700" : "bg-black"
                  } h-0.5 w-0 group-hover:w-full transition-all duration-300`}
                />
              </HashLink>
            ) : (
              <Link
                key={i}
                to={link.path}
                className={`group flex flex-col gap-0.5 font-medium ${
                  isScrolled ? "text-gray-700" : "text-black"
                }`}
              >
                {link.name}
                <div
                  className={`${
                    isScrolled ? "bg-gray-700" : "bg-black"
                  } h-0.5 w-0 group-hover:w-full transition-all duration-300`}
                />
              </Link>
            )
          )}

          <button className="border px-4 py-1 text-sm font-light rounded-full cursor-pointer hover:bg-indigo-100 transition">
            New Launch
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-3 md:hidden">
          <svg
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`h-6 w-6 cursor-pointer ${
              isScrolled ? "text-gray-800" : "text-black"
            }`}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <line x1="4" y1="6" x2="20" y2="6" />
            <line x1="4" y1="12" x2="20" y2="12" />
            <line x1="4" y1="18" x2="20" y2="18" />
          </svg>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 left-0 w-full h-screen bg-gradient-to-b from-white to-indigo-50 flex flex-col md:hidden items-center justify-center gap-6 text-gray-800 transition-all duration-500 ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <button
            className="absolute top-6 right-6"
            onClick={() => setIsMenuOpen(false)}
          >
            <svg
              className="h-7 w-7"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          {navLinks.map((link, i) =>
            link.path.includes("#") ? (
              <HashLink
                key={i}
                smooth
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className="text-xl font-medium hover:text-indigo-600"
              >
                {link.name}
              </HashLink>
            ) : (
              <Link
                key={i}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className="text-xl font-medium hover:text-indigo-600"
              >
                {link.name}
              </Link>
            )
          )}

          <button className="border px-6 py-2 text-base rounded-full hover:bg-indigo-100">
            New Launch
          </button>

          <button className="bg-indigo-600 text-white px-8 py-3 rounded-full hover:bg-indigo-700 transition">
            Login
          </button>
        </div>
      </nav>

      {/* Hero Content */}
      <main className="flex flex-col md:flex-row items-center max-md:text-center justify-between pt-40  pb-20 px-12 sm:px-10 md:px-5 max-w-6xl mx-auto w-full">
        <div className="flex flex-col items-center md:items-start animate-fadeIn">
          <h1 className="text-gray-900 font-bold text-3xl sm:text-4xl md:text-5xl max-w-xl">
            Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
              One-Stop Shop
            </span>{" "}
            for <br /> Laptops & Accessories
          </h1>
          <p className="mt-4 text-gray-700 max-w-md text-sm sm:text-base leading-relaxed">
            Find the latest laptops, top accessories, and reliable refurbished
            systems at unbeatable prices.
          </p>
          <div className="flex flex-col sm:flex-row items-center mt-8 gap-3">
            <Link
              to="/all-laptops"
              className="bg-indigo-600 text-white px-6 py-2.5 rounded-full text-sm font-medium flex items-center space-x-2 hover:bg-indigo-700 transition"
            >
              <span>Shop Now</span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.821 11.999h13.43m0 0-6.714-6.715m6.715 6.715-6.715 6.715"
                  stroke="#fff"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
            <Link
              to="/all-laptops"
              className="text-indigo-600 bg-indigo-100 px-5 py-2 rounded-full text-sm font-medium hover:bg-indigo-200 transition"
            >
              Explore Deals
            </Link>
          </div>
        </div>

        {/* Laptop Images with Hover Animations */}
        <div
          aria-label="Laptop showcase"
          className="mt-12 grid grid-cols-2 gap-6 pb-6 animate-slideUp"
        >
          {[
            "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=800&auto=format&fit=crop",
            
           lappee1,
           lappee3,

           videoframe,
          ].map((src, i) => (
            <img
              key={i}
              alt={`Laptop ${i + 1}`}
              className="w-36 sm:w-44 h-28 sm:h-32 rounded-lg hover:scale-105 transition duration-300 object-cover shadow-lg"
              src={src}
            />
          ))}
        </div>
      </main>
    </section>
  );
};

export default Hero;
