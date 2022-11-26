import axios from "axios";
import CONST from "utils/constant";

const config = {
    baseURL: CONST.BASE_URL,
    header: { "": "" },
};

const axiosInstance = axios.create(config);

export default axiosInstance;