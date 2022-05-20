import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import {
  getPostsService,
  getSinglePostService,
  createPostService,
  deletePostService,
  editPostService,
  likePostService,
  dislikePostService,
  getAllCommentService,
  addCommentsService,
  editCommentsService,
  deleteCommentService,
} from "services";

const initialState = {
  userPosts: [],
  allPosts: [],
  likes: [],
  comments: [],
  postStatus: "idle",
  postError: null,
};

export const getUserAllPosts = createAsyncThunk(
  "posts/getUserAllPosts",
  async (_, { rejectWithValue }) => {
    try {
      const response = await getPostsService();
      if (response.status === 200) {
        return response.data.posts;
      }
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const createUserPost = createAsyncThunk(
  "posts/createUserPost",
  async ({ content }, { rejectWithValue }) => {
    const token = JSON.parse(localStorage.getItem("SGtoken"));
    try {
      const response = await createPostService(token, content);
      console.log(response.data.posts);
      if (response.status === 201) {
        toast.success("Post created successfully!");
        return response.data.posts;
      }
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const editUserPost = createAsyncThunk(
  "posts/editUserPost",
  async ({ token, postId, postData }, { rejectWithValue }) => {
    try {
      const response = await editPostService(token, postId, postData);

      if (response.status === 201) {
        toast.success("Post edited successfully");
        return response.data.posts;
      }
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const deleteUserPost = createAsyncThunk(
  "posts/deleteUserPost",
  async ({ token, postId }, { rejectWithValue }) => {
    try {
      const response = await deletePostService(token, postId);
      console.log(response);
      if (response.status === 201) {
        toast.success("Post deleted successfully");
        return response.data.posts;
      }
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: {
    [getUserAllPosts.pending]: (state) => {
      state.postStatus = "loading";
    },
    [getUserAllPosts.fulfilled]: (state, { payload }) => {
      state.allPosts = payload;
      state.authStatus = "success";
    },
    [getUserAllPosts.rejected]: (state, { payload }) => {
      console.log(payload);
      state.authStatus = "rejected";
      state.postError = payload.errors;
    },
    [createUserPost.pending]: (state) => {
      state.postStatus = "loading";
    },
    [createUserPost.fulfilled]: (state, { payload }) => {
      state.allPosts = payload;
      state.authStatus = "success";
    },
    [createUserPost.rejected]: (state, { payload }) => {
      console.log(payload);
      state.authStatus = "rejected";
      state.postError = payload.errors;
    },
    [editUserPost.pending]: (state, { payload }) => {
      state.postStatus = "loading";
    },
    [editUserPost.fulfilled]: (state, { payload }) => {
      state.allPosts = payload;
      state.authStatus = "success";
    },
    [editUserPost.rejected]: (state, { payload }) => {
      console.log(payload);
      state.authStatus = "rejected";
      state.postError = payload.errors;
    },
    [deleteUserPost.pending]: (state, { payload }) => {
      state.postStatus = "loading";
    },
    [deleteUserPost.fulfilled]: (state, { payload }) => {
      state.allPosts = payload;
      state.authStatus = "success";
    },
    [deleteUserPost.rejected]: (state, { payload }) => {
      console.log(payload);
      state.authStatus = "rejected";
      state.postError = payload.errors;
    },
  },
});

const { reducer, actions } = postSlice;

export default reducer;
