import axios from "axios";

const api = axios.create({
  baseURL: "https://mern-booking-backend-sov6.onrender.com/api/hotels", // Match your backend route
});

export default api;