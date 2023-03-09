export interface SentHisory {
  sendMessageId: string;
  sendDate: string;
  name: string;
  phone: string;
  state: string;
  errorMessage: string;
}

export interface SentHistoryResult {
  listCount: number;
  sendList: SentHisory[];
}
