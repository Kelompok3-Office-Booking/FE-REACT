import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import contohReducer from "hooks";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import { configureStore } from "@reduxjs/toolkit";

const persistConfig = {
    key: "contoh",
    storage,
}

const rootReducer = combineReducers({
    data: contohReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer
});

export const persistor = persistStore(store);