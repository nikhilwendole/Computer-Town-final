import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import laptops from "../data/laptop.js";

const SlidersHorizontal = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="4" x2="20" y1="21" y2="21" />
    <line x1="4" x2="20" y1="3" y2="3" />
    <line x1="4" x2="20" y1="12" y2="12" />
    <line x1="6" x2="6" y1="9" y2="15" />
    <line x1="18" x2="18" y1="6" y2="9" />
    <line x1="18" x2="18" y1="15" y2="18" />
  </svg>
);

export default function BrandProducts() {
  const { brand } = useParams();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sortOption, setSortOption] = useState("price-asc");
  const [filters, setFilters] = useState({
    processor: [],
    ram: [],
    storage: [],
    touchscreen: [],
    price: [0, 200000],
  });

  const handleCheckbox = (category, value) => {
    setFilters((prev) => ({
      ...prev,
      [category]: prev[category].includes(value)
        ? prev[category].filter((item) => item !== value)
        : [...prev[category], value],
    }));
  };

  const clearFilters = () => {
    setFilters({
      processor: [],
      ram: [],
      storage: [],
      touchscreen: [],
      price: [0, 200000],
    });
  };

  // Brand filter (all laptops if no brand)
  const brandFiltered = brand
    ? laptops.filter((l) => l.brand.toLowerCase() === brand.toLowerCase())
    : laptops;

  // Apply filters
  const filteredLaptops = brandFiltered.filter((laptop) => {
    const matchProcessor =
      filters.processor.length === 0 ||
      filters.processor.some((p) =>
        laptop.processor.toLowerCase().includes(p.toLowerCase())
      );
    const matchRam =
      filters.ram.length === 0 ||
      filters.ram.some((r) => laptop.ram.toLowerCase().includes(r.toLowerCase()));
    const matchStorage =
      filters.storage.length === 0 ||
      filters.storage.some((s) =>
        laptop.storage.toLowerCase().includes(s.toLowerCase())
      );
    const matchTouch =
      filters.touchscreen.length === 0 ||
      (laptop.display &&
        filters.touchscreen.some((t) =>
          laptop.display.toLowerCase().includes(t.toLowerCase())
        ));
    const numericPrice = Number(laptop.price.replace(/[^0-9]/g, ""));
    const matchPrice =
      numericPrice >= filters.price[0] && numericPrice <= filters.price[1];
    return matchProcessor && matchRam && matchStorage && matchTouch && matchPrice;
  });

  // Sorting
  const sortedLaptops = [...filteredLaptops].sort((a, b) => {
    const priceA = Number(a.price.replace(/[^0-9]/g, ""));
    const priceB = Number(b.price.replace(/[^0-9]/g, ""));
    switch (sortOption) {
      case "price-asc":
        return priceA - priceB;
      case "price-desc":
        return priceB - priceA;
      case "name-asc":
        return a.name.localeCompare(b.name);
      case "name-desc":
        return b.name.localeCompare(a.name);
      default:
        return 0;
    }
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Laptop Card Component
  const LaptopCard = ({ laptop }) => (
    <div
      className="p-5 shadow-md rounded-xl bg-white cursor-pointer hover:shadow-xl transition transform hover:scale-[1.02]"
      onClick={() => navigate(`/product/${laptop.id}`)}
    >
      <img
        src={
          laptop.images && laptop.images.length > 0
            ? laptop.images[0]
            : "https://placehold.co/400x300/94a3b8/1e293b?text=No+Image"
        }
        alt={laptop.name}
        className="w-full h-48 object-contain rounded-lg"
      />
      <h2 className="text-lg font-semibold mt-4">{laptop.name}</h2>
      <p className="text-gray-500 mt-1">
        {laptop.processor} | {laptop.ram} RAM
      </p>
      <p className="text-green-600 font-bold mt-2">{laptop.price}</p>
    </div>
  );

  return (
   <div className="bg-gray-100 min-h-screen font-[Inter] pt-10 px-0">
  {/* Your content here */}


      <div className="max-w-9xl mx-auto px-0 lg:px-10 flex flex-col md:flex-row gap-8">
        {/* Sidebar */}
        <aside
          className={`w-full md:w-72 p-6 bg-white shadow-lg rounded-xl md:sticky top-6 h-fit transition-transform duration-300 transform md:translate-x-0 ${
            sidebarOpen
              ? "translate-x-0 fixed inset-y-0 left-0 z-20 overflow-y-auto"
              : "-translate-x-full fixed inset-y-0 left-0 md:static"
          }`}
        >
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Filters</h2>
            <button
              className="md:hidden text-gray-500"
              onClick={() => setSidebarOpen(false)}
            >
              ✕
            </button>
          </div>

          {/* Filters */}
          <div className="mb-4">
            <h3 className="font-semibold mb-2">Processor</h3>
            {["i3", "i5", "i7", "Ryzen 5", "Ryzen 7"].map((p) => (
              <label key={p} className="flex items-center space-x-2 mb-1">
                <input
                  type="checkbox"
                  checked={filters.processor.includes(p)}
                  onChange={() => handleCheckbox("processor", p)}
                />
                <span>{p}</span>
              </label>
            ))}
          </div>

          <div className="mb-4">
            <h3 className="font-semibold mb-2">RAM</h3>
            {["4GB", "8GB", "16GB"].map((r) => (
              <label key={r} className="flex items-center space-x-2 mb-1">
                <input
                  type="checkbox"
                  checked={filters.ram.includes(r)}
                  onChange={() => handleCheckbox("ram", r)}
                />
                <span>{r}</span>
              </label>
            ))}
          </div>

          <div className="mb-4">
            <h3 className="font-semibold mb-2">Storage</h3>
            {["256GB SSD", "512GB SSD", "1TB SSD"].map((s) => (
              <label key={s} className="flex items-center space-x-2 mb-1">
                <input
                  type="checkbox"
                  checked={filters.storage.includes(s)}
                  onChange={() => handleCheckbox("storage", s)}
                />
                <span>{s}</span>
              </label>
            ))}
          </div>

          <button
            onClick={clearFilters}
            className="mt-4 w-full py-2 bg-blue-600 text-white rounded-lg"
          >
            Clear Filters
          </button>
        </aside>

        {/* Products */}
        <div className="flex-1">
          <div className="flex justify-between items-center mb-6 flex-wrap gap-4">
            <h2 className="text-3xl font-bold">
              {brand ? brand : "All"} Laptops
            </h2>
            <div className="flex items-center gap-4 flex-wrap">
              <button
                className="flex items-center gap-1 px-3 py-2 border rounded md:hidden"
                onClick={() => setSidebarOpen(!sidebarOpen)}
              >
                <SlidersHorizontal /> Filters
              </button>
              <select
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
                className="border rounded px-3 py-2"
              >
                <option value="price-asc">Price: Low → High</option>
                <option value="price-desc">Price: High → Low</option>
                <option value="name-asc">Name: A → Z</option>
                <option value="name-desc">Name: Z → A</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedLaptops.length > 0 ? (
              sortedLaptops.map((laptop) => (
                <LaptopCard key={laptop.id} laptop={laptop} />
              ))
            ) : (
              <p className="text-gray-500 col-span-full">No laptops found.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
