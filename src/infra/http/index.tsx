import axios from "axios";


const api = axios.create({
  baseURL: "https://api.themoviedb.org/",
  headers: {
    "Content-type": "application/json",
  },
});

export default api;
