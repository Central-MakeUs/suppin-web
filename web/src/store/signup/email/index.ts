// src/store/emailSlice.ts
import { EmailState } from '@/types/signup/email';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: EmailState = {
  email: '',
  emailCode: '',
  isEmailCodeSent: false,
  isEmailVerified: false,
};

const emailSlice = createSlice({
  name: 'email',
  initialState,
  reducers: {
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setEmailCode: (state, action: PayloadAction<string>) => {
      state.emailCode = action.payload;
    },
    setEmailCodeSent: (state, action: PayloadAction<boolean>) => {
      state.isEmailCodeSent = action.payload;
    },
    setEmailVerified: (state, action: PayloadAction<boolean>) => {
      state.isEmailVerified = action.payload;
    },
  },
});

export const { setEmail, setEmailCode, setEmailCodeSent, setEmailVerified } =
  emailSlice.actions;
export default emailSlice.reducer;
