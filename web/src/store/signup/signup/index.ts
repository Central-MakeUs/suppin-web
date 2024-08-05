// 회원가입 상태 관리

import { SignupState } from '@/types/signup/signup';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: SignupState = {
  name: '',
  phone: '',
  email: '',
  emailCode: '',
};

const signupSlice = createSlice({
  name: 'signup',
  initialState,
  reducers: {
    updateSignupField: (
      state,
      action: PayloadAction<{ field: keyof SignupState; value: string }>
    ) => {
      state[action.payload.field] = action.payload.value;
    },
  },
});

export const { updateSignupField } = signupSlice.actions;
export default signupSlice.reducer;
