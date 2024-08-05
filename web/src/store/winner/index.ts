// store/winnerSlice.ts
import { WinnerState } from '@/types/winner';
import { createSlice } from '@reduxjs/toolkit';

const initialState: WinnerState = {
  isPeriodChecked: true,
  isKeywordChecked: true,
  isMinLengthChecked: false,
};

const winnerSlice = createSlice({
  name: 'winner',
  initialState,
  reducers: {
    togglePeriodChecked(state) {
      state.isPeriodChecked = !state.isPeriodChecked;
    },
    toggleKeywordChecked(state) {
      state.isKeywordChecked = !state.isKeywordChecked;
    },
    toggleMinLengthChecked(state) {
      state.isMinLengthChecked = !state.isMinLengthChecked;
    },
  },
});

export const {
  togglePeriodChecked,
  toggleKeywordChecked,
  toggleMinLengthChecked,
} = winnerSlice.actions;
export default winnerSlice.reducer;
