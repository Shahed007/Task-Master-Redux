import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  task: [
    {
      id: 1,
      status: "pending",
      title: "Remove Button",
      description:
        "We need a remove button in our task card. Meke the button red and use Heroicon for tashbin icon.",
      date: "2023-08-28",
      assignedTo: "Mir Hussain",
      priority: "high",
    },
  ],
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
      const filteredTask = state.task.filter((item) => item.id !== payload);
      state.task = filteredTask;
    },
    updateStatus: (state, { payload }) => {
      const statusUpdate = state.task.find((item) => item.id === payload.id);
      statusUpdate.status = payload.status;
    },
  },
});

export const { addTask, removeTask, updateStatus } = tskSlice.actions;

export default tskSlice.reducer;
