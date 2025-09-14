// src/components/BrandSelector.jsx
import { useNavigate } from 'react-router-dom';
import hpImg from '../assets/hp.jpg';
import dellImg from '../assets/dell.jpg';
import lenovoImg from '../assets/lenovo.jpg';

const brands = [
    { name: "HP", image: hpImg },
    { name: "Dell", image: dellImg },
    { name: "Lenovo", image: lenovoImg },
];

export default function BrandSelector() {
    const navigate = useNavigate();

    return (
    
        <section id="brands" className="max-w-7xl mx-auto py-12 px-4">
            <h1 className="text-3xl font-bold text-center mb-8">Choose Your Brand</h1>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                {brands.map((brand) => (
                    <div
                        key={brand.name}
                        className="cursor-pointer bg-white rounded-xl overflow-hidden shadow hover:scale-105 transition"
                        onClick={() => navigate(`/products/${brand.name.toLowerCase()}`)}
                    >
                        <img src={brand.image} alt={brand.name} className="w-full h-48 object-cover" />
                        <div className="p-4 text-center text-xl font-bold">{brand.name}</div>
                    </div>
                ))}
            </div>
        </section>
    );
}
