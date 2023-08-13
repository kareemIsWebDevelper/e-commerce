import { configureStore } from "@reduxjs/toolkit";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import rootReducer, { RootState } from "./rootReducer";
import { AnyAction } from "redux";

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  AnyAction
>;

type AppDispatch = ThunkDispatch<RootState, unknown, AnyAction>;

const store = configureStore({
  reducer: rootReducer,
});

export { BACKEND_URL, store };
export type { AppThunk, AppDispatch };
