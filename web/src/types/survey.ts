import React from 'react';
interface Field {
  label: string;
  checked: boolean;
}

export interface SurveyState {
  title: string;
  description: string;
  startDate: Date | null;
  endDate: Date | null;
  fields: Field[];
  questions: { id: number; type: string; content: React.ReactNode }[];
}

type QuestionType = 'SUBJECTIVE' | 'SINGLE_CHOICE' | 'MULTIPLE_CHOICE';
export type SurveyPayload = {
  eventId: number;
  personalInfoOptionList: { optionName: string }[];
  questionList: {
    questionType: QuestionType;
    questionText: string;
    options: string[];
  }[];
};
