import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import APIUser from "apis/restApis/User";

const initialState = {
  data: [],
  loading: false,
  token: null,
};

export const fetchUser = createAsyncThunk("fetchUser/users", async () => {
  try {
    const res = await APIUser.getAllUsers();
    return res.data;
  } catch (error) {
    console.log(error);
  }
});

export const updateUser = createAsyncThunk("updateUser/user", async (data) => {
  try {
    const res = await APIUser.updateUsers(data);
    return res.data.update_betterspace_user;
  } catch (error) {
    console.log(error);
  }
});

export const deleteUser = createAsyncThunk("delete/user", async (id) => {
  try {
    const res = await APIUser.deleteUsers(id);
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
});

const userSlice = createSlice({
  name: "users",
  initialState,
  extraReducers(builder) {
    builder
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.data = action.payload;
        state.token = action.payload;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.data = state.data.map((val) => {
          if (val.id === action.payload.id) {
            return action.payload;
          }
          return val;
        });
        state.currentDetail = action.payload;
        state.loading = false;
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.fetchStatus = !state.fetchStatus;
        state.data = state.data.filter((item) => item.id !== action.payload.id);
      });
  },
});

export default userSlice.reducer;
