import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: 1,
  name: "MD Shahed",
  email: "shahed@gmail.com",
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {},
});

export default userSlice.reducer;
