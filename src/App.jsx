


// import React, { Suspense, lazy } from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Outlet,
//   useLocation,
// } from "react-router-dom";
// import { AnimatePresence, motion } from "framer-motion";

// // Components
// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import BrandSelector from "./components/BrandSelector";
// import Services from "./components/Services";
// import Contact from "./components/Contact";
// import AboutCard from "./components/AboutCard";
// import LaptopCarousel from "./components/LaptopCarousel";
// import AddLaptop from "./components/AddLaptop";  // ✅ Path to AddLaptop.jsx


// // Lazy-loaded Pages
// const BrandProducts = lazy(() => import("./components/BrandProducts"));
// const AllLaptopsPage = lazy(() => import("./components/AllLaptopsPage"));
// const ProductDetails = lazy(() => import("./pages/ProductDetails"));

// // ✅ NEW: Admin-related pages
// const AdminLogin = lazy(() => import("./pages/AdminLogin"));
// const AdminDashboard = lazy(() => import("./pages/AdminDashboard"));

// // Scroll Animation Wrapper (global)
// const ScrollAnimationWrapper = ({ children, delay = 0 }) => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 50 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.8, delay }}
//     >
//       {children}
//     </motion.div>
//   );
// };

// export default function App() {
//   return (
//     <Router>
//       <AnimatePresence mode="wait">
//         <Routes>
//           <Route path="/" element={<Layout />}>
//             {/* 🏠 Home Page */}
//             <Route
//               index
//               element={
//                 <>
//                   <Hero />
//                       <ScrollAnimationWrapper delay={0.2}>
//                     {/* ✅ Fetch all laptops from backend */}
//                     {/* <AllLaptopsPage /> */}
                 
//                  <LaptopCarousel/>
//                   <ScrollAnimationWrapper delay={0.2}>
//                     <BrandSelector />
//                   </ScrollAnimationWrapper>
//                   <ScrollAnimationWrapper delay={0.3}>
//                     <Services />
//                   </ScrollAnimationWrapper>
//                   <ScrollAnimationWrapper delay={0.3}>
//                     <Contact />
//                   </ScrollAnimationWrapper>
              
//                   </ScrollAnimationWrapper>
//                 </>
//               }
//             />

//             {/* 💻 All Laptops Page */}
//             <Route
//               path="all-laptops"
//               element={
//                 <Suspense fallback={<p className="text-center pt-20">Loading...</p>}>
//                   <ScrollAnimationWrapper>
//                     <AllLaptopsPage />
//                   </ScrollAnimationWrapper>
//                 </Suspense>
//               }
//             />

//             {/* 🏷 Brand Products Page */}
//             <Route
//               path="products/:brand"
//               element={
//                 <Suspense fallback={<p className="text-center pt-20">Loading...</p>}>
//                   <ScrollAnimationWrapper>
//                     <BrandProducts />
//                   </ScrollAnimationWrapper>
//                 </Suspense>
//               }
//             />

//             {/* 📄 Product Details Page */}
//             <Route
//               path="product/:id"
//               element={
//                 <Suspense fallback={<p className="text-center pt-20">Loading...</p>}>
//                   <ScrollAnimationWrapper>
//                     <ProductDetails />
//                   </ScrollAnimationWrapper>
//                 </Suspense>
//               }
//             />

//             {/* 🔑 Admin Login Page */}
//             <Route
//               path="admin/login"
//               element={
//                 <Suspense fallback={<p className="text-center pt-20">Loading...</p>}>
//                   <AdminLogin />
//                 </Suspense>
//               }
//             />
//              <main className="flex-grow">
//           <Routes>
           
//             <Route path="/add-laptop" element={<AddLaptop />} />
//           </Routes>
//         </main>

//             {/* 📊 Admin Dashboard Page */}
//             <Route
//               path="admin/dashboard"
//               element={
//                 <Suspense fallback={<p className="text-center pt-20">Loading...</p>}>
//                   <AdminDashboard />
//                 </Suspense>
//               }
//             />
//           </Route>
//         </Routes>
//       </AnimatePresence>
//     </Router>
//   );
// }

// // Layout Component with conditional Navbar
// function Layout() {
//   const location = useLocation();

//   // ✅ Navbar only hides on home page
//   const showNavbar = location.pathname !== "/";

//   return (
//     <>
//       { <Navbar />}

//       <main className="pt-18 px-2">
//         <Outlet />
//       </main>

//       {/* ✅ About Card stays globally */}
//       <AboutCard />
      
//     </>
    
//   );
// }





















import React, { Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
  useLocation,
} from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

// Components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BrandSelector from "./components/BrandSelector";
import Services from "./components/Services";
import Contact from "./components/Contact";
import AboutCard from "./components/AboutCard";
import LaptopCarousel from "./components/LaptopCarousel";
// import AddLaptop from "./components/AddLaptop"; // ✅ AddLaptop page

// Lazy-loaded Pages
const BrandProducts = lazy(() => import("./components/BrandProducts"));
const AllLaptopsPage = lazy(() => import("./components/AllLaptopsPage"));
const ProductDetails = lazy(() => import("./pages/ProductDetails"));
const AdminLogin = lazy(() => import("./pages/AdminLogin"));
const AdminDashboard = lazy(() => import("./pages/AdminDashboard"));

// Animation Wrapper
const ScrollAnimationWrapper = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay }}
  >
    {children}
  </motion.div>
);

export default function App() {
  return (
    <Router>
      <AnimatePresence mode="wait">
        <Routes>
          {/* 🏠 Base Layout */}
          <Route path="/" element={<Layout />}>
            {/* Home Page */}
            <Route
              index
              element={
                <>
                  <Hero />
                  <ScrollAnimationWrapper delay={0.2}>
                    <LaptopCarousel />
                    <BrandSelector />
                    <Services />
                    <Contact />
                  </ScrollAnimationWrapper>
                </>
              }
            />

            {/* 💻 All Laptops */}
            <Route
              path="all-laptops"
              element={
                <Suspense fallback={<p className="text-center pt-20">Loading...</p>}>
                  <ScrollAnimationWrapper>
                    <AllLaptopsPage />
                  </ScrollAnimationWrapper>
                </Suspense>
              }
            />

            {/* 🏷 Brand Products */}
            <Route
              path="products/:brand"
              element={
                <Suspense fallback={<p className="text-center pt-20">Loading...</p>}>
                  <ScrollAnimationWrapper>
                    <BrandProducts />
                  </ScrollAnimationWrapper>
                </Suspense>
              }
            />

            {/* 📄 Product Details */}
            <Route
              path="product/:id"
              element={
                <Suspense fallback={<p className="text-center pt-20">Loading...</p>}>
                  <ScrollAnimationWrapper>
                    <ProductDetails />
                  </ScrollAnimationWrapper>
                </Suspense>
              }
            />

            {/* ➕ Add Laptop (Local Storage Form)
            <Route path="add-laptop" element={<AddLaptop />} />

            {/* 🔑 Admin Login */}
            {/* <Route
              path="admin/login"
              element={
                <Suspense fallback={<p className="text-center pt-20">Loading...</p>}>
                  <AdminLogin />
                </Suspense>
              } */}
           

            {/* 📊 Admin Dashboard */}
            <Route
              path="admin/dashboard"
              element={
                <Suspense fallback={<p className="text-center pt-20">Loading...</p>}>
                  <AdminDashboard />
                </Suspense>
              }
            />
          </Route>
        </Routes>
      </AnimatePresence>
    </Router>
  );
}

// ✅ Layout with Navbar and AboutCard
function Layout() {
  const location = useLocation();
  const showNavbar = location.pathname !== "/";

  return (
    <>
      {  <Navbar />}

      <main className="pt-18 px-2">
        <Outlet />
      </main>

      <AboutCard />
    </>
  );
}
