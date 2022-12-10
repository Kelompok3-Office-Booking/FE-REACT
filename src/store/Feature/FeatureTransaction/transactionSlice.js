import {
  createAsyncThunk,
  createSlice,
  createEntityAdapter,
} from "@reduxjs/toolkit";
import APITransaction from "apis/restApis/Transaction";

// const initialState = {
//     data: [],
//     loading: false,
//     status : "idle",
//     error : null,
// };

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
    } catch (error) {
      console.log(error);
    }
  }
);

const transactionEntity = createEntityAdapter({
  selectId: (transaction) => transaction.id,
});

const transactionSlice = createSlice({
  name: "transactions",
  initialState: transactionEntity.getInitialState(),
  extraReducers: {
    [fetchTransaction.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchTransaction.fulfilled]: (state, action) => {
      transactionEntity.setAll(state, action.payload);
    },
    [fetchTransaction.rejected]: (state, action) => {
      state.state = "Failed";
      state.error = "Error";
    },
    [updateTransaction.pending]: (state, action) => {
      state.status = "loading";
    },
    [updateTransaction.fulfilled]: (state, action) => {
      transactionEntity.updateOne(state, {
        id: action.payload.id,
        updates: action.payload,
      });
    },
    [updateTransaction.rejected]: (state, action) => {
      state.state = "Failed";
      state.error = "Error";
    },
    [deleteTransaction.pending]: (state, action) => {
      state.status = "loading";
    },
    [deleteTransaction.fulfilled]: (state, action) => {
      transactionEntity.removeOne(state, action.payload);
    },
    [deleteTransaction.rejected]: (state, action) => {
      state.state = "Failed";
      state.error = "Error";
    },
  },
  // extraReducers(builder) {
  //     builder
  //         .addCase(fetchTransaction.fulfilled, (state, action) => {
  //             state.data = action.payload;
  //         })
  //         .addCase(updateTransaction.fulfilled, (state, action) => {
  //             state.data = state.data.map((val) => {
  //                 if (val.id === action.payload.id) {
  //                     return action.payload;
  //                 }
  //                 return val;
  //             });
  //             state.currentDetail = action.payload;
  //             state.loading = false;
  //         })
  //         .addCase(deleteTransaction.fulfilled, (state, action) => {
  //             state.fetchStatus = !state.fetchStatus;
  //             state.data = state.data.filter((item) => item.id !== action.payload.id);
  //         });
  // },
});

export const transactionSelectors = transactionEntity.getSelectors(
  (state) => state.transaction
);
export default transactionSlice.reducer;
