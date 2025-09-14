import axios from "axios";

const API_URL = "http://localhost:5000/api/laptops";

// Get all laptops
export const getLaptops = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

// Get single laptop
export const getLaptopById = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};

// Add new laptop
export const addLaptop = async (laptopData) => {
  const response = await axios.post(API_URL, laptopData);
  return response.data;
};
