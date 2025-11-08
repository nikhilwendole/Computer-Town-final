import React, { useState } from "react";
import axios from "axios";

function AddProduct() {
  const [formData, setFormData] = useState({
    brand: "",
    name: "",
    processor: "",
    ram: "",
    storage: "",
    display: "",
    gpu: "",
    price: "",
    description: "",
    battery: "",
    ports: "",
    os: "",
    warranty: ""
  });
  const [images, setImages] = useState([]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setImages(e.target.files);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    if (!token) return alert("Please login first");

    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
    });
    for (let i = 0; i < images.length; i++) {
      data.append("images", images[i]);
    }

    try {
      await axios.post("http://localhost:5000/api/products", data, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });
      alert("Product added successfully");
    } catch (err) {
      alert("Failed to add product");
    }
  };

  return (
    <div>
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <input name="brand" placeholder="Brand" onChange={handleChange} /><br />
        <input name="name" placeholder="Name" onChange={handleChange} /><br />
        <input name="processor" placeholder="Processor" onChange={handleChange} /><br />
        <input name="ram" placeholder="RAM" onChange={handleChange} /><br />
        <input name="storage" placeholder="Storage" onChange={handleChange} /><br />
        <input name="display" placeholder="Display" onChange={handleChange} /><br />
        <input name="gpu" placeholder="GPU" onChange={handleChange} /><br />
        <input name="price" placeholder="Price" onChange={handleChange} /><br />
        <textarea name="description" placeholder="Description" onChange={handleChange}></textarea><br />
        <input name="battery" placeholder="Battery" onChange={handleChange} /><br />
        <input name="ports" placeholder="Ports" onChange={handleChange} /><br />
        <input name="os" placeholder="OS" onChange={handleChange} /><br />
        <input name="warranty" placeholder="Warranty" onChange={handleChange} /><br />
        <input type="file" multiple onChange={handleImageChange} /><br />
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}

export default AddProduct;
