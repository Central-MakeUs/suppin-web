// 회원가입 상태 관리

import { SignupState } from '@/types/signup/signup';
import { createSlice } from '@reduxjs/toolkit';

const initialState: SignupState = {
  name: '',
  phone: '',
  email: '',
  step: '2',
  verificationCode: '',
};

const signupSlice = createSlice({
  name: 'signup',
  initialState,
  reducers: {
    updateSignupField: (state, action) => {
      state.email = action.payload.email || state.email;
      state.phone = action.payload.phone || state.phone;
      state.name = action.payload.name || state.name;
      state.verificationCode =
        action.payload.verificationCode || state.verificationCode;
    },
    nextStep: (state, action) => {
      state.step = action.payload;
    },
  },
});

export const { updateSignupField, nextStep } = signupSlice.actions;
export default signupSlice.reducer;
