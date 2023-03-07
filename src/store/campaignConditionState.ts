import { atom } from 'recoil';

export interface CampignConditionInit {
  group_name: string;
  ab_test: boolean;
  message_type: string;
  sent_type: string;
  sent_cycle: string;
  sent_date: string;
  sent_hour: string;
  sent_minute: string;
}

export const campaignConditionState = atom<CampignConditionInit>({
  key: 'campaignConditionState',
  default: {
    group_name: '',
    ab_test: true,
    message_type: 'SMS',
    sent_type: '정보성 문자',
    sent_cycle: '일회성 발송',
    sent_date: '',
    sent_hour: '',
    sent_minute: '',
  },
});
