import {
  createAsyncThunk,
  createSlice,
  createEntityAdapter,
} from "@reduxjs/toolkit";
import APIOffice from "apis/restApis/Office";

const initialState = {
  data: [],
  loading: false,
  status: "idle",
  error: null,
};

export const fetchOffice = createAsyncThunk("fetch/office", async () => {
  try {
    const res = await APIOffice.getAllOffice();
    return res.data.data;
  } catch (err) {
    console.log(err);
  }
});

export const createOffice = createAsyncThunk(
  "create/office",
  async (formData) => {
    try {
      const res = await APIOffice.createOffice(formData);
      return res;
    } catch (err) {
      console.log(err);
    }
  }
);

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

const officeSlice = createSlice({
  name: "office",
  initialState,
  extraReducers(builder) {
    builder
      .addCase(fetchOffice.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchOffice.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchOffice.rejected, (state, action) => {
        state.status = "failed";
      })
      .addCase(updateOffice.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(updateOffice.fulfilled, (state, action) => {
        state.data = state.data.map((val) => {
          if (val.id === action.payload.id) {
            return action.payload;
          }
          return val;
        });
        state.loading = false;
      })
      .addCase(updateOffice.rejected, (state, action) => {
        state.status = "failed";
      })
      .addCase(deleteOffice.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(deleteOffice.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = state.data.filter((item) => item.id !== action.payload.id);
      })
      .addCase(deleteOffice.rejected, (state, action) => {
        state.status = "failed";
      });
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

// export const OfficesSelectors = OfficesEntity.getSelectors(
//   (state) => state.office
// );

export default officeSlice.reducer;
