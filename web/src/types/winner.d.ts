export interface WinnerState {
  eventId: number;
  url: string;
  participant: string;
  minCharacterCount: string;
  startDate: string | null;
  endDate: string | null;
  keywords: string[];
  winners: Array<{ author: string; commentText: string; commentDate: string }>; // 당첨자 리스트 추가
  winnerCount: number;
}

export type WinnerPayload = {
  surveyId: number;
  questionId: number;
  winnerCount: number;
  startDate: string;
  endDate: string;
  minLength?: number;
  keywords: (string | undefined)[] | undefined;
};
