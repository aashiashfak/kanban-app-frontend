import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./userReducer";
import taskSlice from "./taskSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    tasks: taskSlice
  },
});
