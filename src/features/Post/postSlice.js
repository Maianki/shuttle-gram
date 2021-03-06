import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { logout } from "features/Auth/authSlice";

import {
  getPostsService,
  createPostService,
  deletePostService,
  editPostService,
  likePostService,
  getAllPostsOfSingleUserService,
  dislikePostService,
  addCommentsService,
  deleteCommentService,
} from "services";

const initialState = {
  userPosts: [],
  allPosts: [],
  filterBy: "allPosts",
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

export const getAllPostsOfSingleUser = createAsyncThunk(
  "posts/getAllPostsOfSpecificUser",
  async ({ username }, { rejectWithValue }) => {
    try {
      const response = await getAllPostsOfSingleUserService(username);
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
  async (postData, { rejectWithValue }) => {
    const token = JSON.parse(localStorage.getItem("SGtoken"));
    try {
      const response = await createPostService(token, postData);
      console.log(response);
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
  async ({ token, postId, content }, { rejectWithValue }) => {
    try {
      const response = await editPostService(token, postId, content);

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

export const addComment = createAsyncThunk(
  "posts/getAllComments",
  async ({ token, postId, commentData }, { rejectWithValue }) => {
    try {
      const response = await addCommentsService(token, postId, commentData);
      if (response.status === 201) {
        toast.success("comment added successfully");
        return { comments: response.data.comments, postId };
      }
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const deleteComment = createAsyncThunk(
  "posts/deleteComment",
  async ({ token, postId, commentId }, { rejectWithValue }) => {
    try {
      const response = await deleteCommentService(token, postId, commentId);

      if (response.status === 201) {
        toast.success("comment deleted successfully");
        return { comments: response.data.comments, postId };
      }
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const likePost = createAsyncThunk(
  "post/likePost",
  async ({ token, postId }, { rejectWithValue }) => {
    try {
      const response = await likePostService(token, postId);

      if (response.status === 201) {
        return response.data.posts;
      }
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const dislikePost = createAsyncThunk(
  "post/likePost",
  async ({ token, postId }, { rejectWithValue }) => {
    try {
      const response = await dislikePostService(token, postId);

      console.log(response.data.posts);
      if (response.status === 201) {
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
  reducers: {
    sortBy: (state, { payload }) => {
      state.filterBy = payload;
    },
  },
  extraReducers: {
    [getUserAllPosts.pending]: (state) => {
      state.postStatus = "loading";
    },
    [getUserAllPosts.fulfilled]: (state, { payload }) => {
      state.allPosts = payload;
      state.postStatus = "success";
    },
    [getUserAllPosts.rejected]: (state, { payload }) => {
      console.log(payload);
      state.postStatus = "rejected";
      state.postError = payload.errors;
    },
    [createUserPost.pending]: (state) => {
      state.postStatus = "loading";
    },
    [createUserPost.fulfilled]: (state, { payload }) => {
      state.allPosts = payload;
      state.postStatus = "success";
    },
    [createUserPost.rejected]: (state, { payload }) => {
      state.postStatus = "rejected";
      state.postError = payload.errors;
    },
    [editUserPost.pending]: (state, { payload }) => {
      state.postStatus = "loading";
    },
    [editUserPost.fulfilled]: (state, { payload }) => {
      state.allPosts = payload;
      state.postStatus = "success";
    },
    [editUserPost.rejected]: (state, { payload }) => {
      state.postStatus = "rejected";
      state.postError = payload.errors;
    },
    [deleteUserPost.pending]: (state, { payload }) => {
      state.postStatus = "loading";
    },
    [deleteUserPost.fulfilled]: (state, { payload }) => {
      state.allPosts = payload;
      state.postStatus = "success";
    },
    [deleteUserPost.rejected]: (state, { payload }) => {
      state.postStatus = "rejected";
      state.postError = payload.errors;
    },
    [getAllPostsOfSingleUser.pending]: (state, { payload }) => {
      state.postStatus = "loading";
    },
    [getAllPostsOfSingleUser.fulfilled]: (state, { payload }) => {
      state.userPosts = payload;
      state.postStatus = "success";
    },
    [getAllPostsOfSingleUser.rejected]: (state, { payload }) => {
      state.postStatus = "rejected";
      state.postError = payload.errors;
    },
    [deleteComment.pending]: (state) => {
      state.postStatus = "loading";
    },
    [deleteComment.fulfilled]: (state, { payload }) => {
      const postIndex = state.allPosts.findIndex(
        (post) => post._id === payload.postId
      );

      state.allPosts[postIndex].comments = payload?.comments;
      state.postStatus = "success";
    },
    [deleteComment.rejected]: (state, { payload }) => {
      state.postStatus = "rejected";
      state.postError = payload;
    },
    [addComment.pending]: (state) => {
      state.postStatus = "loading";
    },
    [addComment.fulfilled]: (state, { payload }) => {
      const postIndex = state.allPosts.findIndex(
        (post) => post._id === payload.postId
      );

      state.allPosts[postIndex].comments = payload?.comments;
      state.postStatus = "success";
    },
    [addComment.rejected]: (state, { payload }) => {
      state.postStatus = "rejected";
      state.postError = payload.errors;
    },
    [likePost.pending]: (state) => {
      state.postStatus = "loading";
    },
    [likePost.fulfilled]: (state, { payload }) => {
      state.allPosts = payload;
      state.postStatus = "success";
    },
    [likePost.rejected]: (state, { payload }) => {
      state.postStatus = "rejected";
      console.error(payload);
    },
    [dislikePost.pending]: (state) => {
      state.postStatus = "loading";
    },
    [dislikePost.fulfilled]: (state, { payload }) => {
      state.allPosts = payload;
      state.postStatus = "success";
    },
    [dislikePost.rejected]: (state, { payload }) => {
      state.postStatus = "rejected";
      console.error(payload);
    },
    [logout]: (state) => {
      state.userPosts = [];
      state.allPosts = [];
      state.filterBy = "allPosts";
      state.postStatus = "idle";
      state.postError = null;
    },
  },
});

const { reducer, actions } = postSlice;
export const { sortBy } = actions;

export default reducer;
