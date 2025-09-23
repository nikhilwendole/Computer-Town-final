// import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";

// import Navbar from "./components/Navbar";
// //import Footer from "./components/Footer";
// import Hero from "./components/Hero";
// import BrandSelector from "./components/BrandSelector";
// import BrandProducts from "./components/BrandProducts";
// //import LaptopDetailModal from "./components/LaptopDetailModal";
// // import LaptopGallery from "./components/LaptopGallery";
// import Services from "./components/Services";
// import Contact from "./components/Contact";
// import AccessoryGrid from "./components/AccessoryGrid";
// import AboutCard from "./components/AboutCard";
// // import LaptopComparison from "./components/LaptopComparison ";
// //import ReviewsSection from "./components/ReviewSection";
// import AllLaptopsPage from "./pages/AllLaptopsPage";

// // ✅ Layout Component (Navbar + Footer)


// export default function App() {
//   return (
//     <Router>
//       <Routes>
//         {/* Layout Route */}
//         <Route path="/" element={<Layout />}>
//           {/* ✅ Home Page */}
//           <Route
//             index
//             element={
//               <>
//                 <Hero />
//                 <BrandSelector />
//                 {/* <LaptopGallery /> */}
//                 <Services />
//                 <Contact />
//               </>
//             }
            
//           />

//           {/* ✅ Products Page */}
//           <Route path="products/:brand" element={<BrandProducts />} />

//           {/* ✅ Laptop Details Page */}
//           {/* <Route path="laptop/:id" element={<LaptopDetailModal />} /> */}

//           {/* ✅ Accessories Page */}
//           <Route path="accessories" element={<AccessoryGrid />} />
//         </Route>
      
//       </Routes>
//     </Router>
    
//   );
 
// }
// function Layout() {
//   return (
//     <>
//       <Navbar />
//       <Outlet /> 
//        <AboutCard/>
//        {/* <Footer/> */}
//        {/* <LaptopComparison/> */}
//       {/* <ReviewsSection/> */}
//     </>
//   );
// }


// import React from "react";
// import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";

// // Components
// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import BrandSelector from "./components/BrandSelector";
// import BrandProducts from "./components/BrandProducts";
// import AllLaptopsPage from "./components/AllLaptopsPage";
// import ProductDetails from "./pages/ProductDetails";
// import Services from "./components/Services";
// import Contact from "./components/Contact";
// import AccessoryGrid from "./components/AccessoryGrid";
// import AboutCard from "./components/AboutCard";

// export default function App() {
//   return (
//     <Router>
//       <Routes>
//         {/* Layout Route */}
//         <Route path="/" element={<Layout />}>

//           {/* Home Page */}
//           <Route
//             index
//             element={
//               <>
//                 <Hero />            {/* Hero section with Explore Now button */}
//                 <BrandSelector />   {/* Brand buttons */}
//                 <Services />        {/* Services Section */}
//                 <Contact />         {/* Contact Section */}
//               </>
//             }
//           />

//           {/* All Laptops Page */}
//        <Route path="all-laptops" element={<AllLaptopsPage />} />

//           {/* Brand Products Page */}
//           <Route path="products/:brand" element={<BrandProducts />} />

//           {/* Product Details Page */}
//           <Route path="product/:id" element={<ProductDetails />} />

//           {/* Accessories Page */}
//           <Route path="accessories" element={<AccessoryGrid />} />

//         </Route>
//       </Routes>
//     </Router>
//   );
// }

// // Layout Component with Navbar + Outlet + AboutCard
// function Layout() {
//   return (
//     <>
//       <Navbar />
//       <main className="pt-18 px-2">
//         <Outlet />
//       </main>
//       <AboutCard />
//       {/* Future components like Footer, Reviews can be added here */}
//     </>
//   );
// }


// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import Navbar from "./components/Navbar";
// import HomePage from "./pages/HomePage";
// import BrandProducts from "./components/BrandProducts";
// import ProductDetails from "./pages/ProductDetails";

// export default function App() {
//   return (
//     <Router>
//       {/* Navbar always visible */}
//       <Navbar />

//       <Routes>
//         {/* Home page */}
//         <Route path="/" element={<HomePage />} />

//         {/* Brand Products */}
//         <Route path="/products/:brand" element={<BrandProducts />} />

//         {/* All Laptops */}
//         <Route path="/all-laptops" element={<BrandProducts />} />

//         {/* Product Details */}
//         <Route path="/product/:id" element={<ProductDetails />} />
//       </Routes>
//     </Router>
//   );
// }



// import React, { Suspense, lazy } from "react";
// import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";

// // Components
// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import BrandSelector from "./components/BrandSelector";
// import Services from "./components/Services";
// import Contact from "./components/Contact";
// import AboutCard from "./components/AboutCard";
// import { AnimatePresence } from "framer-motion";

// // Lazy-loaded Pages
// const BrandProducts = lazy(() => import("./components/BrandProducts"));
// const AllLaptopsPage = lazy(() => import("./components/AllLaptopsPage"));
// const ProductDetails = lazy(() => import("./pages/ProductDetails"));
// const AccessoryGrid = lazy(() => import("./components/AccessoryGrid"));

// export default function App() {
//   return (
//     <Router>
//       <AnimatePresence mode="wait">
//       <Routes>
//         {/* Layout Route */}
//         <Route path="/" element={<Layout />}>
          
//           {/* Home Page */}
//           <Route
//             index
//             element={
//               <>
//                 <Hero />            {/* Hero section with Explore Now button */}
//                 <BrandSelector />   {/* Brand buttons */}
//                 <Services />        {/* Services Section */}
//                 <Contact />         {/* Contact Section */}
//               </>
//             }
//           />

//           {/* All Laptops Page */}
//           <Route
//             path="all-laptops"
//             element={
//               <Suspense fallback={<p className="text-center pt-20">Loading...</p>}>
//                 <AllLaptopsPage />
//               </Suspense>
//             }
//           />

//           {/* Brand Products Page */}
//           <Route
//             path="products/:brand"
//             element={
//               <Suspense fallback={<p className="text-center pt-20">Loading...</p>}>
//                 <BrandProducts />
//               </Suspense>
//             }
//           />

//           {/* Product Details Page */}
//           <Route
//             path="product/:id"
//             element={
//               <Suspense fallback={<p className="text-center pt-20">Loading...</p>}>
//                 <ProductDetails />
//               </Suspense>
//             }
//           />

//           {/* Accessories Page */}
//           <Route
//             path="accessories"
//             element={
//               <Suspense fallback={<p className="text-center pt-20">Loading...</p>}>
//                 <AccessoryGrid />
//               </Suspense>
//             }
//           />
//         </Route>
//       </Routes>
//       </AnimatePresence>
//     </Router>
//   );
// }

// // Layout Component with Navbar + Outlet + AboutCard
// function Layout() {
//   return (
//     <>
//       <Navbar />
//       <main className="pt-18 px-2">
//         <Outlet />
//       </main>
//       <AboutCard />
//       {/* Future components like Footer, Reviews can be added here */}
//       {/* <AccessoryGrid/> */}
//     </>
//   );
// }









// import React, { Suspense, lazy } from "react";
// import { BrowserRouter as Router, Routes, Route, Outlet, useLocation } from "react-router-dom";

// // Components
// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import BrandSelector from "./components/BrandSelector";
// import Services from "./components/Services";
// import Contact from "./components/Contact";
// import AboutCard from "./components/AboutCard";
// import { AnimatePresence } from "framer-motion";

// // Lazy-loaded Pages
// const BrandProducts = lazy(() => import("./components/BrandProducts"));
// const AllLaptopsPage = lazy(() => import("./components/AllLaptopsPage"));
// const ProductDetails = lazy(() => import("./pages/ProductDetails"));
// const AccessoryGrid = lazy(() => import("./components/AccessoryGrid"));

// export default function App() {
//   return (
//     <Router>
//       <AnimatePresence mode="wait">
//         <Routes>
//           <Route path="/" element={<Layout />}>
//             {/* Home Page */}
//             <Route
//               index
//               element={
//                 <>
//                   <Hero />            {/* Hero section only */}
//                   <BrandSelector />   
//                   <Services />        
//                   <Contact />         
//                 </>
//               }
//             />

//             {/* All Laptops Page */}
//             <Route
//               path="all-laptops"
//               element={
//                 <Suspense fallback={<p className="text-center pt-20">Loading...</p>}>
//                   <AllLaptopsPage />
//                 </Suspense>
//               }
//             />

//             {/* Brand Products Page */}
//             <Route
//               path="products/:brand"
//               element={
//                 <Suspense fallback={<p className="text-center pt-20">Loading...</p>}>
//                   <BrandProducts />
//                 </Suspense>
//               }
//             />

//             {/* Product Details Page */}
//             <Route
//               path="product/:id"
//               element={
//                 <Suspense fallback={<p className="text-center pt-20">Loading...</p>}>
//                   <ProductDetails />
//                 </Suspense>
//               }
//             />

//             {/* Accessories Page */}
//             <Route
//               path="accessories"
//               element={
//                 <Suspense fallback={<p className="text-center pt-20">Loading...</p>}>
//                   <AccessoryGrid />
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

//   // Show Navbar on all pages except Home
//   const showNavbar = location.pathname !== "/";

//   return (
//     <>
//       {showNavbar && <Navbar />}

//       <main className="pt-18 px-2">
//         <Outlet />
//       </main>

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

// Lazy-loaded Pages
const BrandProducts = lazy(() => import("./components/BrandProducts"));
const AllLaptopsPage = lazy(() => import("./components/AllLaptopsPage"));
const ProductDetails = lazy(() => import("./pages/ProductDetails"));
const AccessoryGrid = lazy(() => import("./components/AccessoryGrid"));

// Scroll Animation Wrapper (global)
const ScrollAnimationWrapper = ({ children, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay }}
    >
      {children}
    </motion.div>
  );
};

export default function App() {
  return (
    <Router>
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* Home Page */}
            <Route
              index
              element={
                <>
                  <Hero /> {/* Hero section only */}
                  <ScrollAnimationWrapper delay={0.2}>
                    <BrandSelector />
                  </ScrollAnimationWrapper>
                  <ScrollAnimationWrapper delay={0.4}>
                    <Services />
                  </ScrollAnimationWrapper>
                  <ScrollAnimationWrapper delay={0.6}>
                    <Contact />
                  </ScrollAnimationWrapper>
                </>
              }
            />

            {/* All Laptops Page */}
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

            {/* Brand Products Page */}
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

            {/* Product Details Page */}
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

            {/* Accessories Page */}
            <Route
              path="accessories"
              element={
                <Suspense fallback={<p className="text-center pt-20">Loading...</p>}>
                  <ScrollAnimationWrapper>
                    <AccessoryGrid />
                  </ScrollAnimationWrapper>
                </Suspense>
              }
            />
          </Route>
        </Routes>
      </AnimatePresence>
    </Router>
  );
}

// Layout Component with conditional Navbar
function Layout() {
  const location = useLocation();

  // Show Navbar on all pages except Home
  const showNavbar = location.pathname !== "/";

  return (
    <>
      {showNavbar && <Navbar />}

      <main className="pt-18 px-2">
        <Outlet />
      </main>

      <AboutCard />
    </>
  );
}
