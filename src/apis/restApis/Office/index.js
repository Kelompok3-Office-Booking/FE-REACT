import axiosInstance from "configs/AxiosInstance";

const APIOffice = {
  async getAllOffice() {
    try {
      const response = await axiosInstance.get("/admin/offices/all");
      return response;
    } catch (err) {
      console.log(err);
    }
  },

  async createOffice(data) {
    try {
      const response = await axiosInstance.post("/admin/offices/create", data);
      console.log(response);
      return response;
    } catch (err) {
      console.log(err);
    }
  },

  async updateOffice(data) {
    try {
      const id = data.id;
      const response = await axiosInstance.put(
        `/admin/offices/update/${id}`,
        data
      );
      console.log(response);
      return response;
    } catch (err) {
      console.log(err);
    }
  },

  async deleteOffice(id) {
    try {
      const response = await axiosInstance.delete(
        `/admin/offices/delete/${id}`
      );
      return response;
    } catch (err) {
      console.log(err);
    }
  },
};

export default APIOffice;
