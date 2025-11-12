// // // // // // src/components/Services.jsx
// // // // // import { FaTools, FaLaptopCode, FaNetworkWired, FaShieldAlt } from "react-icons/fa";


// // // // // export default function Services() {
// // // // //     return (
// // // // //         <section id="services" className="py-12 bg-gray-90">
// // // // //             <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">Our Services</h2>

// // // // //             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-9 max-w-9xl mx-auto">
// // // // //                 <div className="bg-white shadow-lg rounded-xl p-6 text-center hover:shadow-xl transition">
// // // // //                     <FaTools className="text-4xl text-indigo-600 mb-4 mx-auto" />
// // // // //                     <h3 className="text-xl font-semibold mb-2">Computer Repair</h3>
// // // // //                     <p className="text-gray-600 text-sm">Fast and reliable repair for desktops, laptops, and accessories.</p>
// // // // //                 </div>
// // // // //                 <div className="bg-white shadow-lg rounded-xl p-6 text-center hover:shadow-xl transition">
// // // // //                     <FaLaptopCode className="text-4xl text-indigo-600 mb-4 mx-auto" />
// // // // //                     <h3 className="text-xl font-semibold mb-2">Refurbished Laptops</h3>
// // // // //                     <p className="text-gray-600 text-sm">Top-quality refurbished laptops with warranty and support.</p>
// // // // //                 </div>
// // // // //                 <div className="bg-white shadow-lg rounded-xl p-6 text-center hover:shadow-xl transition">
// // // // //                     <FaNetworkWired className="text-4xl text-indigo-600 mb-4 mx-auto" />
// // // // //                     <h3 className="text-xl font-semibold mb-2">Networking Solutions</h3>
// // // // //                     <p className="text-gray-600 text-sm">Complete home and office networking setup and troubleshooting.</p>
// // // // //                 </div>
// // // // //                 <div className="bg-white shadow-lg rounded-xl p-6 text-center hover:shadow-xl transition">
// // // // //                     <FaShieldAlt className="text-4xl text-indigo-600 mb-4 mx-auto" />
// // // // //                     <h3 className="text-xl font-semibold mb-2">Security & Antivirus</h3>
// // // // //                     <p className="text-gray-600 text-sm">Protect your system with our advanced antivirus & security services.</p>
// // // // //                 </div>
// // // // //             </div>
// // // // //         </section>
// // // // //     );
// // // // // }
// // // // import React, { useState } from 'react';

// // // // // --- Inline SVG Icons (Replaced react-icons/fa) ---
// // // // // Using custom SVGs to ensure compatibility in the single-file environment.
// // // // const ToolIcon = (props) => (
// // // //   <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
// // // //     <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
// // // //   </svg>
// // // // );

// // // // const LaptopCodeIcon = (props) => (
// // // //   <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
// // // //     <rect x="2" y="5" width="20" height="14" rx="2" ry="2" />
// // // //     <line x1="6" y1="17" x2="18" y2="17" />
// // // //     <path d="M10 10l-2 2 2 2" />
// // // //     <path d="M14 10l2 2-2 2" />
// // // //   </svg>
// // // // );

// // // // const NetworkWiredIcon = (props) => (
// // // //   <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
// // // //     <rect x="4" y="2" width="16" height="4" rx="1" />
// // // //     <rect x="4" y="18" width="16" height="4" rx="1" />
// // // //     <line x1="8" y1="6" x2="8" y2="18" />
// // // //     <line x1="16" y1="6" x2="16" y2="18" />
// // // //     <rect x="9" y="9" width="6" height="6" rx="1" />
// // // //   </svg>
// // // // );

// // // // const ShieldIcon = (props) => (
// // // //   <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
// // // //     <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
// // // //   </svg>
// // // // );

// // // // const TimesIcon = (props) => (
// // // //   <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
// // // //     <line x1="18" y1="6" x2="6" y2="18" />
// // // //     <line x1="6" y1="6" x2="18" y2="18" />
// // // //   </svg>
// // // // );

// // // // // --- Service & Pricing Data ---
// // // // const SERVICE_DATA = [
// // // //   {
// // // //     name: "Computer Repair",
// // // //     icon: ToolIcon, // Updated
// // // //     color: "text-indigo-600",
// // // //     detailsKey: "Computer Repair",
// // // //     description: "Fast and reliable repair for desktops, laptops, and accessories.",
// // // //     isInteractive: true,
// // // //   },
// // // //   {
// // // //     name: "Refurbished Laptops",
// // // //     icon: LaptopCodeIcon, // Updated
// // // //     color: "text-green-600",
// // // //     description: "Top-quality refurbished laptops with warranty and support. (See store for models)",
// // // //     isInteractive: false, // Not showing pricing details in modal
// // // //   },
// // // //   {
// // // //     name: "Networking Solutions",
// // // //     icon: NetworkWiredIcon, // Updated
// // // //     color: "text-rose-600",
// // // //     detailsKey: "Networking Solutions",
// // // //     description: "Complete home and office networking setup and troubleshooting.",
// // // //     isInteractive: true,
// // // //   },
// // // //   {
// // // //     name: "Security & Antivirus",
// // // //     icon: ShieldIcon, // Updated
// // // //     color: "text-amber-600",
// // // //     detailsKey: "Security & Antivirus",
// // // //     description: "Protect your system with our advanced antivirus & security services.",
// // // //     isInteractive: true,
// // // //   },
// // // // ];

// // // // const PRICING_DETAILS = {
// // // //   'Computer Repair': {
// // // //     title: 'Computer Repair & Diagnostics',
// // // //     description: 'Our expert technicians offer comprehensive diagnosis and repair for all desktop and laptop issues. All prices are for labor only, parts excluded.',
// // // //     prices: [
// // // //       { name: 'Hardware Diagnostic Fee', price: '$49', details: 'Waived if any paid repair service is performed.' },
// // // //       { name: 'Operating System Refresh', price: '$109', details: 'Full OS reinstallation, driver setup, and data backup transfer (up to 500GB).' },
// // // //       { name: 'Virus & Malware Removal', price: '$139', details: 'In-depth cleanup, registry repair, and security hardening.' },
// // // //       { name: 'Software Installation/Setup', price: '$35', details: 'Per application installation and configuration.' },
// // // //     ],
// // // //   },
// // // //   'Networking Solutions': {
// // // //     title: 'Home & Office Networking Setup',
// // // //     description: 'Get a reliable, fast, and secure network tailored to your specific connectivity needs.',
// // // //     prices: [
// // // //       { name: 'Basic Wi-Fi Setup', price: '$89', details: 'Router configuration, device connection, and signal optimization for small areas.' },
// // // //       { name: 'Advanced Mesh Installation', price: '$220', details: 'Optimized coverage across multiple rooms with full system integration.' },
// // // //       { name: 'Network Troubleshooting', price: '$75/hr', details: 'Diagnosis and resolution of speed, connectivity, and performance issues.' },
// // // //       { name: 'Data Cabling Consultation', price: 'Custom Quote', details: 'Planning and installation of wired (Ethernet) infrastructure.' },
// // // //     ],
// // // //   },
// // // //   'Security & Antivirus': {
// // // //     title: 'Digital Security & Protection Plans',
// // // //     description: 'Comprehensive plans to secure your data and devices against modern digital threats.',
// // // //     prices: [
// // // //       { name: 'Annual Premium Antivirus', price: '$59/year', details: 'License for a top-rated security suite for one device.' },
// // // //       { name: 'System Optimization & Tune-up', price: '$79', details: 'Deep cleanup, startup management, and speed improvements.' },
// // // //       { name: 'Secure Data Backup Setup', price: '$119', details: 'Configuration of automated local or cloud backup solutions.' },
// // // //       { name: 'Parental Control Configuration', price: '$85', details: 'Setting up filters and usage limits across family devices.' },
// // // //     ],
// // // //   },
// // // // };

// // // // // --- Modal Component ---
// // // // const PricingModal = ({ service, onClose }) => {
// // // //   if (!service) return null;

// // // //   const details = PRICING_DETAILS[service];

// // // //   return (
// // // //     <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center p-4 z-50 overflow-y-auto" onClick={onClose}>
// // // //       <div
// // // //         className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl transform transition-all duration-300 scale-100 opacity-100"
// // // //         onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
// // // //       >
// // // //         {/* Header */}
// // // //         <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-indigo-50 rounded-t-2xl">
// // // //           <h3 className="text-2xl font-extrabold text-gray-900 flex items-center">
// // // //             <span className="mr-3 text-indigo-700">📋</span>
// // // //             {details.title}
// // // //           </h3>
// // // //           <button
// // // //             onClick={onClose}
// // // //             className="p-2 text-gray-500 hover:text-gray-900 rounded-full transition duration-150 hover:bg-indigo-100"
// // // //             aria-label="Close"
// // // //           >
// // // //             <TimesIcon className="w-5 h-5" /> {/* Updated */}
// // // //           </button>
// // // //         </div>

// // // //         {/* Body */}
// // // //         <div className="p-6">
// // // //           <p className="text-gray-600 mb-6 border-l-4 border-indigo-400 pl-3 italic text-sm">
// // // //             {details.description}
// // // //           </p>

// // // //           <div className="space-y-4">
// // // //             {details.prices.map((item, index) => (
// // // //               <div key={index} className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 bg-gray-50 rounded-xl shadow-inner">
// // // //                 <div className="flex-1 min-w-0 pr-4">
// // // //                   <p className="text-lg font-bold text-gray-800">{item.name}</p>
// // // //                   <p className="text-xs text-gray-500 mt-1">{item.details}</p>
// // // //                 </div>
// // // //                 <div className="mt-2 sm:mt-0">
// // // //                   <span className="inline-block px-4 py-1 text-base font-extrabold text-white bg-indigo-600 rounded-full shadow-md">
// // // //                     {item.price}
// // // //                   </span>
// // // //                 </div>
// // // //               </div>
// // // //             ))}
// // // //           </div>
// // // //         </div>

// // // //         {/* Footer */}
// // // //         <div className="p-4 bg-gray-50 rounded-b-2xl text-right">
// // // //           <button
// // // //             onClick={onClose}
// // // //             className="px-6 py-2 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition shadow-md"
// // // //           >
// // // //             Got It!
// // // //           </button>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // // --- Main Services Component ---
// // // // export default function Services() {
// // // //   const [selectedService, setSelectedService] = useState(null);

// // // //   const openModal = (key) => {
// // // //     setSelectedService(key);
// // // //   };

// // // //   const closeModal = () => {
// // // //     setSelectedService(null);
// // // //   };

// // // //   return (
// // // //     <section id="services" className="py-16 bg-gray-50 min-h-screen">
// // // //       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
// // // //         <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-900 tracking-tight">
// // // //           Our Technology Services
// // // //         </h2>

// // // //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
// // // //           {SERVICE_DATA.map((service, index) => (
// // // //             <div
// // // //               key={index}
// // // //               className={`
// // // //                 bg-white border-b-4 ${service.isInteractive ? 'border-indigo-500' : 'border-gray-200'}
// // // //                 shadow-xl rounded-2xl p-6 text-center transition duration-300
// // // //                 ${service.isInteractive
// // // //                   ? 'hover:shadow-2xl hover:scale-[1.03] cursor-pointer'
// // // //                   : 'hover:shadow-lg'
// // // //                 }
// // // //               `}
// // // //               onClick={() => service.isInteractive && openModal(service.detailsKey)}
// // // //               role={service.isInteractive ? 'button' : 'listitem'}
// // // //               aria-label={service.isInteractive ? `View pricing for ${service.name}` : service.name}
// // // //             >
// // // //               {/* Note: service.icon is now the SVG Component */}
// // // //               <service.icon className={`text-5xl ${service.color} mb-4 mx-auto`} />
// // // //               <h3 className="text-xl font-bold mb-3 text-gray-900">{service.name}</h3>
// // // //               <p className="text-gray-600 text-sm h-10 line-clamp-2">{service.description}</p>
// // // //               {service.isInteractive && (
// // // //                 <div className="mt-4 inline-block text-xs font-semibold px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full">
// // // //                   Click to View Pricing
// // // //                 </div>
// // // //               )}
// // // //             </div>
// // // //           ))}
// // // //         </div>
// // // //       </div>

// // // //       <PricingModal service={selectedService} onClose={closeModal} />
// // // //     </section>
// // // //   );
// // // // }









// // // import React, { useState } from 'react';

// // // // --- SVG Icons ---
// // // const ToolIcon = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" /></svg>;
// // // const LaptopCodeIcon = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="5" width="20" height="14" rx="2" ry="2" /><line x1="6" y1="17" x2="18" y2="17" /><path d="M10 10l-2 2 2 2" /><path d="M14 10l2 2-2 2" /></svg>;
// // // const NetworkWiredIcon = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="4" rx="1" /><rect x="4" y="18" width="16" height="4" rx="1" /><line x1="8" y1="6" x2="8" y2="18" /><line x1="16" y1="6" x2="16" y2="18" /><rect x="9" y="9" width="6" height="6" rx="1" /></svg>;
// // // const ShieldIcon = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>;
// // // const TimesIcon = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>;

// // // // --- Services & Pricing Data ---
// // // const SERVICE_DATA = [
// // //   { name: "Computer Repair", icon: ToolIcon, color: "text-indigo-600", detailsKey: "Computer Repair", description: "Fast and reliable repair for desktops, laptops, and accessories.", isInteractive: true },
// // //   { name: "Refurbished Laptops", icon: LaptopCodeIcon, color: "text-green-600", description: "Top-quality refurbished laptops with warranty and support.", isInteractive: false },
// // //   { name: "Networking Solutions", icon: NetworkWiredIcon, color: "text-rose-600", detailsKey: "Networking Solutions", description: "Complete home and office networking setup and troubleshooting.", isInteractive: true },
// // //   { name: "Security & Antivirus", icon: ShieldIcon, color: "text-amber-600", detailsKey: "Security & Antivirus", description: "Protect your system with our advanced antivirus & security services.", isInteractive: true },
// // // ];

// // // const PRICING_DETAILS = {
// // //   'Computer Repair': {
// // //     title: 'Computer Repair & Diagnostics',
// // //     description: 'Expert repair and diagnostics. Parts extra.',
// // //     prices: [
// // //       { name: 'Hardware Diagnostic Fee', price: '$49', details: 'Waived if repair is done.' },
// // //       { name: 'OS Refresh', price: '$109', details: 'OS install + drivers + backup.' },
// // //       { name: 'Virus Removal', price: '$139', details: 'Full cleanup and registry repair.' },
// // //       { name: 'Software Setup', price: '$35', details: 'Per app installation.' },
// // //     ]
// // //   },
// // //   'Networking Solutions': {
// // //     title: 'Home & Office Networking Setup',
// // //     description: 'Reliable, fast, and secure network solutions.',
// // //     prices: [
// // //       { name: 'Basic Wi-Fi Setup', price: '$89', details: 'Router config and optimization.' },
// // //       { name: 'Advanced Mesh Installation', price: '$220', details: 'Full coverage mesh setup.' },
// // //       { name: 'Network Troubleshooting', price: '$75/hr', details: 'Fix speed/connectivity issues.' },
// // //       { name: 'Data Cabling', price: 'Custom Quote', details: 'Ethernet wiring setup.' },
// // //     ]
// // //   },
// // //   'Security & Antivirus': {
// // //     title: 'Digital Security Plans',
// // //     description: 'Secure your devices and data against threats.',
// // //     prices: [
// // //       { name: 'Annual Antivirus', price: '$59/year', details: 'License for 1 device.' },
// // //       { name: 'System Tune-up', price: '$79', details: 'Cleanup & performance boost.' },
// // //       { name: 'Backup Setup', price: '$119', details: 'Local/cloud backups configured.' },
// // //       { name: 'Parental Control', price: '$85', details: 'Setup filters and limits.' },
// // //     ]
// // //   },
// // // };

// // // // --- Pricing Modal ---
// // // const PricingModal = ({ service, onClose }) => {
// // //   if (!service) return null;
// // //   const details = PRICING_DETAILS[service];

// // //   return (
// // //     <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50 animate-fade-in" onClick={onClose}>
// // //       <div className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl transform transition-all duration-300 hover:scale-105" onClick={(e) => e.stopPropagation()}>
// // //         <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gradient-to-r from-indigo-500 to-purple-500 rounded-t-3xl text-white">
// // //           <h3 className="text-2xl font-extrabold">{details.title}</h3>
// // //           <button onClick={onClose} className="hover:bg-white/20 p-2 rounded-full"><TimesIcon className="w-6 h-6" /></button>
// // //         </div>
// // //         <div className="p-6 space-y-4">
// // //           <p className="text-gray-700 italic">{details.description}</p>
// // //           {details.prices.map((item, idx) => (
// // //             <div key={idx} className="flex justify-between items-center p-4 bg-gray-50 rounded-xl shadow-md hover:shadow-xl transition">
// // //               <div>
// // //                 <p className="font-bold text-gray-800">{item.name}</p>
// // //                 <p className="text-gray-500 text-sm">{item.details}</p>
// // //               </div>
// // //               <span className="bg-indigo-600 text-white font-semibold px-4 py-1 rounded-full shadow">{item.price}</span>
// // //             </div>
// // //           ))}
// // //         </div>
// // //         <div className="p-6 flex justify-end border-t border-gray-100">
// // //           <button onClick={onClose} className="bg-indigo-600 text-white px-6 py-2 rounded-xl font-semibold shadow hover:bg-indigo-700 transition">Got it!</button>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // // --- Main Services Component ---
// // // export default function Services() {
// // //   const [selectedService, setSelectedService] = useState(null);

// // //   return (
// // //     <section id="services" className="py-16 bg-gray-50 min-h-screen">
// // //       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
// // //         <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-900 tracking-tight">Our Modern Tech Services</h2>

// // //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
// // //           {SERVICE_DATA.map((service, idx) => (
// // //             <div
// // //               key={idx}
// // //               onClick={() => service.isInteractive && setSelectedService(service.detailsKey)}
// // //               className={`bg-white/70 backdrop-blur-md border-b-4 ${service.isInteractive ? 'border-indigo-500' : 'border-gray-200'} shadow-lg rounded-3xl p-6 text-center transition transform hover:scale-105 hover:shadow-2xl cursor-pointer`}
// // //             >
// // //               <service.icon className={`text-6xl ${service.color} mb-4 mx-auto transition-transform duration-300 hover:rotate-6 hover:scale-110`} />
// // //               <h3 className="text-xl font-bold mb-3 text-gray-900">{service.name}</h3>
// // //               <p className="text-gray-600 text-sm line-clamp-2">{service.description}</p>
// // //               {service.isInteractive && <span className="mt-4 inline-block px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs font-semibold">Click to View Pricing</span>}
// // //             </div>
// // //           ))}
// // //         </div>
// // //       </div>

// // //       <PricingModal service={selectedService} onClose={() => setSelectedService(null)} />
// // //     </section>
// // //   );
// // // }
// // import React, { useState } from "react";

// // const services = [
// //   {
// //     title: "Laptop Repair",
// //     description:
// //       "Fix hardware and software issues with precision. Includes screen replacement, motherboard repair, and software troubleshooting.",
// //     price: "₹1500 - ₹5000",
// //     icon: "💻",
// //   },
// //   {
// //     title: "Software Installation",
// //     description:
// //       "Install and configure software efficiently, including OS installation, drivers, and productivity software setup.",
// //     price: "₹500 - ₹1500",
// //     icon: "🛠️",
// //   },
// //   {
// //     title: "Virus Removal",
// //     description:
// //       "Protect your system from malware and viruses. Complete cleanup, antivirus installation, and system optimization.",
// //     price: "₹800 - ₹2000",
// //     icon: "🛡️",
// //   },
// //   {
// //     title: "Hardware Upgrade",
// //     description:
// //       "Upgrade RAM, SSD, GPU, and other components for better performance.",
// //     price: "₹1000 - ₹7000",
// //     icon: "⚡",
// //   },
// // ];

// // export default function ServiceSection() {
// //   const [selectedService, setSelectedService] = useState(null);

// //   return (
// //     <section className="bg-gray-900 text-white py-16 px-4">
// //       <div className="max-w-6xl mx-auto text-center">
// //         <h2 className="text-4xl font-bold mb-4">Our Services</h2>
// //         <p className="text-gray-400 mb-12">
// //           We provide professional computer services to keep your devices running smoothly.
// //         </p>

// //         {/* Service Cards */}
// //         <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
// //           {services.map((service, index) => (
// //             <div
// //               key={index}
// //               onClick={() => setSelectedService(service)}
// //               className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-2xl cursor-pointer transition-transform transform hover:scale-105"
// //             >
// //               <div className="text-5xl mb-4">{service.icon}</div>
// //               <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
// //               <p className="text-gray-400">{service.description.slice(0, 50)}...</p>
// //             </div>
// //           ))}
// //         </div>

// //         {/* Modal */}
// //         {selectedService && (
// //           <div
// //             className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
// //             onClick={() => setSelectedService(null)}
// //           >
// //             <div
// //               className="bg-gray-800 p-8 rounded-3xl max-w-lg w-full relative"
// //               onClick={(e) => e.stopPropagation()}
// //             >
// //               <button
// //                 className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl font-bold"
// //                 onClick={() => setSelectedService(null)}
// //               >
// //                 &times;
// //               </button>
// //               <div className="text-6xl mb-4">{selectedService.icon}</div>
// //               <h3 className="text-3xl font-bold mb-2">{selectedService.title}</h3>
// //               <p className="text-gray-400 mb-4">{selectedService.description}</p>
// //               <p className="text-xl font-semibold mb-6">Price: {selectedService.price}</p>
// //               <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl transition">
// //                 Book Service
// //               </button>
// //             </div>
// //           </div>
// //         )}
// //       </div>
// //     </section>
// //   );
// // }




// import React, { useState } from 'react';

// // --- SVG Icons ---
// const ToolIcon = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>;
// const LaptopCodeIcon = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="2" y="5" width="20" height="14" rx="2" ry="2"/><line x1="6" y1="17" x2="18" y2="17"/><path d="M10 10l-2 2 2 2"/><path d="M14 10l2 2-2 2"/></svg>;
// const NetworkWiredIcon = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="4" y="2" width="16" height="4" rx="1"/><rect x="4" y="18" width="16" height="4" rx="1"/><line x1="8" y1="6" x2="8" y2="18"/><line x1="16" y1="6" x2="16" y2="18"/><rect x="9" y="9" width="6" height="6" rx="1"/></svg>;
// const ShieldIcon = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>;
// const TimesIcon = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>;

// // --- Services Data ---
// const SERVICE_DATA = [
//   { name: "Computer Repair", icon: ToolIcon, color: "text-indigo-600", detailsKey: "Computer Repair", description: "Fast and reliable repair for desktops, laptops, and accessories.", isInteractive: true },
//   { name: "Refurbished Laptops", icon: LaptopCodeIcon, color: "text-green-600", description: "Top-quality refurbished laptops with warranty and support.", isInteractive: false },
//   { name: "Networking Solutions", icon: NetworkWiredIcon, color: "text-rose-600", detailsKey: "Networking Solutions", description: "Complete home and office networking setup and troubleshooting.", isInteractive: true },
//   { name: "Security & Antivirus", icon: ShieldIcon, color: "text-amber-600", detailsKey: "Security & Antivirus", description: "Protect your system with our advanced antivirus & security services.", isInteractive: true },
// ];

// // --- Pricing Details ---
// const PRICING_DETAILS = {
//   'Computer Repair': {
//     title: 'Computer Repair & Diagnostics',
//     description: 'Expert repair and diagnostics. Parts extra.',
//     prices: [
//       { name: 'Hardware Diagnostic Fee', price: '$49', details: 'Waived if repair is done.' },
//       { name: 'OS Refresh', price: '$109', details: 'OS install + drivers + backup.' },
//       { name: 'Virus Removal', price: '$139', details: 'Full cleanup and registry repair.' },
//       { name: 'Software Setup', price: '$35', details: 'Per app installation.' },
//     ]
//   },
//   'Networking Solutions': {
//     title: 'Home & Office Networking Setup',
//     description: 'Reliable, fast, and secure network solutions.',
//     prices: [
//       { name: 'Basic Wi-Fi Setup', price: '$89', details: 'Router config and optimization.' },
//       { name: 'Advanced Mesh Installation', price: '$220', details: 'Full coverage mesh setup.' },
//       { name: 'Network Troubleshooting', price: '$75/hr', details: 'Fix speed/connectivity issues.' },
//       { name: 'Data Cabling', price: 'Custom Quote', details: 'Ethernet wiring setup.' },
//     ]
//   },
//   'Security & Antivirus': {
//     title: 'Digital Security Plans',
//     description: 'Secure your devices and data against threats.',
//     prices: [
//       { name: 'Annual Antivirus', price: '59/year', details: 'License for 1 device.' },
//       { name: 'System Tune-up', price: '$79', details: 'Cleanup & performance boost.' },
//       { name: 'Backup Setup', price: '$119', details: 'Local/cloud backups configured.' },
//       { name: 'Parental Control', price: '$85', details: 'Setup filters and limits.' },
//     ]
//   },
// };

// // --- Modal Component ---
// const PricingModal = ({ service, onClose }) => {
//   if (!service) return null;
//   const details = PRICING_DETAILS[service];

//   return (
//     <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50 animate-fade-in" onClick={onClose}>
//       <div className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl transform transition-all duration-300 hover:scale-105" onClick={(e) => e.stopPropagation()}>
//         {/* Header */}
//         <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gradient-to-r from-indigo-500 to-purple-500 rounded-t-3xl text-white">
//           <h3 className="text-2xl font-extrabold">{details.title}</h3>
//           <button onClick={onClose} className="hover:bg-white/20 p-2 rounded-full"><TimesIcon className="w-6 h-6" /></button>
//         </div>

//         {/* Body */}
//         <div className="p-6 space-y-4">
//           <p className="text-gray-700 italic">{details.description}</p>
//           {details.prices.map((item, idx) => (
//             <div key={idx} className="flex justify-between items-center p-4 bg-gray-50 rounded-xl shadow-md hover:shadow-xl transition">
//               <div>
//                 <p className="font-bold text-gray-800">{item.name}</p>
//                 <p className="text-gray-500 text-sm">{item.details}</p>
//               </div>
//               <span className="bg-indigo-600 text-white font-semibold px-4 py-1 rounded-full shadow">{item.price}</span>
//             </div>
//           ))}
//         </div>

//         {/* Footer */}
//         <div className="p-6 flex justify-end border-t border-gray-100">
//           <button className="bg-blue-600 text-white px-6 py-2 rounded-xl font-semibold shadow hover:bg-blue-700 transition">Book Service</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// // --- Main Services Component ---
// export default function Services() {
//   const [selectedService, setSelectedService] = useState(null);

//   return (
//     <section id="services" className="py-16 bg-gray-50 min-h-screen">
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//         <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-900 tracking-tight">Our Premium Tech Services</h2>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {SERVICE_DATA.map((service, idx) => (
//             <div
//               key={idx}
//               onClick={() => service.isInteractive && setSelectedService(service.detailsKey)}
//               className={`bg-white rounded-3xl shadow-lg p-6 text-center cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-2xl border-t-4 ${service.isInteractive ? 'border-indigo-500' : 'border-gray-200'}`}
//             >
//               <div className={`w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center bg-gray-100`}>
//                 <service.icon className={`text-4xl ${service.color}`} />
//               </div>
//               <h3 className="text-xl font-bold mb-2 text-gray-900">{service.name}</h3>
//               <p className="text-gray-600 text-sm line-clamp-3">{service.description}</p>
//               {service.isInteractive && (
//                 <span className="mt-4 inline-block px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs font-semibold">
//                   Click for Pricing
//                 </span>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>

//       <PricingModal service={selectedService} onClose={() => setSelectedService(null)} />
//     </section>
//   );
// }






import React, { useState } from 'react';

// --- SVG Icons ---
const ToolIcon = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>;
const LaptopCodeIcon = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="2" y="5" width="20" height="14" rx="2" ry="2"/><line x1="6" y1="17" x2="18" y2="17"/><path d="M10 10l-2 2 2 2"/><path d="M14 10l2 2-2 2"/></svg>;
const NetworkWiredIcon = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="4" y="2" width="16" height="4" rx="1"/><rect x="4" y="18" width="16" height="4" rx="1"/><line x1="8" y1="6" x2="8" y2="18"/><line x1="16" y1="6" x2="16" y2="18"/><rect x="9" y="9" width="6" height="6" rx="1"/></svg>;
const ShieldIcon = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>;
const TimesIcon = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>;

// --- Service Data ---
const SERVICE_DATA = [
  { name: "Computer Repair", icon: ToolIcon, color: "text-indigo-600", detailsKey: "Computer Repair", description: "Quick, expert repair for desktops, laptops, and peripherals.", isInteractive: true },
  { name: "Refurbished Laptops", icon: LaptopCodeIcon, color: "text-green-600", description: "High-quality refurbished laptops with warranty and full support.", isInteractive: false },
  { name: "Networking Solutions", icon: NetworkWiredIcon, color: "text-rose-600", detailsKey: "Networking Solutions", description: "Complete home & office networking setup and troubleshooting.", isInteractive: true },
  { name: "Security & Antivirus", icon: ShieldIcon, color: "text-amber-600", detailsKey: "Security & Antivirus", description: "Protect your devices with advanced antivirus and security solutions.", isInteractive: true },
];

// --- Pricing Details (INR) ---
const PRICING_DETAILS = {
  'Computer Repair': {
    title: 'Computer Repair & Diagnostics',
    description: 'Professional repair and diagnostics for desktops and laptops. Parts extra.',
    prices: [
      { name: 'Hardware Diagnostic', price: '₹2,000', details: 'Free if repair is done.' },
      { name: 'OS Refresh', price: '₹5,000', details: 'OS install + drivers + backup.' },
      { name: 'Virus Removal', price: '₹3,500', details: 'Complete cleanup & optimization.' },
      { name: 'Software Setup', price: '₹1,000', details: 'Per application installation.' },
    ]
  },
  'Networking Solutions': {
    title: 'Home & Office Networking',
    description: 'Reliable, fast, and secure network setup & troubleshooting.',
    prices: [
      { name: 'Basic Wi-Fi Setup', price: '₹3,000', details: 'Router config & optimization.' },
      { name: 'Advanced Mesh Installation', price: '₹8,000', details: 'Full coverage setup.' },
      { name: 'Network Troubleshooting', price: '₹1,500/hr', details: 'Speed/connectivity fix.' },
      { name: 'Data Cabling', price: 'Custom Quote', details: 'Ethernet wiring setup.' },
    ]
  },
  'Security & Antivirus': {
    title: 'Digital Security Services',
    description: 'Secure your devices and data from threats.',
    prices: [
      { name: 'Annual Antivirus', price: '₹1,200/year', details: 'License for 1 device.' },
      { name: 'System Tune-up', price: '₹1,500', details: 'Cleanup & performance boost.' },
      { name: 'Backup Setup', price: '₹2,500', details: 'Cloud & local backups configured.' },
      { name: 'Parental Control', price: '₹1,800', details: 'Setup content filters and limits.' },
    ]
  },
};

// --- Modal Component ---
const PricingModal = ({ service, onClose }) => {
  if (!service) return null;
  const details = PRICING_DETAILS[service];

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50 animate-fade-in" onClick={onClose}>
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl transform transition-all duration-300 hover:scale-105" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gradient-to-r from-indigo-500 to-purple-500 rounded-t-3xl text-white">
          <h3 className="text-2xl font-extrabold">{details.title}</h3>
          <button onClick={onClose} className="hover:bg-white/20 p-2 rounded-full"><TimesIcon className="w-6 h-6" /></button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-4">
          <p className="text-gray-700 italic">{details.description}</p>
          {details.prices.map((item, idx) => (
            <div key={idx} className="flex justify-between items-center p-4 bg-gray-50 rounded-xl shadow-md hover:shadow-xl transition">
              <div>
                <p className="font-bold text-gray-800">{item.name}</p>
                <p className="text-gray-500 text-sm">{item.details}</p>
              </div>
              <span className="bg-indigo-600 text-white font-semibold px-4 py-1 rounded-full shadow">{item.price}</span>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="p-6 flex justify-end border-t border-gray-100">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-xl font-semibold shadow hover:bg-blue-700 transition">Book Service</button>
        </div>
      </div>
    </div>
  );
};

// --- Main Services Component ---
export default function Services() {
  const [selectedService, setSelectedService] = useState(null);

  return (
    // <section id="services" className=" bg-gradient-to-b from-[#F5F7FF] via-[#fffbee] to-[#E6EFFF] text-gray-800 max-h-screen">
       <section id="services" className="bg-gradient-to-b from-[#F5F7FF] via-[#fffbee] to-[#E6EFFF] text-gray-800 py-5 px-4">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-900 tracking-tight">Our Premium Tech Services</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-9">
          {SERVICE_DATA.map((service, idx) => (
            <div
              key={idx}
              onClick={() => service.isInteractive && setSelectedService(service.detailsKey)}
              className={`bg-white rounded-3xl shadow-lg p-6 text-center cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-2xl border-t-4 ${service.isInteractive ? 'border-indigo-500' : 'border-gray-200'}`}
            >
              <div className="w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center bg-gray-100 shadow-inner">
                <service.icon className={`text-4xl ${service.color}`} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">{service.name}</h3>
              <p className="text-gray-600 text-sm line-clamp-3">{service.description}</p>
              {service.isInteractive && (
                <span className="mt-4 inline-block px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs font-semibold">
                  Click for Pricing
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      <PricingModal service={selectedService} onClose={() => setSelectedService(null)} />
    </section>
  );
}


