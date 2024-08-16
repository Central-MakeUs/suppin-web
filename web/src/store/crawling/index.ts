import { CrawlingState } from '@/types/signup/crawling';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: CrawlingState = {
  activeTab: 'comment',
  period: '',
  comments: [],
  participantCount: 0,
  totalCommentCount: 0,
  showWinnerResult: false,
};

const crawlingSlice = createSlice({
  name: 'crawling',
  initialState,
  reducers: {
    setActiveTab(state, action: PayloadAction<string>) {
      state.activeTab = action.payload;
    },
    setPeriod(state, action: PayloadAction<string>) {
      state.period = action.payload;
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setComments(state, action: PayloadAction<any[]>) {
      state.comments = action.payload;
    },
    setParticipantCount(state, action: PayloadAction<number>) {
      state.participantCount = action.payload;
    },
    setTotalCommentCount(state, action: PayloadAction<number>) {
      state.totalCommentCount = action.payload;
    },
    setShowWinnerResult(state, action: PayloadAction<boolean>) {
      state.showWinnerResult = action.payload;
    },
  },
});

export const {
  setActiveTab,
  setPeriod,
  setComments,
  setParticipantCount,
  setTotalCommentCount,
  setShowWinnerResult,
} = crawlingSlice.actions;

export default crawlingSlice.reducer;
