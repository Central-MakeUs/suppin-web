export type EventStatus = 'PROCESSING' | 'DONE';
export type EventType = {
  eventId: number;
  type: 'COMMENT' | 'SURVEY';
  title: string;
  url: string;
  startDate: string;
  endDate: string;
  announcementDate: string;
  surveyCount: number;
  commentCount: number;
  status: EventStatus;
};

export type EventResponseType = {
  code: string;
  message: string;
  data: EventType[];
};
