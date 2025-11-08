// src/pages/AdminDashboard.jsx
import { useState } from "react";
import API from "../api/api";

export default function AdminDashboard() {
  const [form, setForm] = useState({ brand: "", model: "", price: "", specs: "" });
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("brand", form.brand);
    formData.append("model", form.model);
    formData.append("price", form.price);
    formData.append("specs", form.specs);
    if (file) formData.append("image", file);

    try {
      await API.post("/laptops", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setMessage("✅ Laptop added successfully!");
    } catch (err) {
      setMessage("❌ Failed to add laptop (check login)");
    }
  };

  return (
    <div className="p-6 bg-gray-900 min-h-screen text-white">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded-lg shadow-lg w-96">
        <input
          type="text"
          name="brand"
          placeholder="Brand"
          value={form.brand}
          onChange={handleChange}
          className="w-full mb-3 p-2 rounded bg-gray-700"
        />
        <input
          type="text"
          name="model"
          placeholder="Model"
          value={form.model}
          onChange={handleChange}
          className="w-full mb-3 p-2 rounded bg-gray-700"
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={form.price}
          onChange={handleChange}
          className="w-full mb-3 p-2 rounded bg-gray-700"
        />
        <textarea
          name="specs"
          placeholder="Specifications"
          value={form.specs}
          onChange={handleChange}
          className="w-full mb-3 p-2 rounded bg-gray-700"
        />
        <input
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
          className="w-full mb-3 text-sm text-gray-300"
        />
        <button type="submit" className="w-full bg-green-500 py-2 rounded hover:bg-green-600">
          Add Laptop
        </button>
        <p className="mt-3">{message}</p>
      </form>
    </div>
  );
}
