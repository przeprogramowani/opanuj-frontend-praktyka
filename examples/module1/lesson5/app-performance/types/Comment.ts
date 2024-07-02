export interface Comment {
  id: number;
  author: string;
  text: string;
  rating: number;
  status?: Status;
}

export enum Status {
  SENDING = 'sending',
  FAILED = 'failed',
  SENT = 'sent',
}
