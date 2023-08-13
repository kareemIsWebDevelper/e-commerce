import { combineReducers } from '@reduxjs/toolkit';
import userReducer from './userSlice';
// import otherReducer from './otherSlice';

const rootReducer = combineReducers({
  user: userReducer,
//   other: otherReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;