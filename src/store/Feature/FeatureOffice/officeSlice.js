import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import APIOffice from "apis/restApis/Office";

const initialState = {
    data: [],
    loading: false,
};

export const fetchOffice = createAsyncThunk("fetch/office", async() => {
    try {
        const res = await APIOffice.getAllOffice();
        return res.data.office;
    } catch (err) {
        console.log(err);
    }
});

export const createOffice = createAsyncThunk("create/office", async(data) => {
    try {
        const res = await APIOffice.createOffice();
        console.log(res);
        return res.data;
    } catch (err) {
        console.log(err);
    }
});

export const updateOffice = createAsyncThunk("update/office", async(data) => {
    try {
        const res = await APIOffice.updateOffice(data);
        console.log(res);
        return res.data;
    } catch (err) {
        console.log(err);
    }
});

export const deleteOffice = createAsyncThunk("delete/office", async(id) => {
    try {
        const res = await APIOffice.deleteOffice(id);
        console.log(res);
        return res;
    } catch (err) {
        console.log(err);
    }
});

const officeSlice = createSlice({
    name: "office",
    initialState,
    extraReducers(builder) {
        builder
            .addCase(fetchOffice.fulfilled, (state, action) => {
                state.data = action.payload;
            })
            .addCase(updateOffice.fulfilled, (state, action) => {
                state.data = state.data.map((val) => {
                    if (val.id === action.payload.id) {
                        return action.payload;
                    }
                    return val;
                });
                state.currentDetail = action.payload;
                state.loading = false;
            })
            .addCase(createOffice.fulfilled, (state, action) => {
                state.fetchStatus = !state.fetchStatus;
                state.data = state.data.filter((item) => item.id !== action.payload.id);
            });
    },
});

export default officeSlice.reducer;