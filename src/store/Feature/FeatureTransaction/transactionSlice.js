import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import APITransaction from "apis/restApis/Transaction";

const initialState = {
  data: [],
  loading: false,
};

export const fetchTransaction = createAsyncThunk(
  "fetch/transaction",
  async () => {
    try {
      const res = await APITransaction.getAllTransaction();
      return res.data.transaction;
    } catch (error) {
      console.log(error);
    }
  }
);

export const updateTransaction = createAsyncThunk(
  "update/transaction",
  async (data) => {
    try {
      const res = await APITransaction.updateTransaction(data);
      console.log(res);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const deleteTransaction = createAsyncThunk(
  "delete/transaction",
  async (id) => {
    try {
      const res = await APITransaction.deleteTransaction(id);
      console.log(res);
      return res;
    } catch (error) {}
  }
);

const transactionSlice = createSlice({
  name: "transactions",
  initialState,
  extraReducers(builder) {
    builder
      .addCase(fetchTransaction.fulfilled, (state, action) => {
        state.data = action.payload;
      })
      .addCase(updateTransaction.fulfilled, (state, action) => {
        state.data = state.data.map((val) => {
          if (val.id === action.payload.id) {
            return action.payload;
          }
          return val;
        });
        state.currentDetail = action.payload;
        state.loading = false;
      })
      .addCase(deleteTransaction.fulfilled, (state, action) => {
        state.fetchStatus = !state.fetchStatus;
        state.data = state.data.filter((item) => item.id !== action.payload.id);
      });
  },
});

export default transactionSlice.reducer;
