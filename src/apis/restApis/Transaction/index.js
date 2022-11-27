import axiosInstance from "configs/AxiosInstance";

const APITransaction = {
  async getAllTransaction() {
    try {
      const response = await axiosInstance.get("/transaction");
      return response;
    } catch (error) {
      console.log(error);
    }
  },
  async updateTransaction(data) {
    try {
      const id = data.id;
      const response = await axiosInstance.patch(`/transaction/${id}`, data);
      return response;
    } catch (error) {
      console.log(error);
    }
  },

  async deleteTransaction(id) {
    try {
      const response = await axiosInstance.delete(`/transaction/${id}`);
      return response;
    } catch (error) {
      console.log(error);
    }
  },
};

export default APITransaction;
