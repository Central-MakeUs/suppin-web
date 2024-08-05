import signupReducer from '@/store/signup/signup';
import termsReducer from '@/store/signup/terms';
import surveyReducer from '@/store/survey';
import userReducer from '@/store/user';
import winnerReducer from '@/store/winner';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    login: userReducer,
    survey: surveyReducer,
    winner: winnerReducer,
    terms: termsReducer,
    signup: signupReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
