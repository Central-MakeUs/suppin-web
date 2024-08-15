import { queries } from '@/lib/query-keys';
import { SurveyPayload } from '@/types/survey';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { createSurvey } from '../apis/survey.service';

export const useCreateSurvey = () => {
  const router = useNavigate();

  const queryClient = useQueryClient();

  const {
    mutateAsync: createSurveyMutation,
    isPending: isCreateSurveyLoading,
  } = useMutation({
    mutationFn: async (paylod: SurveyPayload) => await createSurvey(paylod),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: queries.events.DEFAULT,
      });
      router('/');
    },
  });

  return {
    createSurveyMutation,
    isCreateSurveyLoading,
  };
};
