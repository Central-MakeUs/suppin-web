import { SurveyCompleteModal } from '@/components/survey/survey-complete-modal';
import { RootState } from '@/store';
import { useSelector } from 'react-redux';

export const ModalProvider = () => {
  const { type, isOpen } = useSelector((state: RootState) => state.modal);

  if (!type || !isOpen) {
    return null;
  }

  return <>{type === 'createSurvey' ? <SurveyCompleteModal /> : null}</>;
};
