import axiosInstance from "configs/AxiosInstance";

const APIUser = {
  async getAllUsers() {
    try {
      const response = await axiosInstance.get("/admin/users");
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },

  async updateUsers(data) {
    try {
      const id = data.id;
      const response = await axiosInstance.patch(`/admin/user/${id}`, data);
      return response;
    } catch (error) {
      console.log(error);
    }
  },

  async deleteUsers(id) {
    try {
      const response = await axiosInstance.delete(`/admin/user/${id}`);
      return response;
    } catch (error) {
      console.log(error);
    }
  },
};

export default APIUser;
