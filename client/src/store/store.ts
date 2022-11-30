import { configureStore } from '@reduxjs/toolkit';
import sidebar from '../reducers/sidebar.reducer';
import board from '../reducers/board.reducer';
import { initialState } from './initialState';
import thunkMiddleware from 'redux-thunk';

const store = configureStore({
  reducer: { sidebar, board, config: () => initialState },
  middleware: [thunkMiddleware]
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
