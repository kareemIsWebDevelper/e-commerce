import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { AppThunk } from '../store';
import axios from 'axios';
import { RootState } from './rootReducer';

const BASE_URL = "http://localhost:10000";

interface UserState {
    loading: boolean;
    error: string | null;
    message: string;
}

const initialState: UserState = {
    loading: false,
    error: null,
    message: '',
};

const userSlice  = createSlice({
    name: 'user',
    initialState,
    reducers: {
        registerUserRequest: (state) => {
            state.loading = true;
            state.error = null;
            state.message = '';
        },
        registerUserSuccess: (state, action: PayloadAction<string>) => {
            state.loading = false;
            state.error = null;
            state.message = action.payload;
        },
        registerUserFailure: (state, action: PayloadAction<string>) => {
            state.loading = false;
            state.error = action.payload;
            state.message = '';
        },
    },
});

export const {
    registerUserRequest,
    registerUserSuccess,
    registerUserFailure,
} = userSlice.actions;

export const registerUser = (
  username: string,
  password: string
): AppThunk => async (dispatch: ThunkDispatch<RootState, unknown, AnyAction>) => {
    dispatch(registerUserRequest());

    try {
        
        const response = await axios.post(`${BASE_URL}/user/register`, {
            username, 
            password,
        });
        dispatch(registerUserSuccess(response.data.message));
    }
    catch (error) {
        dispatch(registerUserFailure((error as Error).message));
  }
};

export default userSlice.reducer;