import { configureStore } from "@reduxjs/toolkit";
import authReducer from "features/Auth/authSlice";
import postsReducer from "features/Post/postSlice";
import usersReducer from "features/Users/usersSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    posts: postsReducer,
    users: usersReducer,
  },
});
