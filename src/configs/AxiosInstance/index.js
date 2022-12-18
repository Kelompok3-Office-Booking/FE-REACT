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

axiosInstance.interceptors.response.use(
    (res) => {
        return res;
    },
    async(err) => {
        const originalConfig = err.config;

        if (originalConfig.url !== "auth/login" && err.response) {
            // Access Token was expired
            if (err.response.status === 401 && !originalConfig._retry) {
                originalConfig._retry = true;

                try {
                    const rs = await axiosInstance.post("/refresh", {
                        refreshToken: Auth.getRefreshToken(),
                    });
                    const data = rs.data;
                    Auth.storeUserInfoToCookie(data);
                    return axiosInstance(originalConfig);
                } catch (_error) {
                    return Promise.reject(_error);
                }
            }
        }

        return Promise.reject(err);
    }
);

export default axiosInstance;