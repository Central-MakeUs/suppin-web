import { configureStore } from '@reduxjs/toolkit';
import userReducer from '@/store/user';
import surveyReducer from '@/store/survey';
import winnerReducer from '@/store/winner';
import termsReducer from '@/store/signup/terms';
import emailReducer from '@/store/signup/email';
import signupReducer from '@/store/signup/signup';

const store = configureStore({
  reducer: {
    login: userReducer,
    survey: surveyReducer,
    winner: winnerReducer,
    terms: termsReducer,
    email: emailReducer,
    signup: signupReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
