import { SurveyState } from '@/types/survey';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: SurveyState = {
  title: '',
  description: '',
  startDate: null,
  endDate: null,
};

const surveySlice = createSlice({
  name: 'survey',
  initialState,
  reducers: {
    setTitle: (state, action: PayloadAction<string>) => {
      state.title = action.payload;
    },
    setDescription: (state, action: PayloadAction<string>) => {
      state.description = action.payload;
    },
    setStartDate: (state, action: PayloadAction<Date | null>) => {
      state.startDate = action.payload;
    },
    setEndDate: (state, action: PayloadAction<Date | null>) => {
      state.endDate = action.payload;
    },
    resetSurvey: state => {
      state.title = '';
      state.description = '';
      state.startDate = null;
      state.endDate = null;
    },
  },
});

export const {
  setTitle,
  setDescription,
  setStartDate,
  setEndDate,
  resetSurvey,
} = surveySlice.actions;

export default surveySlice.reducer;
