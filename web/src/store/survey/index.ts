// surveySlice.ts
import React from 'react';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Field {
  label: string;
  checked: boolean;
}

interface SurveyState {
  title: string;
  description: string;
  startDate: Date | null;
  endDate: Date | null;
  fields: Field[];
  questions: { id: number; type: string; content: React.ReactNode }[];
}

const initialState: SurveyState = {
  title: '',
  description: '',
  startDate: null,
  endDate: null,
  fields: [
    { label: '아이디 (필수)', checked: true },
    { label: '이름 (필수)', checked: true },
    { label: '주소 (필수)', checked: true },
    { label: '연락처 (필수)', checked: true },
  ],
  questions: [],
};

const surveySlice = createSlice({
  name: 'survey',
  initialState,
  reducers: {
    setTitle(state, action: PayloadAction<string>) {
      state.title = action.payload;
    },
    setDescription(state, action: PayloadAction<string>) {
      state.description = action.payload;
    },
    setStartDate(state, action: PayloadAction<Date | null>) {
      state.startDate = action.payload;
    },
    setEndDate(state, action: PayloadAction<Date | null>) {
      state.endDate = action.payload;
    },
    resetForm(state) {
      state.title = '';
      state.description = '';
      state.startDate = null;
      state.endDate = null;
      state.fields = initialState.fields;
    },
    addField(state, action: PayloadAction<string>) {
      state.fields.push({ label: action.payload, checked: true });
    },
    toggleFieldChecked(state, action: PayloadAction<number>) {
      const index = action.payload;
      if (state.fields[index]) {
        state.fields[index].checked = !state.fields[index].checked;
      }
    },
    updateFieldLabel(
      state,
      action: PayloadAction<{ index: number; label: string }>
    ) {
      const { index, label } = action.payload;
      if (state.fields[index]) {
        state.fields[index].label = label;
      }
    },
    addQuestion(
      state,
      action: PayloadAction<{ type: string; content: React.ReactNode }>
    ) {
      state.questions.push({
        id: state.questions.length + 1,
        type: action.payload.type,
        content: action.payload.content,
      });
    },
    removeQuestion(state, action: PayloadAction<number>) {
      state.questions = state.questions.filter(
        question => question.id !== action.payload
      );
    },
  },
});

export const {
  setTitle,
  setDescription,
  setStartDate,
  setEndDate,
  resetForm,
  addField,
  toggleFieldChecked,
  updateFieldLabel,
  addQuestion,
  removeQuestion,
} = surveySlice.actions;

export default surveySlice.reducer;
