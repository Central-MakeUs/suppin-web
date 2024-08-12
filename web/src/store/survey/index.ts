import { QuestionType, SurveyState } from '@/types/survey';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: SurveyState = {
  eventId: -1,
  policy: {
    line1: '',
    line2: '',
    line3: '',
    line4: '',
  },
  personalInfoOptionList: [],
  questionType: 'SUBJECTIVE',
};

const surveySlice = createSlice({
  name: 'survey',
  initialState,
  reducers: {
    setEventId(state, action: PayloadAction<number>) {
      state.eventId = action.payload;
    },
    setPolicy(state, action: PayloadAction<SurveyState['policy']>) {
      state.policy = action.payload;
    },
    setFields(state, action: PayloadAction<{ optionName: string }[]>) {
      state.personalInfoOptionList = action.payload;
    },
    setQuetionType(state, action: PayloadAction<QuestionType>) {
      state.questionType = action.payload;
    },
    resetPolicy(state) {
      state.policy = initialState.policy;
    },
  },
});

export const { setEventId, setPolicy, setFields, setQuetionType, resetPolicy } =
  surveySlice.actions;
export default surveySlice.reducer;
