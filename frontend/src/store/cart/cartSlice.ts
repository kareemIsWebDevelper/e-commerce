import axios from "axios";
import { AppDispatch, AppThunk, BACKEND_URL } from "..";
import { initialState } from "./index";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCartRequest: (state) => {
      state.isDisabled = true;
      state.isLoading = true;
      state.error = null;
      state.message = "";
    },
    addToCartSuccess: (state, action: PayloadAction<object>) => {
      state.isDisabled = false;
      state.isLoading = false;
      state.error = null;
      state.cartData = action.payload;
    },
    addToCartFailure: (state, action: PayloadAction<string>) => {
      state.isDisabled = false;
      state.isLoading = false;
      state.error = action.payload;
      state.message = "";
    },
  },
});

export const { addToCartRequest, addToCartSuccess, addToCartFailure } =
  cartSlice.actions;

export const addToCart =
  (productId: string): AppThunk =>
  async (dispatch: AppDispatch) => {
    try {
      const response = await axios.post(`${BACKEND_URL}/cart`, {
        productId,
      });

      dispatch(addToCartSuccess(response.data));
      console.log(response.data);
    } catch (error) {
      dispatch(addToCartFailure((error as Error).message));
    }
  };
