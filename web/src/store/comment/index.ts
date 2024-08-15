import { DateState } from '@/types/comment';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: DateState = {
  startDate: null,
  endDate: null,
  announcementDate: null,
};

const dateSlice = createSlice({
  name: 'dates',
  initialState,
  reducers: {
    setStartDate(state, action: PayloadAction<string | null>) {
      state.startDate = action.payload;
    },
    setEndDate(state, action: PayloadAction<string | null>) {
      state.endDate = action.payload;
    },
    setAnnouncementDate(state, action: PayloadAction<string | null>) {
      state.announcementDate = action.payload;
    },
  },
});

export const { setStartDate, setEndDate, setAnnouncementDate } =
  dateSlice.actions;
export default dateSlice.reducer;
