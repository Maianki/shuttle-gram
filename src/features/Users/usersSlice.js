import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  editUserService,
  getSingleUserService,
  getAllUsersService,
  getAllBookmarksService,
  addToBookmarksService,
  removeFromBookmarksService,
  addUserToFollowService,
  removeFromFollowService,
} from "services";

import { logout } from "features/Auth/authSlice";

const initialState = {
  currentUser: null,
  userPosts: [],
  allUsers: [],
  allBookmarks: [],
  followUsers: [],
  usersStatus: "idle",
  currentUserStatus: "idle",
  followUserStatus: "idle",
  currentUserError: null,
  usersError: null,
  followUserError: null,
};

export const getSingleUser = createAsyncThunk(
  "users/getSingleUser",
  async ({ username }, { rejectWithValue }) => {
    try {
      const response = await getSingleUserService(username);
      if (response.status === 200) {
        return response.data.user;
      }
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const editUser = createAsyncThunk(
  "users/editUser",
  async ({ token, userData }, { rejectWithValue }) => {
    try {
      const response = await editUserService(token, userData);
      if (response.status === 201) {
        return response.data.user;
      }
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

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

export const addUserToFollow = createAsyncThunk(
  "users/addUserToFollow",
  async ({ token, followUserId }, { rejectWithValue }) => {
    try {
      const response = await addUserToFollowService(token, followUserId);

      if (response.status === 200) {
        return {
          user: response.data.user,
          followUser: response.data.followUser,
          userId: response.data.user._id,
        };
      }
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.data);
    }
  }
);

export const removeUserFromFollow = createAsyncThunk(
  "users/removeUserFromFollow",
  async ({ token, followUserId }, { rejectWithValue }) => {
    try {
      const response = await removeFromFollowService(token, followUserId);
      console.log(response);
      if (response.status === 200) {
        return {
          user: response.data.user,
          followUser: response.data.followUser,
          userId: response.data.user._id,
        };
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
    [getSingleUser.pending]: (state) => {
      state.currentUserStatus = "loading";
    },
    [getSingleUser.fulfilled]: (state, { payload }) => {
      state.currentUser = payload;
      state.currentUserStatus = "success";
    },
    [getSingleUser.rejected]: (state, { payload }) => {
      console.log(payload);
      state.currentUserStatus = "rejected";
      state.postError = payload.errors;
    },
    [editUser.pending]: (state) => {
      state.usersStatus = "loading";
    },
    [editUser.fulfilled]: (state, { payload }) => {
      state.currentUser = payload;
      state.usersStatus = "success";
    },
    [editUser.rejected]: (state, { payload }) => {
      console.log(payload);
      state.usersStatus = "rejected";
      state.postError = payload.errors;
    },
    [addUserToFollow.pending]: (state) => {
      state.followUserStatus = "loading";
    },
    [addUserToFollow.fulfilled]: (state, { payload }) => {
      state.allUsers = state.allUsers.map((user) =>
        user._id === payload.userId ? payload.user : user
      );

      state.followUsers = [...state.followUsers, payload.followUser];
      state.followUserStatus = "success";
    },
    [addUserToFollow.rejected]: (state, { payload }) => {
      state.followUserStatus = "rejected";
      state.followUserError = payload.errors;
    },
    [removeUserFromFollow.pending]: (state) => {
      state.followUserStatus = "loading";
    },
    [removeUserFromFollow.fulfilled]: (state, { payload }) => {
      state.allUsers = state.allUsers.filter(
        (user) => user._id !== payload.userId
      );

      state.followUsers = payload.user.following;
      state.followUserStatus = "success";
    },
    [removeUserFromFollow.rejected]: (state, { payload }) => {
      state.followUserStatus = "rejected";
      state.followUserError = payload.errors;
    },
    [logout]: (state) => {
      state.currentUser = null;
      state.userPosts = [];
      state.allUsers = [];
      state.allBookmarks = [];
      state.followUsers = [];
      state.usersStatus = "idle";
      state.currentUserStatus = "idle";
      state.followUserStatus = "idle";
      state.currentUserError = null;
      state.usersError = null;
      state.followUserError = null;
    },
  },
});

const { reducer, actions } = usersSlice;

export default reducer;
