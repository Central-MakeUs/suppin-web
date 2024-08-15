export type QuestionType = 'SUBJECTIVE' | 'SINGLE_CHOICE' | 'MULTIPLE_CHOICE';

export interface SurveyState {
  eventId: number;
  policy: {
    line1: string;
    line2: string;
    line3: string;
    line4: string;
  };
  personalInfoOptionList: { optionName: string }[];
  questionType: QuestionType;
}

export type SurveyPayload = {
  eventId: number;
  personalInfoOptionList: { optionName: string }[];
  questionList: {
    questionType: QuestionType;
    questionText: string;
    options: string[];
  }[];
};
