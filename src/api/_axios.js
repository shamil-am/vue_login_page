import axios from "axios";
import store from "../store";

const axiosInstance = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 0,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    store.commit("loader/show");
    return config;
  },
  (error) => {
    store.commit("loader/hide");
    return Promise.reject(error);
  }
);
axiosInstance.interceptors.response.use(
  (response) => {
    store.commit("loader/hide");
    return response;
  },
  async (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
