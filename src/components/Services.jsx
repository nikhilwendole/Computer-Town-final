// src/components/Services.jsx
import { FaTools, FaLaptopCode, FaNetworkWired, FaShieldAlt } from "react-icons/fa";


export default function Services() {
    return (
        <section id="services" className="py-12 bg-gray-50">
            <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">Our Services</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6 max-w-6xl mx-auto">
                <div className="bg-white shadow-lg rounded-xl p-6 text-center hover:shadow-xl transition">
                    <FaTools className="text-4xl text-indigo-600 mb-4 mx-auto" />
                    <h3 className="text-xl font-semibold mb-2">Computer Repair</h3>
                    <p className="text-gray-600 text-sm">Fast and reliable repair for desktops, laptops, and accessories.</p>
                </div>
                <div className="bg-white shadow-lg rounded-xl p-6 text-center hover:shadow-xl transition">
                    <FaLaptopCode className="text-4xl text-indigo-600 mb-4 mx-auto" />
                    <h3 className="text-xl font-semibold mb-2">Refurbished Laptops</h3>
                    <p className="text-gray-600 text-sm">Top-quality refurbished laptops with warranty and support.</p>
                </div>
                <div className="bg-white shadow-lg rounded-xl p-6 text-center hover:shadow-xl transition">
                    <FaNetworkWired className="text-4xl text-indigo-600 mb-4 mx-auto" />
                    <h3 className="text-xl font-semibold mb-2">Networking Solutions</h3>
                    <p className="text-gray-600 text-sm">Complete home and office networking setup and troubleshooting.</p>
                </div>
                <div className="bg-white shadow-lg rounded-xl p-6 text-center hover:shadow-xl transition">
                    <FaShieldAlt className="text-4xl text-indigo-600 mb-4 mx-auto" />
                    <h3 className="text-xl font-semibold mb-2">Security & Antivirus</h3>
                    <p className="text-gray-600 text-sm">Protect your system with our advanced antivirus & security services.</p>
                </div>
            </div>
        </section>
    );
}
