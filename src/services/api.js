import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const fetchData = async (path, method, body) => {
  const url = `${API_BASE_URL}/${path}`
  const response = await api({ url, method, data: body });

  return response.json();
}