import { initialState, BACKEND_URL, LOCAL_STORAGE_KEY } from "./index";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { AppDispatch, AppThunk } from "../index";

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUserRequest: (state) => {
      state.isDisabled = true;
      state.loading = true;
      state.error = null;
      state.message = "";
    },
    loginUserSuccess: (state, action: PayloadAction<string>) => {
      state.isDisabled = false;
      state.loading = false;
      state.error = null;
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(action.payload));
      localStorage.setItem("isAuthenticated", action.payload);
    },
    loginUserFailure: (state, action: PayloadAction<string>) => {
      state.isDisabled = false;
      state.loading = false;
      state.error = action.payload;
      state.message = "";
    },
    logoutUser: () => {
      localStorage.removeItem("user");
      localStorage.setItem("isAuthenticated", "false");
    },
  },
});

export const { loginUserRequest, loginUserSuccess, loginUserFailure } =
  userSlice.actions;

export const userSignIn =
  (username: string, password: string): AppThunk =>
  async (dispatch: AppDispatch) => {
    dispatch(loginUserRequest());

    try {
      const response = await axios.post(`${BACKEND_URL}/user/login`, {
        username,
        password,
      });
      const userData = response.data;
      dispatch(loginUserSuccess(userData));
      dispatch(loginUserSuccess("true"));
    } catch (error) {
      dispatch(loginUserFailure((error as Error).message));
    }
  };

export const userSignUp =
  (username: string, password: string): AppThunk =>
  async (dispatch: AppDispatch) => {
    dispatch(loginUserRequest());

    try {
      const response = await axios.post(`${BACKEND_URL}/user/register`, {
        username,
        password,
      });
      const userData = response.data;
      dispatch(loginUserSuccess(userData));
      dispatch(loginUserSuccess("true"));
    } catch (error) {
      dispatch(loginUserFailure((error as Error).message));
    }
  };

export const userSignOut = async () => {
    dispatchEvent(logoutUser());
}

export default userSlice.reducer;

function logoutUser(): Event {
    throw new Error("Function not implemented.");
}

