import { configureStore } from '@reduxjs/toolkit';
import userReducer from '@/store/user';
import surveyReducer from '@/store/survey';

const store = configureStore({
  reducer: {
    login: userReducer,
    survey: surveyReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
