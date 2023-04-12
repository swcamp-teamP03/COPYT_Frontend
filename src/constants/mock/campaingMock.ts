import { CampaignsListType, DetailCampaignResult } from '../../types/campaign';

export const CAMAPAIGN_MOCK_LIST: CampaignsListType = {
  campaignId: 0,
  favorite: true,
  messageType: 'LMS',
  campaignName: '신규 서비스 광고 캠페인',
  createdAt: '2023-04-01',
  sendingDate: '2023-04-02 08:30',
  sendState: '발송완료',
  clickRate: 0.0,
};

export const CAMPAIGN_MOCK_DETAIL: DetailCampaignResult = {
  campaignName: '신규 서비스 광고 캠페인',
  campaignCreatedAt: '2023-04-01',
  sendingDateTime: '2023-04-02 08:30',
  messageCount: 500,
  messageType: 'LMS',
  groupName: '광고 타겟 고객 그룹',
  customerCount: 500,
  customerProperties: [
    {
      propertyValue: '2023-02-03 ~ 2023-03-31 까지 사이트 재방문 1회 이상 고객',
    },
    {
      propertyValue: '타겟 연령 : 20~40대',
    },
  ],
  excelOrgFileName: '광고 타겟 고객 그룹.xlsx',
  copyGroupName: '카피티 광고 예시',
  copyWriteAB: [
    {
      copyType: 'A',
      content:
        '(광고)인턴 카피티는 올인원 문자 CRM 마케팅 솔루션으로 고객의 의도에 따라 각 마케팅 채널에 활용할 수 있는 광고 문구를 AI를 통해 쉽게 생성할 수 있습니다. AI 카피 추천과 성과 있는 카피를 보고서로 제공해 광고 프로모션에 가장 적합한 카피를 확인할 수 있습니다. 인턴 카피티로 속도와 효율 모두 만족하는 문자 마케팅을 경험해보세요!',
    },
    {
      copyType: 'B',
      content:
        '(광고)인턴 카피티는 사업자 여러분의 마케팅 리소스를 절감시킬 수 있는 문자 CRM 마케팅 툴입니다. AI가 추천해주는 카피, 문자전송, A/B 테스트를 바탕으로 누구든 SMS 마케팅을 하루만에 완료할 수 있습니다. 키워드만 입력하면 원하는 글자 수에 맞춰 초급 마케터부터 전문가까지 모두 사용하기 쉬운 모듈기반의 카피제작 가이드를 제공합니다.\n\n\n바로 사용하러 가기 >> ',
    },
  ],
  messageA: {
    messageACnt: 250,
    clickCnt: 86,
    messageSuccessCnt: 250,
    uniqueCTR: 0.0,
  },
  messageB: {
    messageBCnt: 250,
    clickCnt: 203,
    messageSuccessCnt: 250,
    uniqueCTR: 46.8,
  },
  comment: '',
};
