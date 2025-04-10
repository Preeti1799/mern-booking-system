import axios from "axios";

const api = axios.create({
  baseURL: "https://mern-booking-system-1.onrender.com/api",
});

export default api;
