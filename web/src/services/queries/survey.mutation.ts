import { queries } from '@/lib/query-keys';
import { SurveyPayload } from '@/types/survey';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createSurvey } from '../apis/survey.service';

export const useCreateSurvey = () => {
  const queryClient = useQueryClient();

  const {
    mutateAsync: createSurveyMutation,
    isPending: isCreateSurveyLoading,
    isSuccess: isCreateSurveySuccess,
    isError,
  } = useMutation({
    mutationFn: async (paylod: SurveyPayload) => await createSurvey(paylod),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: queries.events.DEFAULT,
      });
    },
  });

  return {
    createSurveyMutation,
    isCreateSurveyLoading,
    isCreateSurveySuccess,
    isError,
  };
};
