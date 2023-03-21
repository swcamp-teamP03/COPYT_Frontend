export interface CampaignsListType {
  campaignId: number;
  campaignName: string;
  messageType: 'LMS' | 'SMS';
  clickRate: number;
  favorite: boolean;
  createdAt: string;
  sendingDate: string;
  sendState: string;
}

export interface CamapaignListResult {
  totalCampaignCount: number;
  totalCampaignPage: number;
  campaignList: CampaignsListType[];
}

export interface SentHisory {
  sendMessageId: string;
  sendDate: string;
  sendCopy: string;
  name: string;
  phone: string;
  state: string;
  errorMessage: string;
}

export interface SentHistoryResult {
  listCount: number;
  sendList: SentHisory[];
}

export interface DetailCampaignResult {
  campaignName: string;
  campaignCreatedAt: string;
  sendingDateTime: string;
  messageCount: number;
  messageType: 'LMS' | 'SMS';
  groupName: string;
  customerCount: number;
  excelOrgFileName: string;
  customerProperties: { propertyValue: string }[];
  copyGroupName: string;
  copyWriteAB: {
    copyType: 'A' | 'B';
    content: string;
  }[];
  messageA: {
    messageACnt: number;
    messageSuccessCnt: number;
    uniqueCTR: number;
    clickCnt: number;
  };
  messageB?: {
    messageBCnt: number;
    messageSuccessCnt: number;
    uniqueCTR: number;
    clickCnt: number;
  };
  comment: string;
}

export interface CommentResult {
  comment: string;
}

export interface CreateCampaignResult {
  campaignId: number;
  result: string;
}
