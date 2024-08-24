import { SurveyQuestionItemWrapper } from './survey-question-item.styles';

type AnswerType = {
  participantName: string;
  questionId: number;
  answerText: string;
  selectedOptions: [string];
};

export const SurveyQuestionItem = ({ answer }: { answer: AnswerType }) => {
  return (
    <SurveyQuestionItemWrapper>
      <h2>{answer.participantName || ''}</h2>
      <div className="sep" />
      {answer.selectedOptions.length > 0 ? (
        <div>
          {answer.selectedOptions.map((item, idx) => (
            <div key={idx}>{item}</div>
          ))}
        </div>
      ) : (
        <p>{answer.answerText}</p>
      )}
    </SurveyQuestionItemWrapper>
  );
};
