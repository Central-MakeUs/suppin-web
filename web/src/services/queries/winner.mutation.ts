import { WinnerPayload } from '@/types/winner';
import { useMutation } from '@tanstack/react-query';
import { draftWinners } from '../apis/winner.service';

export const useDraftWinner = () => {
  const { mutateAsync: draftWinnersMutation } = useMutation({
    mutationFn: async (payload: WinnerPayload) => await draftWinners(payload),
  });

  return {
    draftWinnersMutation,
  };
};
