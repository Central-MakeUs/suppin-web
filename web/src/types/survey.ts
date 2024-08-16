export type QuestionType = 'SUBJECTIVE' | 'SINGLE_CHOICE' | 'MULTIPLE_CHOICE';

export interface SurveyState {
  eventId: number;
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
        questionType: QuestionType;
        questionText: string;
        options: [string];
      },
    ];
  };
};
export type SurveyDataType = {
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
      questionType: QuestionType;
      questionText: string;
      options: [string];
    },
  ];
};
