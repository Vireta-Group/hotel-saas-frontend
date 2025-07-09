import { configureStore } from "@reduxjs/toolkit";
import demo from "../features/demo/demoSlice";

const store = configureStore({
  reducer: {
    demo: demo,
  },
});

export default store;
