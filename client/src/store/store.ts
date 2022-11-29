import { configureStore } from '@reduxjs/toolkit';
import openSidebarReducer from '../reducers/sidebar.reducer';
import thunkMiddleware from 'redux-thunk';

const store = configureStore({
  reducer: { openSidebarReducer },
  middleware: [thunkMiddleware]
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
