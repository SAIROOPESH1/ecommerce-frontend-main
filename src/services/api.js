import axios from "axios";

const API = axios.create({
  baseURL: "ecommerce-backend-main-production-f6a2.up.railway.app/api"
});

export default API;
