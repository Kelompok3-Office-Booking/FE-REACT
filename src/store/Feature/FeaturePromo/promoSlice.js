import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import APIPromo from "apis/restApis/Promo";

const initialState = {
    data: [],
    loading: false,
};

export const fetchPromo = createAsyncThunk("fetch/promo", async() => {
    try {
        const res = await APIPromo.getAllPromo();
        return res.data.promo;
    } catch (err) {
        console.log(err);
    }
});

export const createPromo = createAsyncThunk("create/promo", async(data) => {
    try {
        const res = await APIPromo.createPromo();
        // console.log(res);
        return res.data;
    } catch (err) {
        console.log(err);
    }
});

export const updatePromo = createAsyncThunk("update/promo", async(data) => {
    try {
        const res = await APIPromo.updatePromo(data);
        console.log(res);
        return res.data;
    } catch (err) {
        console.log(err);
    }
});

export const deletePromo = createAsyncThunk("delete/promo", async(id) => {
    try {
        const res = await APIPromo.deletePromo(id);
        // console.log(res);
        return res;
    } catch (err) {
        console.log(err);
    }
});

const promoSlice = createSlice({
    name: "promo",
    initialState,
    extraReducers(builder) {
        builder
            .addCase(fetchPromo.fulfilled, (state, action) => {
                state.data = action.payload;
            })
            .addCase(updatePromo.fulfilled, (state, action) => {
                state.data = state.data.map((val) => {
                    if (val.id === action.payload.id) {
                        return action.payload;
                    }
                    return val;
                });
                state.currentDetail = action.payload;
                state.loading = false;
            })
            .addCase(createPromo.fulfilled, (state, action) => {
                // const { nominal, periode, voucher_code } = action.payload;
                state.data = action.payload;
            })
            .addCase(deletePromo.fulfilled, (state, action) => {
                state.fetchStatus = !state.fetchStatus;
                state.data = state.data.filter((item) => item.id !== action.payload.id);
            });
    },
});

export default promoSlice.reducer;