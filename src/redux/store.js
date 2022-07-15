import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./slicetodo";

export const store = configureStore({
    reducer:{
        tasks: taskReducer,
    }
});