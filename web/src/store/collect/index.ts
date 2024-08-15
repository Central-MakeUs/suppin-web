import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@/store';
import { CollectState } from '@/types/signup/collect';

const initialState: CollectState = {
  youtubeUrl: '',
  eventTitle: '',
  eventDescription: '',
  isPopupVisible: false,
  commentCount: null,
  isDuplicateUrl: false,
};

const collectSlice = createSlice({
  name: 'collect',
  initialState,
  reducers: {
    setYoutubeUrl(state, action: PayloadAction<string>) {
      state.youtubeUrl = action.payload;
    },
    setEventTitle(state, action: PayloadAction<string>) {
      state.eventTitle = action.payload;
    },
    setEventDescription(state, action: PayloadAction<string>) {
      state.eventDescription = action.payload;
    },
    setIsPopupVisible(state, action: PayloadAction<boolean>) {
      state.isPopupVisible = action.payload;
    },
    setCommentCount(state, action: PayloadAction<number | null>) {
      state.commentCount = action.payload;
    },
    setIsDuplicateUrl(state, action: PayloadAction<boolean>) {
      state.isDuplicateUrl = action.payload;
    },
  },
});

export const {
  setYoutubeUrl,
  setEventTitle,
  setEventDescription,
  setIsPopupVisible,
  setCommentCount,
  setIsDuplicateUrl,
} = collectSlice.actions;

export const selectYoutubeUrl = (state: RootState) => state.collect.youtubeUrl;
export const selectEventTitle = (state: RootState) => state.collect.eventTitle;
export const selectEventDescription = (state: RootState) =>
  state.collect.eventDescription;
export const selectIsPopupVisible = (state: RootState) =>
  state.collect.isPopupVisible;
export const selectCommentCount = (state: RootState) =>
  state.collect.commentCount;
export const selectIsDuplicateUrl = (state: RootState) =>
  state.collect.isDuplicateUrl;

export default collectSlice.reducer;
