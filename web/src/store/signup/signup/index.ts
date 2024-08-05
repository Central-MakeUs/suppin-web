// 회원가입 상태 관리

import { SignupState } from '@/types/signup/signup';
import { createSlice } from '@reduxjs/toolkit';

const initialState: SignupState = {
  name: '',
  phone: '',
  email: '',
  step: '1',
};

const signupSlice = createSlice({
  name: 'signup',
  initialState,
  reducers: {
    updateSignupField: (state, action) => {
      state.email = action.payload.email;
      state.phone = action.payload.phone;
      state.name = action.payload.name;
    },
    nextStep: (state, action) => {
      state.step = action.payload;
    },
  },
});

export const { updateSignupField, nextStep } = signupSlice.actions;
export default signupSlice.reducer;
