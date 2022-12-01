import axiosInstance from "configs/AxiosInstance";

const APIOffice = {
    async getAllOffice() {
        try {
            const response = await axiosInstance.get("/office");
            console.log(response);
            return response;
        } catch (err) {
            console.log(err);
        }
    },

    async createOffice() {
        try {
            const response = await axiosInstance.post("/office");
            console.log(response);
            return response;
        } catch (err) {
            console.log(err);
        }
    },

    async updateOffice(data) {
        try {
            const id = data.id;
            const response = await axiosInstance.patch(`/office/${id}`);
            console.log(response);
            return response;
        } catch (err) {
            console.log(err);
        }
    },

    async deleteOffice(id) {
        try {
            const response = await axiosInstance.delete(`/office/${id}`);
            return response;
        } catch (err) {
            console.log(err);
        }
    },
};

export default APIOffice;