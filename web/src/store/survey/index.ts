import { CreateEventPayload } from '@/types/event';
import { QuestionType, SurveyState } from '@/types/survey';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: SurveyState = {
  event: {
    id: -1,
    title: '',
    announcementDate: '',
    description: '',
    endDate: '',
    startDate: '',
    type: 'SURVEY',
  },
  policy: '',
  personalInfoOptionList: [],
  questionType: 'SUBJECTIVE',
};

const surveySlice = createSlice({
  name: 'survey',
  initialState,
  reducers: {
    setEvent(
      state,
      action: PayloadAction<Partial<CreateEventPayload & { id: number }>>
    ) {
      if (action.payload) {
        state.event = {
          ...state.event,
          ...action.payload,
        };
      }
    },
    setPolicy(state, action: PayloadAction<string>) {
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

export const { setEvent, setPolicy, setFields, setQuetionType, resetPolicy } =
  surveySlice.actions;
export default surveySlice.reducer;
