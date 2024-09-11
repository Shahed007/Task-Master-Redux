import { configureStore } from "@reduxjs/toolkit";
import taskSlice from "./featuers/task/taskSlice";

const store = configureStore({
  reducer: {
    taskSlice: taskSlice,
  },
});

export default store;
