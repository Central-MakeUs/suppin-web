import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import signupReducer from '@/store/signup/signup';
import termsReducer from '@/store/signup/terms';
import surveyReducer from '@/store/survey';
import userReducer from '@/store/user';
import winnerReducer from '@/store/winner';
import datesReducer from '@/store/comment';
import collectReducer from '@/store/collect';
import crawlingReducer from '@/store/crawling';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedWinnerReducer = persistReducer(persistConfig, winnerReducer);
const persistedReducer = persistReducer(persistConfig, collectReducer);

const store = configureStore({
  reducer: {
    login: userReducer,
    survey: surveyReducer,
    winner: persistedWinnerReducer,
    terms: termsReducer,
    signup: signupReducer,
    dates: datesReducer,
    collect: persistedReducer,
    crawling: crawlingReducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'], // persist와 관련된 액션은 무시
      },
    }),
});

export const persistor = persistStore(store);

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
