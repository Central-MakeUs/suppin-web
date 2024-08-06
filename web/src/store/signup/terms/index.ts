// 회원가입 depth1의 약관동의

import { TermsState } from '@/types/signup/temrs';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: TermsState = {
  all: false,
  age: false,
  terms: false,
  privacy: false,
  marketing: false,
};

const termsSlice = createSlice({
  name: 'terms',
  initialState,
  reducers: {
    toggleCheck: (state, action: PayloadAction<keyof TermsState>) => {
      const item = action.payload;

      if (item === 'all') {
        const newState = !state.all;
        state.all = newState;
        state.age = newState;
        state.terms = newState;
        state.privacy = newState;
        state.marketing = newState;
      } else {
        state[item] = !state[item];
        state.all =
          state.age && state.terms && state.privacy && state.marketing;
      }
    },
  },
});

export const { toggleCheck } = termsSlice.actions;
export default termsSlice.reducer;
