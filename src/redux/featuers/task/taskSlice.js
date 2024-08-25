import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  task: null,
};

const tskSlice = createSlice({
  name: "taskSlice",
  initialState,
  reducers: {},
});

export default tskSlice.reducer;
