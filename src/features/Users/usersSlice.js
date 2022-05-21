import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getAllUsersService,
  getAllBookmarksService,
  addToBookmarksService,
  removeFromBookmarksService,
} from "services";

const initialState = {
  currentUser: null,
  userPosts: [],
  allUsers: [],
  allBookmarks: [],
  usersStatus: "idle",
  usersError: null,
};

export const getAllUsers = createAsyncThunk(
  "users/getAllUsers",
  async (_, { rejectWithValue }) => {
    try {
      const response = await getAllUsersService();
      if (response.status === 200) {
        return response.data.users;
      }
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const getAllBookmarks = createAsyncThunk(
  "users/getAllBookmarks",
  async ({ token }, { rejectWithValue }) => {
    try {
      const response = await getAllBookmarksService(token);
      if (response.status === 200) {
        return response.data.bookmarks;
      }
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const addToBookmarks = createAsyncThunk(
  "users/addToBookmarks",
  async ({ token, postId }, { rejectWithValue }) => {
    try {
      const response = await addToBookmarksService(token, postId);
      if (response.status === 200) {
        return response.data.bookmarks;
      }
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const removeFromBookmarks = createAsyncThunk(
  "users/removeFromBookmarks",
  async ({ token, postId }, { rejectWithValue }) => {
    try {
      console.log(token, postId);
      const response = await removeFromBookmarksService(token, postId);
      if (response.status === 200) {
        return response.data.bookmarks;
      }
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.data);
    }
  }
);

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: {
    [getAllUsers.pending]: (state) => {
      state.usersStatus = "loading";
    },
    [getAllUsers.fulfilled]: (state, { payload }) => {
      state.allUsers = payload;
      state.usersStatus = "success";
    },
    [getAllUsers.rejected]: (state, { payload }) => {
      console.log(payload);
      state.usersStatus = "rejected";
      state.postError = payload.errors;
    },
    [getAllBookmarks.pending]: (state) => {
      state.usersStatus = "loading";
    },
    [getAllBookmarks.fulfilled]: (state, { payload }) => {
      state.allBookmarks = payload;
      state.usersStatus = "success";
    },
    [getAllBookmarks.rejected]: (state, { payload }) => {
      console.log(payload);
      state.usersStatus = "rejected";
      state.postError = payload.errors;
    },
    [addToBookmarks.pending]: (state) => {
      state.usersStatus = "loading";
    },
    [addToBookmarks.fulfilled]: (state, { payload }) => {
      state.allBookmarks = payload;
      state.usersStatus = "success";
    },
    [addToBookmarks.rejected]: (state, { payload }) => {
      console.log(payload);
      state.usersStatus = "rejected";
      state.postError = payload.errors;
    },
    [removeFromBookmarks.pending]: (state) => {
      state.usersStatus = "loading";
    },
    [removeFromBookmarks.fulfilled]: (state, { payload }) => {
      state.allBookmarks = payload;
      state.usersStatus = "success";
    },
    [removeFromBookmarks.rejected]: (state, { payload }) => {
      console.log(payload);
      state.usersStatus = "rejected";
      state.postError = payload.errors;
    },
  },
});

const { reducer, actions } = usersSlice;

export default reducer;
