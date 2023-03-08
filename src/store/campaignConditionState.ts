import { atom } from 'recoil';

export interface CampignConditionInit {
  group_name: string;
  customerGroupID: number;
  copyGroupID: number;
  abTest: boolean;
  messageType: 'LMS' | 'SMS';
  sentType: 'AD' | 'COMM';
  sentCycle: string;
  sendingDate: string;
  messageA: string;
  messageB: string;
  sendURL: string;
  customerCnt: number;
  campaignName: string;
}

export const campaignConditionState = atom<CampignConditionInit>({
  key: 'campaignConditionState',
  default: {
    group_name: '',
    customerGroupID: 0,
    copyGroupID: 0,
    abTest: true,
    messageType: 'SMS',
    sentType: 'COMM',
    sentCycle: '일회성 발송',
    sendingDate: '',
    sendURL: '',
    messageA: '',
    messageB: '',
    customerCnt: 0,
    campaignName: '',
  },
});
