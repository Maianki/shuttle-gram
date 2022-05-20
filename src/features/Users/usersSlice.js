import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAllUsersService } from "services";

const initialState = {
  currentUser: null,
  userPosts: [],
  allUsers: [],
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
  },
});

const { reducer, actions } = usersSlice;

export default reducer;
