import { WinnerState } from '@/types/winner';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: WinnerState = {
  eventId: 0,
  url: '',
  participant: '',
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
    setUrl(state, action: PayloadAction<string>) {
      state.url = action.payload;
    },
    setParticipantCount(state, action: PayloadAction<string>) {
      state.participant = action.payload;
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
    // home-page로 이동 시 조건들 초기화 (초기화하지 않으면 새 이벤트 생성에도 불구하고 이전에 선택되었던 데이터들이 남아있음)
    resetWinnerState(state) {
      state.participant = '';
      state.minCharacterCount = '';
      state.keywords = [];
      state.winners = [];
      state.winnerCount = 0;
    },
    resetDateState(state) {
      state.startDate = null;
      state.endDate = null;
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
  setUrl,
  resetWinnerState,
  resetDateState,
} = winnerSlice.actions;

export default winnerSlice.reducer;
