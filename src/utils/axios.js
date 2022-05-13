import axios from "axios";

// CREATING A INSTANCE TO STORE DEFAULT PARAMS AND API PATH FROM ENV
const instance = axios.create({
  baseURL: process.env.REACT_APP_API_PATH,
  params: {
    ts: 1,
    apikey: process.env.REACT_APP_PUBLIC_API_KEY,
    hash: process.env.REACT_APP_HASH_API_KEY,
  },
  headers: { "Content-Type": "application/json" },
  timeout: 30000,
});

export default instance;
