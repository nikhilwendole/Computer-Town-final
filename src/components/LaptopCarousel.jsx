// import React, { useEffect, useRef, useState } from "react";
// import laptops from "../data/laptop";
// import { useNavigate } from "react-router-dom";

// const LaptopCarousel = () => {
//   const scrollRef = useRef(null);
//   const [isPaused, setIsPaused] = useState(false);
//   const navigate = useNavigate();

//   // 🌀 Infinite Auto Scroll
//   useEffect(() => {
//     const scroll = () => {
//       if (!isPaused && scrollRef.current) {
//         scrollRef.current.scrollBy({ left: 1, behavior: "smooth" });

//         if (
//           scrollRef.current.scrollLeft + scrollRef.current.clientWidth >=
//           scrollRef.current.scrollWidth
//         ) {
//           scrollRef.current.scrollLeft = 0;
//         }
//       }
//     };

//     const interval = setInterval(scroll, 20);
//     return () => clearInterval(interval);
//   }, [isPaused]);

//   // ⏸️ Manual Scroll + Pause 5s
//   const handleManualScroll = (direction) => {
//     setIsPaused(true);

//     if (scrollRef.current) {
//       scrollRef.current.scrollBy({
//         left: direction === "left" ? -400 : 400,
//         behavior: "smooth",
//       });
//     }

//     setTimeout(() => setIsPaused(false), 5000);
//   };

//   // 🧭 Navigate + Scroll to top
//   const handleCardClick = (id) => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//     navigate(`/product/${id}`);
//   };

//   return (
//  <div className="relative w-full bg-gradient-to-b from-[#F5F7FF] via-[#fffbee] to-[#E6EFFF] text-gray-800 py-12 overflow-hidden">
//       <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-gray-900 text-4xl font-extrabold mb-10 text-center drop-shadow-lg tracking-wide">
//         💻 Explore Our Premium Laptops
//       </h2>


//       {/* Left Button */}
//       <button
//         onClick={() => handleManualScroll("left")}
//         className="absolute left-4 top-1/2 -translate-y-1/2 backdrop-blur-lg bg-white/10 hover:bg-white/20 text-cyan-400 hover:text-white border border-cyan-500/50 rounded-full p-3 z-10 shadow-[0_0_15px_#06b6d4] transition-all duration-300"
//       >
//         ◀
//       </button>

//       {/* Scroll Container */}
//       <div
//         ref={scrollRef}
//         className="flex overflow-x-scroll scrollbar-hide space-x-8 px-10"
//       >
//         {[...laptops, ...laptops].map((laptop, index) => (
//           <div
//             key={`${laptop.id}-${index}`}
//             onClick={() => handleCardClick(laptop.id)}
//             className="min-w-[280px] bg-white/10 backdrop-blur-md border border-white/20 hover:border-cyan-400/40 rounded-2xl shadow-lg hover:shadow-[0_0_25px_#06b6d4] transition-all duration-500 cursor-pointer overflow-hidden transform hover:scale-105 hover:-translate-y-2"
//           >
//             <div className="relative">
//               {/* 🖼️ Image */}
//               <img
//                 src={
//                   Array.isArray(laptop.images) && laptop.images.length > 0
//                     ? laptop.images[0]
//                     : "https://via.placeholder.com/300x200?text=No+Image"
//                 }
//                 alt={laptop.name}
//                 className="w-full h-52 object-cover transition-transform duration-500 hover:scale-110"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
//             </div>

//             {/* 🧾 Laptop Info */}
//             <div className="p-5 text-center text-white">
//               <h3 className="text-xl font-semibold text-cyan-300 mb-1">
//                 {laptop.name}
//               </h3>
//               <p className="text-gray-300 text-sm line-clamp-2">
//                 {laptop.description}
//               </p>
//               <p className="mt-3 text-lg font-bold text-cyan-400">
//                 {laptop.price}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Right Button */}
//       <button
//         onClick={() => handleManualScroll("right")}
//         className="absolute right-4 top-1/2 -translate-y-1/2 backdrop-blur-lg bg-white/10 hover:bg-white/20 text-cyan-400 hover:text-white border border-cyan-500/50 rounded-full p-3 z-10 shadow-[0_0_15px_#06b6d4] transition-all duration-300"
//       >
//         ▶
//       </button>
//     </div>
//   );
// };

// export default LaptopCarousel;
import React, { useEffect, useRef, useState } from "react";
import laptops from "../data/laptop";
import { useNavigate } from "react-router-dom";

const LaptopCarousel = () => {
  const scrollRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const navigate = useNavigate();

  // 🌀 Infinite Auto Scroll
  useEffect(() => {
    const scroll = () => {
      if (!isPaused && scrollRef.current) {
        scrollRef.current.scrollBy({ left: 1, behavior: "smooth" });

        if (
          scrollRef.current.scrollLeft + scrollRef.current.clientWidth >=
          scrollRef.current.scrollWidth
        ) {
          scrollRef.current.scrollLeft = 0;
        }
      }
    };

    const interval = setInterval(scroll, 20);
    return () => clearInterval(interval);
  }, [isPaused]);

  // ⏸️ Manual Scroll + Pause
  const handleManualScroll = (direction) => {
    setIsPaused(true);
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -400 : 400,
        behavior: "smooth",
      });
    }
    setTimeout(() => setIsPaused(false), 5000);
  };

  // 🧭 Navigate
  const handleCardClick = (id) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate(`/product/${id}`);
  };

  // 🎬 Parallax tilt
  const handleMouseMove = (e, index) => {
    const card = document.getElementById(`card-${index}`);
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    card.style.transform = `rotateY(${x / 25}deg) rotateX(${-y / 25}deg) scale(1.05)`;
  };

  const handleMouseLeave = (index) => {
    const card = document.getElementById(`card-${index}`);
    card.style.transform = "rotateY(0deg) rotateX(0deg) scale(1)";
  };

  return (
    <div className="relative w-full bg-gradient-to-b from-[#F5F7FF] via-[#fffbee] to-[#E6EFFF] text-gray-800 py-16 overflow-hidden">
      {/* 🌈 Glow Background */}
      <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_top_right,_#a5f3fc_0%,_transparent_60%)]"></div>

      <h2 className="relative text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-blue-400 text-5xl font-extrabold mb-12 text-center drop-shadow-xl tracking-wide z-10">
        💻 Explore Our Premium Laptops
      </h2>

      {/* Left Button */}
      <button
        onClick={() => handleManualScroll("left")}
        className="absolute left-6 top-1/2 -translate-y-1/2 backdrop-blur-xl bg-white/20 hover:bg-white/30 text-cyan-500 hover:text-gray-300 border border-cyan-400/40 rounded-full p-4 z-20 shadow-[0_0_25px_#06b6d4] transition-all duration-300"
      >
        ◀
      </button>

      {/* Scroll Container */}
      <div
        ref={scrollRef}
        className="relative flex overflow-x-scroll scrollbar-hide space-x-10 px-12 perspective-[1200px]"
      >
        {[...laptops, ...laptops].map((laptop, index) => (
          <div
            id={`card-${index}`}
            key={`${laptop.id}-${index}`}
            onClick={() => handleCardClick(laptop.id)}
            onMouseMove={(e) => handleMouseMove(e, index)}
            onMouseLeave={() => handleMouseLeave(index)}
            className="min-w-[280px] bg-white/10 backdrop-blur-lg border border-white/20 hover:border-gray-400/50 rounded-2xl shadow-lg hover:shadow-[0_0_35px_#06b6d4] transition-all duration-500 cursor-pointer overflow-hidden transform-gpu"
            style={{
              transformStyle: "preserve-3d",
              transition: "transform 9.3s ease",
            }}
          >
            <div className="relative">
              {/* 🖼️ Image */}
              <img
                src={
                  Array.isArray(laptop.images) && laptop.images.length > 0
                    ? laptop.images[0]
                    : "https://via.placeholder.com/300x200?text=No+Image"
                }
                alt={laptop.name}
                className="w-full h-56 object-cover transition-transform duration-500 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
            </div>

            {/* 🧾 Laptop Info */}
            <div className="p-5 text-center text-white">
              <h3 className="text-xl font-semibold text-gray-900 mb-1">
                {laptop.name}
              </h3>
              <p className="text-gray-700 text-sm line-clamp-2">
                {laptop.description}
              </p>
              <p className="mt-3 text-lg font-bold text-gray-900">
                {laptop.price}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Right Button */}
      <button
        onClick={() => handleManualScroll("right")}
        className="absolute right-6 top-1/2 -translate-y-1/2 backdrop-blur-xl bg-white/20 hover:bg-white/30 text-cyan-500 hover:text-cyan-300 border border-cyan-400/40 rounded-full p-4 z-20 shadow-[0_0_25px_#06b6d4] transition-all duration-300"
      >
        ▶
      </button>

      {/* 🌫️ Cinematic Overlay */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#E6EFFF] to-transparent pointer-events-none"></div>
    </div>
  );
};

export default LaptopCarousel;
