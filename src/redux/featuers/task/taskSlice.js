import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  task: [],
};

const tskSlice = createSlice({
  name: "taskSlice",
  initialState,
  reducers: {
    addTask: (state, { payload }) => {
      console.log(payload);
      if (state.task.length === 0) {
        state.task.push({ id: 1, status: "pending", ...payload });
      } else {
        const lastElement = state.task.at(-1);
        state.task.push({
          id: lastElement.id + 1,
          status: "pending",
          ...payload,
        });
      }
    },
    removeTask: (state, { payload }) => {
      const filterTask = state.task.filter((item) => item.id !== payload);
      state.task = filterTask;
    },
  },
});

export const { addTask } = tskSlice.actions;

export default tskSlice.reducer;
