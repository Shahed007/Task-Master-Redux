import { configureStore } from "@reduxjs/toolkit";
import taskSlice from "./featuers/task/taskSlice";
import userSlice from "./featuers/user/userSlice";

const store = configureStore({
  reducer: {
    taskSlice: taskSlice,
    userSlice,
  },
});

export default store;
