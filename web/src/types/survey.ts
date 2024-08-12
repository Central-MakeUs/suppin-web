export interface SurveyState {
  policy: {
    line1: string;
    line2: string;
    line3: string;
    line4: string;
  };
  fields: string[];
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
