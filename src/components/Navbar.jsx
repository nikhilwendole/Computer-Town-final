// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { HashLink } from "react-router-hash-link";
// import logoImg from "../assets/bgremoveimg.png";
// import logoText from "../assets/bgremovetext.png";

// const Navbar = () => {
//   const navLinks = [
//     { name: "Home", path: "/" },
//     { name: "Laptops", path: "/all-laptops" },
//     { name: "Services", path: "/#services" }, // scroll to section
//     { name: "Contact", path: "/#contact" },
//     { name: "About", path: "/#about" },
//   ];

//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => setIsScrolled(window.scrollY > 50);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <nav
//       className={`fixed top-0 left-0 w-full flex items-center justify-between px-4 md:px-16 lg:px-24 xl:px-32 transition-all duration-500 z-50 ${
//         isScrolled
//           ? "bg-white/80 shadow-md text-gray-700 backdrop-blur-lg py-3 md:py-4"
//           : "bg-transparent py-4 md:py-6"
//       }`}
//     >
//       {/* Logo */}
//       <Link to="/" className="flex items-center gap-2 group">
//         <img
//           src={logoImg}
//           alt="Computer Town Logo"
//           className="h-9 transition-transform duration-300 group-hover:scale-110"
//         />
//         <img
//     src={logoText}
//     alt="Computer Town Text"
//     className="h-9 pl-7 sm:block transition-transform duration-300 group-hover:scale-110"
//   />
//       </Link>

//       {/* Desktop Nav */}
//       <div className="hidden md:flex items-center gap-4 lg:gap-9">
//         {navLinks.map((link, i) =>
//           link.path.includes("#") ? (
//             <HashLink
//               key={i}
//               smooth
//               to={link.path}
//               className={`group flex flex-col gap-0.5 font-medium ${
//                 isScrolled ? "text-gray-700" : "text-black"
//               }`}
//             >
//               {link.name}
//               <div
//                 className={`${
//                   isScrolled ? "bg-gray-700" : "bg-black"
//                 } h-0.5 w-0 group-hover:w-full transition-all duration-300`}
//               />
//             </HashLink>
//           ) : (
//             <Link
//               key={i}
//               to={link.path}
//               className={`group flex flex-col gap-0.5 font-medium ${
//                 isScrolled ? "text-gray-700" : "text-black"
//               }`}
//             >
//               {link.name}
//               <div
//                 className={`${
//                   isScrolled ? "bg-gray-700" : "bg-black"
//                 } h-0.5 w-0 group-hover:w-full transition-all duration-300`}
//               />
//             </Link>
//           )
//         )}

//         {/* <button className="border px-4 py-1 text-sm font-light rounded-full cursor-pointer transition-all">
//           New Launch
//         </button> */}
//       </div>

//       {/* Mobile Menu Button */}
//       <div className="flex items-center gap-3 md:hidden">
//         <svg
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//           className={`h-6 w-6 cursor-pointer  ${
//             isScrolled ? "text-gray-800" : "text-white"
//           }`}
//           fill="none"
//           stroke="currentColor"
//           strokeWidth="2"
//           viewBox="0 0 24 24"
//         >
//           <line x1="4" y1="6" x2="20" y2="6" />
//           <line x1="4" y1="12" x2="20" y2="12" />
//           <line x1="4" y1="18" x2="20" y2="18" />
//         </svg>
//       </div>

//       {/* Mobile Menu Items */}
//       <div
//         className={`fixed top-0 left-0 w-full h-screen bg-white flex flex-col md:hidden items-center justify-center gap-6 text-gray-800 transition-all duration-500 ${
//           isMenuOpen ? "translate-x-0" : "-translate-x-full"
//         }`}
//       >
//         <button
//           className="absolute top-4 right-4"
//           onClick={() => setIsMenuOpen(false)}
//         >
//           <svg
//             className="h-6 w-6"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             viewBox="0 0 24 24"
//           >
//             <line x1="18" y1="6" x2="6" y2="18" />
//             <line x1="6" y1="6" x2="18" y2="18" />
//           </svg>
//         </button>

//         {navLinks.map((link, i) =>
//           link.path.includes("#") ? (
//             <HashLink
//               key={i}
//               smooth
//               to={link.path}
//               onClick={() => setIsMenuOpen(false)}
//               className="text-lg"
//             >
//               {link.name}
//             </HashLink>
//           ) : (
//             <Link
//               key={i}
//               to={link.path}
//               onClick={() => setIsMenuOpen(false)}
//               className="text-lg"
//             >
//               {link.name}
//             </Link>
//           )
//         )}

//         {/* <button className="border px-4 py-1 text-sm font-light rounded-full">
//           New Launch
//         </button> */}

//         <button className="bg-black text-white px-8 py-2.5 rounded-full">
//           Login
//         </button>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;



import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import logoImg from "../assets/bgremoveimg.png";
import logoText from "../assets/bgremovetext.png";
import logotry from "../assets/logotry.png"

const Navbar = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Laptops", path: "/all-laptops" },
    { name: "Services", path: "/#services" },
    { name: "Contact", path: "/#contact" },
    { name: "About", path: "/#about" },
    { name: "Accessories", path: "/accessories" }, // ✅ fixed route
  ];

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full flex items-center justify-between 
      px-3 sm:px-6 md:px-10 lg:px-14 xl:px-20 
      transition-all duration-500 z-50 
      ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-md text-gray-800 py-2"
          : "bg-transparent text-black py-3"
      }`}
    >
      {/* Logo */}
      <Link to="/" className="flex items-center gap-9 group">
        <img
          src={logoImg}
          alt="Computer Town Logo"
          className="h-9 transition-transform duration-300 group-hover:scale-110"
        />
        <img
          src={logoText}
          alt="Computer Town Text"
          className="h-9 pl-9 sm:pl-9 transition-transform duration-300 group-hover:scale-110"
        />
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center justify-end flex-grow space-x-6 lg:space-x-8">
        {navLinks.map((link, i) =>
          link.path.includes("#") ? (
            <HashLink
              key={i}
              smooth
              to={link.path}
              className={`font-semibold text-sm lg:text-base uppercase tracking-wide relative px-3 py-2 rounded-md 
              ${
                isScrolled
                  ? "text-gray-900 hover:text-blue-600"
                  : "text-black hover:text-blue-600"
              } transition-all`}
            >
              {link.name}
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-600 group-hover:w-full transition-all duration-300"></span>
            </HashLink>
          ) : (
            <Link
              key={i}
              to={link.path}
              className={`font-semibold text-sm lg:text-base uppercase tracking-wide relative px-3 py-2 rounded-md 
              ${
                isScrolled
                  ? "text-gray-900 hover:text-blue-600"
                  : "text-black hover:text-blue-600"
              } transition-all`}
            >
              {link.name}
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
          )
        )}

        {/* Login Button */}
        {/* <button
          className="ml-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold px-5 py-2 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all"
        >
          Login
        </button> */}
      </div>

      {/* Mobile Menu Button */}
      <div className="flex items-center md:hidden">
        <svg
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`h-7 w-7 cursor-pointer ${
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
        className={`fixed top-0 left-0 w-full h-screen bg-white flex flex-col 
        md:hidden items-center justify-center gap-6 text-gray-800 
        transition-all duration-500 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          className="absolute top-5 right-5"
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
              className="text-xl font-bold uppercase hover:text-blue-600 transition-all"
            >
              {link.name}
            </HashLink>
          ) : (
            <Link
              key={i}
              to={link.path}
              onClick={() => setIsMenuOpen(false)}
              className="text-xl font-bold uppercase hover:text-blue-600 transition-all"
            >
              {link.name}
            </Link>
          )
        )}

        <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold px-10 py-3 rounded-full mt-4 hover:scale-105 hover:shadow-lg transition-all">
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
