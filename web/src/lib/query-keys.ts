const USER = 'user';
const EVENTS = 'events';
const SURVEY = 'survey';

export const queries = {
  user: {
    DEFAULT: [USER],
  },
  events: {
    DEFAULT: [EVENTS],
  },
  survey: {
    DEFAULT: [SURVEY],
    detail: (surveyId: string) => [SURVEY, surveyId],
    result: (surveyId: string, questionId: string, page: number) => [
      SURVEY,
      surveyId,
      questionId,
      page,
    ],
  },
};
