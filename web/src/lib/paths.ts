import { generatePath } from 'react-router-dom';

export const paths = {
  home() {
    return generatePath('/');
  },
  result() {
    return generatePath('/result');
  },
  createSurvey() {
    return generatePath('/survey/new');
  },
  collect() {
    return generatePath('/collect');
  },
  auth() {
    return generatePath('/auth');
  },
};
