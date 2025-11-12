// src/components/Contact.jsx
import { FaPhone, FaEnvelope } from 'react-icons/fa';

const team = [
    {
        name: "Ankit Kumavat",
        role: "Lead Engineer",
        phone: "+91 98765 43210",
       
        color: "indigo",
        image: "https://placehold.co/120x120/A78BFA/FFFFFF/png?text=ankit",
        time: "Mon-Fri, 9 AM - 5 PM"
    },
    {
        name: "Ashok Kumavat",
        role: "Customer Service Manager",
        phone: "+91 87654 32109",
        
        color: "blue",
        image: "https://placehold.co/120x120/60A5FA/FFFFFF/png?text=Ashok",
        time: "Mon-Sat, 10 AM - 6 PM"
    },
    {
        name: "Akash Wendole",
        role: "Sales Head",
        phone: "+91 76543 21098",
     
        color: "emerald",
        image: "https://placehold.co/120x120/4ADE80/FFFFFF/png?text=Akash",
        time: "Mon-Fri, 9 AM - 6 PM"
    }
];

export default function Contact() {
    return (
        <section id="contact" className="bg-gradient-to-b from-[#F5F7FF] via-[#fffbee] to-[#E6EFFF] text-gray-800 py-5 px-4">
            <div className="max-w-7xl mx-auto text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h2>
                <p className="text-lg text-gray-600">
                    Connect with our team. Our experts are here to help you.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 max-w-9xl mx-0">
                {team.map((person, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 overflow-hidden"
                    >
                        <div className="p-6 flex flex-col items-center">
                            {/* <img
                                // src={person.image}
                                // alt={person.name}
                                className={`w-32 h-32 rounded-full object-cover border-4 border-${person.color}-400 mb-4 shadow-md`}
                            /> */}
                            <h3 className="text-2xl font-semibold text-gray-900 mb-2">{person.name}</h3>
                            <p className={`text-${person.color}-600 text-md font-medium mb-4`}>{person.role}</p>
                            <div className="text-gray-700 text-center space-y-2">
                                <p className="flex items-center justify-center">
                                    <FaPhone className="mr-2 text-gray-500" /> {person.phone}
                                </p>
                                {/* <p className="flex items-center justify-center">
                                    <FaEnvelope className="mr-2 text-gray-500" /> {person.email}
                                </p> */}
                                <p className="text-sm text-gray-500 mt-2">{person.time}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
