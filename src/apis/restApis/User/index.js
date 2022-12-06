import axiosInstance from "configs/AxiosInstance";
import Auth from "utils/auth";

const APIUser = {
    async getAllUsers() {
        try {
            // const config = { headers: { Authorization: `Bearer ${Auth.getAccessToken}` } };
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