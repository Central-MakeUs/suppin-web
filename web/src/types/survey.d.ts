export interface SurveyState {
  title: string;
  description: string;
  startDate: Date | null;
  endDate: Date | null;
  fields: string[];
  questions: { id: number; type: string; content: React.ReactNode }[];
}
