import axios from "axios";
import { serverUrl } from "../utils/serverUrl";

const api = axios.create({
  baseURL: `${serverUrl}/api`,
});

api.interceptors.request.use((config) => {
  const token =
    JSON.parse(
      localStorage.getItem("auth-storage") || "{}"
    )?.state?.token;

  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default api;