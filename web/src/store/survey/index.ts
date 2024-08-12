import { SurveyState } from '@/types/survey';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: SurveyState = {
  policy: {
    line1: '',
    line2: '',
    line3: '',
    line4: '',
  },
  fields: [],
};

const surveySlice = createSlice({
  name: 'survey',
  initialState,
  reducers: {
    setPolicy(state, action: PayloadAction<SurveyState['policy']>) {
      state.policy = action.payload;
    },
    setFields(state, action: PayloadAction<string[]>) {
      state.fields = action.payload;
    },
    resetPolicy(state) {
      state.policy = initialState.policy;
    },
  },
});

export const { setPolicy, setFields, resetPolicy } = surveySlice.actions;
export default surveySlice.reducer;
