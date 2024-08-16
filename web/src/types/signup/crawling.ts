export interface CrawlingState {
  activeTab: string;
  period: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  comments: any[];
  participantCount: number;
  totalCommentCount: number;
  showWinnerResult: boolean;
}
