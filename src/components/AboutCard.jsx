

import React from "react";
import { FaInstagram, FaFacebook, FaWhatsapp, FaShareAlt } from "react-icons/fa"; 
import dlogo from "../assets/3d-1.jpg";

const AboutUsPage = () => {
  const phoneNumber = "+919637170075";

  return (
    <div id="about" className="relative bg-gray-950 text-white font-sans">
      {/* Background Gradient */}
      <div
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(ellipse at top, #1c2b3a, transparent), 
                            radial-gradient(ellipse at bottom, #0a111a, transparent)`,
        }}
      ></div>

      {/* Main Section */}
      <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start justify-between 
                      min-h-screen w-full px-6 md:px-20 py-20 gap-12">
        {/* Image + Map Section */}
        <div className="flex-shrink-0 w-full md:w-1/2 flex flex-col items-center gap-8">
          <img
            src={dlogo}
            alt="Computer Town Store"
            className="w-full max-w-md h-auto rounded-2xl shadow-2xl object-cover"
          />

          {/* Google Maps Embed */}
          <div className="rounded-xl overflow-hidden shadow-xl border border-gray-800 w-full max-w-md">
            <iframe
              title="Computer Town Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.210837443822!2d73.76777507496526!3d18.6095842825013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b97bfcc41ecf%3A0x6dca0287bbf1f504!2sComputer%20Town%20%7C%20Computers%20%7C%20Refurbished%20Laptop%20%7C%20Second%20Hand%20Laptop%20%7C%20Used%20Laptop%20in%20Pune!5e0!3m2!1sen!2sin!4v1756975971286!5m2!1sen!2sin" 
              width="100%"
              height="280"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Text Section */}
        <div className="flex-1 w-full md:w-1/2 flex flex-col justify-center">
          { <h1 className="text-4xl md:text-6xl font-extrabold mb-8 text-center md:text-left 
                         bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 bg-clip-text text-transparent">
            About us
          </h1> }

          <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed text-center md:text-left">
            For over a decade, Computer Town has been the trusted hub for tech
            enthusiasts and professionals alike. We are more than just a store;
            we are a community built on a shared passion for innovation and
            quality.
          </p>

          {/* Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
            {/* Location & Hours */}
            <div className="space-y-8">
              <div className="flex items-start">
                <span className="text-2xl text-blue-400 mr-3">📍</span>
                <div>
                  <h3 className="font-bold text-xl">Our Location</h3>
                  <p className="text-gray-400 text-base leading-relaxed">
                    Shop no 10, Upper ground, Abc Nirman Building, Dange Chowk
                    Rd, Gujar Nagar, Sai Colony, Thergaon, Pimpri-Chinchwad,
                    Pune, Maharashtra 411033
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <span className="text-2xl text-green-400 mr-3">⏰</span>
                <div>
                  <h3 className="font-bold text-xl">Store Hours</h3>
                  <p className="text-gray-400 text-base leading-relaxed">
                    Mon - Sat: 9:00 AM - 7:00 PM <br />
                    Sunday: 11:00 AM - 5:00 PM
                  </p>
                </div>
              </div>
            </div>

            {/* Contact & Socials */}
            <div className="space-y-8">
              <div className="flex items-start">
                <span className="text-2xl text-purple-400 mr-3">📞</span>
                <div>
                  <h3 className="font-bold text-xl">Contact Us</h3>
                  <p className="text-gray-400 text-base leading-relaxed">
                    <a href={`tel:${phoneNumber}`} className="hover:underline">
                      {phoneNumber}
                    </a>
                    <br />
                    <a
                      href="http://computertownstore.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      computertownstore.com
                    </a>
                  </p>
                </div>
              </div>

              {/* Connect With Us */}
              <div className="flex items-start">
                <span className="text-2xl text-pink-400 mr-3">
                  <FaShareAlt />
                </span>
                <div>
                  <h3 className="font-bold text-xl mb-4">Connect With Us</h3>
                  <div className="flex space-x-8 justify-center md:justify-start">
                    <a
                      href="https://www.instagram.com/computer_town9637170075?igsh=MW85dXUzYW1lcmlrZQ=="
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-pink-500 text-3xl"
                    >
                      <FaInstagram />
                    </a>
                    <a
                      href="https://www.facebook.com/yourcomputertown"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-blue-600 text-3xl"
                    >
                      <FaFacebook />
                    </a>
                    <a
                      href={`https://wa.me/${9637170075}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-green-500 text-3xl"
                    >
                      <FaWhatsapp />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="relative z-10 bg-gray-900 border-t border-gray-800 py-8 text-center">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-gray-400 text-base mb-2">
            © {new Date().getFullYear()} Computer Town. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm">
            Designed & Built with ❤️ by Computer Town Team
          </p>
        </div>
      </footer>
    </div>
  );
};

export default AboutUsPage;
