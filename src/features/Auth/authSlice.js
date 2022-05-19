import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loginService, signupService } from "services";
import { toast } from "react-toastify";

const token = JSON.parse(localStorage?.getItem("SGtoken")) || null;
const user = JSON.parse(localStorage?.getItem("SGuser") || null);
const initialState = {
  userToken: token,
  user,
  authError: "",
  authStatus: "idle",
};

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await loginService(email, password);
      console.log(response);
      if (response.status === 200) {
        localStorage?.setItem(
          "SGtoken",
          JSON.stringify(response.data.encodedToken)
        );
        toast.success("You are logged in ", {
          position: "top-right",
          autoClose: 500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
      console.log(response);
      return response.data;
    } catch (error) {
      const { response } = error;
      console.log(error.response);
      toast.error(`${response.data.errors[0]}`, {
        position: "top-right",
        autoClose: 500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return rejectWithValue(error.response.data);
    }
  }
);

export const signupUser = createAsyncThunk(
  "auth/signupUser",
  async (userDetails, { rejectWithValue }) => {
    try {
      const response = await signupService(userDetails);
      if (response.status === 201) {
        console.log(response.data);
      }
      return response.data;
    } catch (error) {
      const { response } = error;
      console.log(error.response);
      toast.error(`${response.data.errors[0]}`, {
        position: "top-right",
        autoClose: 500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      return rejectWithValue(error.response.data);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      return { ...initialState };
    },
  },
  extraReducers: {
    [loginUser.pending]: (state) => {
      state.authStatus = "loading";
    },
    [loginUser.fulfilled]: (state, action) => {
      state.authStatus = "success";
      console.log("success here");
      state.userToken = action.payload.encodedToken;
      state.user = action.payload.foundUser;
    },
    [loginUser.rejected]: (state, action) => {
      console.log("here");
      state.authStatus = "rejected";
      state.authError = action.payload.errors;
    },
    [signupUser.pending]: (state) => {
      state.authStatus = "loading";
    },
    [signupUser.fulfilled]: (state, action) => {
      state.authStatus = "success";
      state.userToken = action.payload.encodedToken;
      state.user = action.payload.createdUser;
    },
    [signupUser.rejected]: (state, action) => {
      state.authStatus = "rejected";
      state.authError = action.payload.errors;
    },
  },
});

const { reducer, actions } = authSlice;

export default reducer;
export const { logout } = actions;
