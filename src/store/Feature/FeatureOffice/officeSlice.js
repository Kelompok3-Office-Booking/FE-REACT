import {
  createAsyncThunk,
  createSlice,
  createEntityAdapter,
} from "@reduxjs/toolkit";
import APIOffice from "apis/restApis/Office";

// const initialState = {
//     data: [],
//     loading: false,
//     status : "idle",
//     error :
// };

export const fetchOffice = createAsyncThunk("fetch/office", async () => {
  try {
    const res = await APIOffice.getAllOffice();
    console.log(res.data.data);
    return res.data.data;
  } catch (err) {
    console.log(err);
  }
});

export const createOffice = createAsyncThunk("create/office", async (data) => {
  try {
    const res = await APIOffice.createOffice();
    console.log(res.data);
    return res.data;
  } catch (err) {
    console.log(err);
  }
});

export const updateOffice = createAsyncThunk("update/office", async (data) => {
  try {
    const res = await APIOffice.updateOffice(data);
    console.log(res);
    return res.data;
  } catch (err) {
    console.log(err);
  }
});

export const deleteOffice = createAsyncThunk("delete/office", async (id) => {
  try {
    const res = await APIOffice.deleteOffice(id);
    console.log(res);
    return res;
  } catch (err) {
    console.log(err);
  }
});

const OfficesEntity = createEntityAdapter({
  selectId: (offices) => offices.id,
});
console.log(OfficesEntity.getInitialState());

const officeSlice = createSlice({
  name: "office",
  initialState: OfficesEntity.getInitialState(),
  extraReducers: {
    [fetchOffice.pending]: (state, action) => {
      state.status = "Pending";
    },
    [fetchOffice.fulfilled]: (state, action) => {
      state.status = "Succeeded";
      OfficesEntity.setAll(state, action.payload);
    },
    [fetchOffice.rejected]: (state, action) => {
      state.status = "Rejected";
      state.error = "Error";
    },
    [createOffice.pending]: (state, action) => {
      state.status = "Pending";
    },
    [createOffice.fulfilled]: (state, action) => {
      state.status = "Succeeded";
      OfficesEntity.addOne(state, action.payload);
    },
    [createOffice.rejected]: (state, action) => {
      state.status = "Rejected";
      state.error = "Error";
    },
    [deleteOffice.pending]: (state, action) => {
      state.status = "Pending";
    },
    [deleteOffice.fulfilled]: (state, action) => {
      state.status = "Succeeded";
      OfficesEntity.removeOne(state, action.payload);
    },
    [deleteOffice.rejected]: (state, action) => {
      state.status = "Rejected";
      state.error = "Error";
    },
  },
});
// const officeSlice = createSlice({
//   name: "office",
//   initialState: OfficesEntity.getInitialState(),
//   extraReducers(builder) {
//     builder
//       .addCase(fetchOffice.fulfilled, (state, action) => {
//         state.data = action.payload;
//       })
//       .addCase(updateOffice.fulfilled, (state, action) => {
//         state.data = state.data.map((val) => {
//           if (val.id === action.payload.id) {
//             return action.payload;
//           }
//           return val;
//         });
//         state.currentDetail = action.payload;
//         state.loading = false;
//       })
//       .addCase(createOffice.fulfilled, (state, action) => {
//         state.fetchStatus = !state.fetchStatus;
//         state.data = state.data.filter((item) => item.id !== action.payload.id);
//       });
//   },
// });

export const OfficesSelectors = OfficesEntity.getSelectors(
  (state) => state.office
);

export default officeSlice.reducer;
