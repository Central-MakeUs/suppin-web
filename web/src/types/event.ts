export type EventStatus = 'PROCESSING' | 'DONE';

export type EventOrServey = 'COMMENT' | 'SURVEY';
export type EventType = {
  eventId: number;
  type: EventOrServey;
  title: string;
  url: string;
  startDate: string;
  endDate: string;
  announcementDate: string;
  surveyCount: number;
  commentCount: number;
  status: EventStatus;
  uuid: string;
};

export type EventResponseType = {
  code: string;
  message: string;
  data: EventType[];
};

export type CreateEventPayload = {
  type: 'COMMENT' | 'SURVEY';
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  announcementDate: string;
};
