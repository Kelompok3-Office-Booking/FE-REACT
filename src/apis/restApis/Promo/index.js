import axiosInstance from "configs/AxiosInstance";

const APIPromo = {
    async getAllPromo() {
        try {
            const response = await axiosInstance.get("/promo");
            console.log(response);
            return response;
        } catch (err) {
            console.log(err);
        }
    },

    async createPromo() {
        try {
            const response = await axiosInstance.post("/promo");
            console.log(response);
            return response;
        } catch (err) {
            console.log(err);
        }
    },

    async updatePromo(data) {
        try {
            const id = data.id;
            const response = await axiosInstance.patch(`/promo/:${id}`);
            console.log(response);
            return response;
        } catch (err) {
            console.log(err);
        }
    },

    async deletePromo(id) {
        try {
            const response = await axiosInstance.delete(`/promo/${id}`);
            return response;
        } catch (err) {
            console.log(err);
        }
    },
};

export default APIPromo;