import { configureStore } from "@reduxjs/toolkit";
import linkReducer from "@/redux/slices/linkSlice";

export const store = configureStore({
  reducer: {
    links: linkReducer, // ✅ Make sure it's registered here
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
