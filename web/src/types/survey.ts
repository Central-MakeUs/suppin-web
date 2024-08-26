import { CreateEventPayload } from './event';

export type QuestionType = 'SUBJECTIVE' | 'SINGLE_CHOICE' | 'MULTIPLE_CHOICE';

export interface SurveyState {
  event: CreateEventPayload & { id: number };
  policy: string;
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

export type SurveyResponse = {
  code: string;
  message: string;
  data: {
    surveyId: number;
    eventId: number;
    eventTitle: string;
    eventDescription: string;
    startDate: string;
    endDate: string;
    announcementDate: string;
    consentFormHtml: string;
    personalInfoOptions: [
      {
        optionName: string;
      },
    ];
    questions: [
      {
        questionId: number;
        questionType: QuestionType;
        questionText: string;
        options: [string];
      },
    ];
  };
};
export type SurveyDataType = {
  surveyId: number;
  eventId: number;
  eventTitle: string;
  eventDescription: string;
  startDate: string;
  endDate: string;
  announcementDate: string;
  consentFormHtml: string;
  personalInfoOptions: [
    {
      optionName: string;
    },
  ];
  questions: [
    {
      questionId: number;
      questionType: QuestionType;
      questionText: string;
      options: [string];
    },
  ];
};

export type AnswerDataType = {
  questionId: number;
  questionText: string;
  totalPages: number;
  totalElements: number;
  answers: [
    {
      participantName: string;
      questionId: number;
      answerText: string;
      selectedOptions: [string];
    },
  ];
};
export type AnswerResponse = {
  code: string;
  message: string;
  data: AnswerDataType;
};
