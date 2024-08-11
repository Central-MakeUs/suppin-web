import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: WinnerState = {
  eventId: 0,
  participantCount: '',
  minCharacterCount: '',
  startDate: null,
  endDate: null,
  keywords: [],
  winners: [],
  winnerCount: 0,
};

const winnerSlice = createSlice({
  name: 'winner',
  initialState,
  reducers: {
    setEventId(state, action: PayloadAction<number>) {
      state.eventId = action.payload;
    },
    setParticipantCount(state, action: PayloadAction<string>) {
      state.participantCount = action.payload;
    },
    setMinCharacterCount(state, action: PayloadAction<string>) {
      state.minCharacterCount = action.payload;
    },
    setStartDate(state, action: PayloadAction<string | null>) {
      state.startDate = action.payload;
    },
    setEndDate(state, action: PayloadAction<string | null>) {
      state.endDate = action.payload;
    },
    setKeywords(state, action: PayloadAction<string[]>) {
      state.keywords = action.payload;
    },
    addKeyword(state, action: PayloadAction<string>) {
      state.keywords.push(action.payload);
    },
    removeKeyword(state, action: PayloadAction<number>) {
      state.keywords.splice(action.payload, 1);
    },

    setWinners(
      state,
      action: PayloadAction<
        Array<{ author: string; commentText: string; commentDate: string }>
      >
    ) {
      state.winners = action.payload;
    },

    setWinnerCount(state, action: PayloadAction<number>) {
      state.winnerCount = action.payload;
    },
  },
});

export const {
  setEventId,
  setParticipantCount,
  setMinCharacterCount,
  setStartDate,
  setEndDate,
  setKeywords,
  addKeyword,
  removeKeyword,
  setWinners,
  setWinnerCount,
} = winnerSlice.actions;

export default winnerSlice.reducer;
