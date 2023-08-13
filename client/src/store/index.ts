import { configureStore, Action } from '@reduxjs/toolkit';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import rootReducer, { RootState } from './rootReducer';
import { AnyAction } from 'redux';


export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  AnyAction
>;

export type AppDispatch = ThunkDispatch<RootState, unknown, AnyAction>;

const store = configureStore({
  reducer: rootReducer,
});

export default store;