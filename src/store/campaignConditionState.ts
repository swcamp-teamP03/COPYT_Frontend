import dayjs from 'dayjs';
import { atom } from 'recoil';

export interface CampignConditionInit {
  customerGroupName: string;
  customerGroupId: number;
  copyGroupId: number;
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
    customerGroupId: 0,
    copyGroupId: 0,
    copyGroupName: '',
    abTest: true,
    messageType: 'LMS',
    sendType: 'AD',
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
