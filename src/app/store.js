import { configureStore } from "@reduxjs/toolkit";
import authReducer from "features/Auth/authSlice";
import postsReducer from "features/Post/postSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    posts: postsReducer,
  },
});
