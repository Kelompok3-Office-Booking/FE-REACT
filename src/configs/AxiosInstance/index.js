import axios from "axios";
import Auth from "utils/auth";
import CONST from "utils/constant";
// import {
//   errorHandler,
//   requestHandler,
//   successHandler,
// } from "configs/Interceptors";
let token = Auth.getAccessToken();
// console.log(token);
const config = {
    baseURL: CONST.BASE_URL,
    headers: { Authorization: `Bearer ${token}` },
};

const axiosInstance = axios.create(config);
// axiosInstance.interceptors.request.use((request) => requestHandler(request));

// axiosInstance.interceptors.request.use(
//   (response) => successHandler(response),
//   (error) => errorHandler(error)
// );
export default axiosInstance;