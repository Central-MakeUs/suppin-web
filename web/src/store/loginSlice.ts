import { LoginState } from '@/types/HomePage';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: LoginState = {
  id: '',
  password: '',
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setId(state, action: PayloadAction<string>) {
      state.id = action.payload;
    },
    setPassword(state, action: PayloadAction<string>) {
      state.password = action.payload;
    },
  },
});

export const { setId, setPassword } = loginSlice.actions;
export default loginSlice.reducer;
