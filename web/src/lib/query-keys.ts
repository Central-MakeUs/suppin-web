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
    result: (surveyId: string, questionId: string) => [
      SURVEY,
      surveyId,
      questionId,
    ],
  },
};
