import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.1.67:3337",
});

export default api;
