import axios from "axios";
import Auth from "utils/auth";
import CONST from "utils/constant";
// import {
//   errorHandler,
//   requestHandler,
//   successHandler,
// } from "configs/Interceptors";
// console.log(token);
const config = {
    baseURL: CONST.BASE_URL,
};
const axiosInstance = axios.create(config);

axiosInstance.interceptors.request.use(
    (config) => {
        config.headers["Authorization"] = `Bearer ${Auth.getAccessToken()}`;
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// axiosInstance.interceptors.request.use((request) => requestHandler(request));

// axiosInstance.interceptors.request.use(
//   (response) => successHandler(response),
//   (error) => errorHandler(error)
// );
export default axiosInstance;