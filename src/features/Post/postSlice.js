import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

import {
  getPostsService,
  getSinglePostService,
  createPostService,
  deletePostService,
  editPostService,
  likePostService,
  getAllPostsOfSingleUserService,
  dislikePostService,
  addCommentsService,
  editCommentsService,
  deleteCommentService,
} from "services";

const initialState = {
  userPosts: [],
  allPosts: [],
  likes: [],
  comments: [],
  commentsStatus: [],
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
  },
});

const { reducer, actions } = postSlice;

export default reducer;
