import axios from "axios";
import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";
import Auth from "utils/auth";
import CONST from "utils/constant";

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

axios.interceptors.response.use(
    (response) => {
        return response;
    },
    function(error) {
        const originalRequest = error.config;
        if (error.response.status === 401) {
            Navigate("/login");
            return Promise.reject(error);
        }
        if (error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;
            const refreshToken = Cookies.setToken("refresh");
            return axios
                .post("/login", {
                    refresh_token: refreshToken,
                })
                .then((res) => {
                    if (res.status === 201) {
                        // Cookies.setToken(res.data);
                        Cookies.set("token", res.data);
                        config.headers["Authorization"] = `Bearer ${Auth.getAccessToken()}`;
                        return axios(originalRequest);
                    }
                });
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;