import axiosInstance from "configs/AxiosInstance";

const APIReview = {
  async getAllReview() {
    try {
      const response = await axiosInstance.get("/admin/review");
      console.log(response);
      return response;
    } catch (err) {
      console.log(err);
    }
  },

  async updateReview(data) {
    try {
      const id = data.id;
      const response = await axiosInstance.patch(`/promo/${id}`);
      console.log(response);
      return response;
    } catch (err) {
      console.log(err);
    }
  },
};

export default APIReview;
