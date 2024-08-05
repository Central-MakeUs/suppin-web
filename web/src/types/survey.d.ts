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
