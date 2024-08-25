import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  task: [],
};

const tskSlice = createSlice({
  name: "taskSlice",
  initialState,
  reducers: {
    addTask: (state, { payload }) => {
      state.task.push(payload);
    },
  },
});

export const { addTask } = tskSlice.actions;

export default tskSlice.reducer;
