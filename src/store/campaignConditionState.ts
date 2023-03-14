import dayjs from 'dayjs';
import { atom } from 'recoil';

export interface CampignConditionInit {
  customerGroupName: string;
  customerGroupID: number;
  copyGroupID: number;
  copyGroupName: string;
  abTest: boolean;
  messageType: 'LMS' | 'SMS';
  sendType: 'AD' | 'COMM';
  sentCycle: string;
  sendingDate: string;
  messageA: string;
  messageB: string;
  sendURL: string;
  customerCnt: number;
  campaignName: string;
  messageOver: boolean;
}

const today = new Date(new Date().setHours(8, 0));
const tommrrow = new Date(today.setDate(today.getDate() + 1));

export const campaignConditionState = atom<CampignConditionInit>({
  key: 'campaignConditionState',
  default: {
    customerGroupName: '',
    customerGroupID: 0,
    copyGroupID: 0,
    copyGroupName: '',
    abTest: true,
    messageType: 'LMS',
    sendType: 'COMM',
    sentCycle: '일회성 발송',
    sendingDate: tommrrow.toString(),
    sendURL: '',
    messageA: '',
    messageB: '',
    customerCnt: 0,
    campaignName: '새 캠페인' + `${dayjs().format('YYMMDD')}`,
    messageOver: false,
  },
});
