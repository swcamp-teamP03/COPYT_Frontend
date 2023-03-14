export interface CampaignsListType {
  campaignId: number;
  campaignName: string;
  messageType: 'LMS' | 'SMS';
  clickRate: number;
  favorite: boolean;
  createdAt: string;
  sendingDate: string;
  sendState: boolean;
}

export interface CamapaignListResult {
  totalCampaign: number;
  campaignList: CampaignsListType[];
}

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

export interface DetailCampaignResult {
  campaignCreatedAt: string;
  sendingDateTime: string;
  messageCount: number;
  messageType: 'LMS' | 'SMS';
  groupName: string;
  customerCnt: number;
  excelOrgFileName: string;
  customerProperties: { propertyValue: string }[];
  copyGroupName: string;
  copyList: { copyType: 'A' | 'B'; content: string }[];
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
