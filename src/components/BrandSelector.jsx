// // // src/components/BrandSelector.jsx
// // import { useNavigate } from 'react-router-dom';
// // import hpImg from '../assets/hp.jpg';
// // import dellImg from '../assets/dell.jpg';
// // import lenovoImg from '../assets/lenovo.jpg';

// // const brands = [
// //     { name: "HP", image: hpImg },
// //     { name: "Dell", image: dellImg },
// //     { name: "Lenovo", image: lenovoImg },
// // ];

// // export default function BrandSelector() {
// //     const navigate = useNavigate();

// //     return (
    
// //         <section id="brands" className="max-w-9xl mx-auto py-20 px-9">
// //             <h1 className="text-3xl font-bold text-center mb-8">Choose Your Brand</h1>

// //             <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
// //                 {brands.map((brand) => (
// //                     <div
// //                         key={brand.name}
// //                         className="cursor-pointer bg-white rounded-xl overflow-hidden shadow hover:scale-105 transition"
// //                         onClick={() => navigate(`/products/${brand.name.toLowerCase()}`)}
// //                     >
// //                         <img src={brand.image} alt={brand.name} className="w-full h-48 object-cover" />
// //                         <div className="p-4 text-center text-xl font-bold">{brand.name}</div>
// //                     </div>
// //                 ))}
// //             </div>
// //         </section>
// //     );
// // }




// // src/components/BrandSelector.jsx
// import { useNavigate } from 'react-router-dom';
// import hpImg from '../assets/hp.jpg';
// import dellImg from '../assets/dell.jpg';
// import lenovoImg from '../assets/lenovo.jpg';

// const brands = [
//     { name: "HP", image: hpImg },
//     { name: "Dell", image: dellImg },
//     { name: "Lenovo", image: lenovoImg },
// ];

// export default function BrandSelector() {
//     const navigate = useNavigate();

//     return (
//         <section id="brands" className="max-w-7xl mx-auto py-20 px-6">
//             <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-gray-900 tracking-tight">
//                 Choose Your Brand
//             </h1>

//             <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
//                 {brands.map((brand) => (
//                     <div
//                         key={brand.name}
//                         className="relative cursor-pointer rounded-2xl overflow-hidden shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl group"
//                         onClick={() => navigate(`/products/${brand.name.toLowerCase()}`)}
//                     >
//                         {/* Brand Image */}
//                         <img
//                             src={brand.image}
//                             alt={brand.name}
//                             className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
//                         />

//                         {/* Overlay */}
//                         <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">
//                             <span className="text-white text-2xl md:text-3xl font-bold tracking-wide">
//                                 {brand.name}
//                             </span>
//                         </div>

//                         {/* Footer Brand Name */}
//                         <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/70 to-transparent p-4 text-center">
//                             <span className="text-white text-lg md:text-xl font-semibold">
//                                 {brand.name}
//                             </span>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </section>
//     );
// }
// src/components/BrandSelector.jsx
import { useNavigate } from 'react-router-dom';
import hpImg from '../assets/hp.jpg';
import dellImg from '../assets/dell.jpg';
import lenovoImg from '../assets/lenovo.jpg';
import acerImg from '../assets/acer.png';
import appleImg from '../assets/apple1.png';


const brands = [
    { name: "HP", image: hpImg },
    { name: "Dell", image: dellImg },
    { name: "Lenovo", image: lenovoImg },
     { name: "Acer", image: acerImg },
  { name: "Apple", image: appleImg },
];

export default function BrandSelector() {
    const navigate = useNavigate();

    return (
        <section id="brands" className="max-w-9xl mx-auto py-20 px-6">
            <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-gray-900 tracking-tight animate-fade-in-down">
                Choose Your Brand
            </h1>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
                {brands.map((brand, idx) => (
                    <div
                        key={brand.name}
                        onClick={() => navigate(`/products/${brand.name.toLowerCase()}`)}
                        className="relative cursor-pointer rounded-2xl overflow-hidden shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl group animate-fade-in-up delay-[calc(idx*100ms)]"
                        style={{ animationDelay: `${idx * 150}ms` }} // stagger animation
                    >
                        {/* Brand Image */}
                        <img
                            src={brand.image}
                            alt={brand.name}
                            className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                        />

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">
                            <span className="text-white text-2xl md:text-3xl font-bold tracking-wide">
                                {brand.name}
                            </span>
                        </div>

                        {/* Footer Brand Name */}
                        <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/70 to-transparent p-4 text-center">
                            <span className="text-white text-lg md:text-xl font-semibold">
                                {brand.name}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
