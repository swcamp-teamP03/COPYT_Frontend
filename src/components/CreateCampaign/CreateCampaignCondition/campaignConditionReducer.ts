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

export interface CamapignConditionAction {
  type: 'AB_TEST' | 'MESSAGE_TYPE' | 'SENT_TYPE' | 'SENT_CYCLE' | 'SENT_DATE' | 'SENT_HOUR' | 'SENT_MINUTE';
  key: string;
  value: string | boolean;
}

export const campaignConditionReducer: React.Reducer<CampignConditionInit, CamapignConditionAction> = (state, action) => {
  return { ...state, [action.key]: action.value };
};

export const campaignConditionInit = {
  group_name: '',
  ab_test: true,
  message_type: 'SMS',
  sent_type: '정보성 문자',
  sent_cycle: '일회성 발송',
  sent_date: 'YYYY-MM-DD',
  sent_hour: '13',
  sent_minute: '00',
};
