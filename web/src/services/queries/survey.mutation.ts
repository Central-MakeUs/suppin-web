import { SurveyPayload } from '@/types/survey';
import { useMutation } from '@tanstack/react-query';
import { createSurvey } from '../apis/survey.service';

export const useCreateSurvey = () => {
  const {
    mutateAsync: createSurveyMutation,
    isPending: isCreateSurveyLoading,
  } = useMutation({
    mutationFn: async (paylod: SurveyPayload) => await createSurvey(paylod),
  });

  return {
    createSurveyMutation,
    isCreateSurveyLoading,
  };
};
