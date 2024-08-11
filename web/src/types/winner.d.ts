interface WinnerState {
  eventId: number;
  participantCount: string;
  minCharacterCount: string;
  startDate: string | null;
  endDate: string | null;
  keywords: string[];
  winners: Array<{ author: string; commentText: string; commentDate: string }>; // 당첨자 리스트 추가
  winnerCount: number;
}
