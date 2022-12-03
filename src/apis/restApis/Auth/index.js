import axios from "axios";
import axiosInstance from "configs/AxiosInstance";
import Auth from "utils/auth";

const APIAuth = {
  async signin(payload) {
    try {
      const { email, password } = payload;
      const response = await axios.post(
        "https://api-better-space-staging.herokuapp.com/api/v1/login",
        { email, password }
      );
      console.log(response.data);
      Auth.storeUserInfoToCookie(response.data);
      return response.data;
    } catch (error) {
      const { message } = error.response.data;
      throw new Error(message);
    }
  },
};

export default APIAuth;
