import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  demo: null,
};

const demoSlice = createSlice({
  name: "sidebar toggle",
<<<<<<< HEAD
=======

>>>>>>> omur
  initialState,
  reducers: {
    demoRedu: (state, action) => {
      state.demo = action.payload.demo;
    },
  },
});

export default demoSlice.reducer;
export const { demoRedu } = demoSlice.actions;
