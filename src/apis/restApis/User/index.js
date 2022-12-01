import axiosInstance from "configs/AxiosInstance";

const APIUser = {
  async getAllUsers() {
    try {
      const response = await axiosInstance.get("/betterspace");
      return response;
    } catch (error) {
      console.log(error);
    }
  },

  async updateUsers(data) {
    try {
      const id = data.id;
      const response = await axiosInstance.patch(`/betterspace/${id}`, data);
      return response;
    } catch (error) {
      console.log(error);
    }
  },

  async deleteUsers(id) {
    try {
      const response = await axiosInstance.delete(`/betterspace/${id}`);
      return response;
    } catch (error) {
      console.log(error);
    }
  },
};

export default APIUser;
