import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  demo: null,
};

const demoSlice = createSlice({
  name: "demo",

  initialState,
  reducers: {
    demoRedu: (state, action) => {
      state.demo = action.payload.demo;
    },
  },
});

export default demoSlice.reducer;
export const { demoRedu } = demoSlice.actions;
