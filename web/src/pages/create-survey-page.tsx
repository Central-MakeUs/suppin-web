import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import CreateSurveyPageStep1 from './create-survey-page1';
import CreateSurveyPageStep2 from './create-survey-page2';
import CreateSurveyPageStep3 from './create-survey-page3';

export default function CreateSurveyPage() {
  const [searchParams, setSearchParams] = useSearchParams();

  const step = searchParams.get('step');

  useEffect(() => {
    if (!step) {
      setSearchParams({ step: '1' });
    }
  }, [step, setSearchParams]);

  let content;
  if (step === '1') {
    content = <CreateSurveyPageStep1 />;
  } else if (step === '2') {
    content = <CreateSurveyPageStep2 />;
  } else if (step === '3') {
    content = <CreateSurveyPageStep3 />;
  } else {
    content = <CreateSurveyPageStep1 />; // Default 값으로 첫 페이지
  }

  return <>{content}</>;
}
