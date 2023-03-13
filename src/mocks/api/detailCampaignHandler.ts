import { rest } from 'msw';
import { BASE_URL } from '../../constants/api';

const FakeSentHistory = {
  listCount: '3',
  sendList: [
    {
      sendMessageId: '1',
      sendDate: '2021-11-08T11:44:30',
      name: '홍길동',
      phone: '010-1234-1234',
      state: '발송성공',
      errorMessage: '시스템오류',
    },
    {
      sendMessageId: '1',
      sendDate: '2021-11-08T11:44:30',
      name: '홍길동',
      phone: '010-1234-1234',
      state: '발송성공',
      errorMessage: '시스템오류',
    },
    {
      sendMessageId: '1',
      sendDate: '2021-11-08T11:44:30',
      name: '홍길동',
      phone: '010-1234-1234',
      state: '발송성공',
      errorMessage: '시스템오류',
    },
  ],
};

const FakeCampaignDetail = {
  success: true,
  data: {
    campaignCreatedAt: '2023/02/20',
    sendingDateTime: '2023/02/20 13:00',
    messageCount: 3000,
    messageType: 'LMS',
    groupName: '멤버십 가입 고객',
    customerCnt: 3000,
    excelOrgFileName: '멤버십 가입 고객 리스트.xls',
    customerProperties: [
      {
        propertyValue: '이벤트값',
      },
      {
        propertyValue: '광고값',
      },
    ],
    copyGroupName: '브랜드 멤버십 데이 할인 커피',
    copyList: [
      {
        copyType: 'A',
        content: '광고문자내용 1',
      },
      {
        copyType: 'B',
        content: '광고문자내용 2',
      },
    ],
    messageA: {
      messageACnt: 1500,
      messageSuccessCnt: 1499,
      uniqueCTR: 5.48,
      clickCnt: 2,
    },
    messageB: {
      messageBCnt: 1500,
      messageSuccessCnt: 1300,
      uniqueCTR: 15.84,
      clickCnt: 2,
    },
    comment: '블라블라',
  },
  error: null,
};

export const detailCampaignHandler = [
  rest.get(`${BASE_URL}/campaigns/1/sendmessages`, (req, res, ctx) => {
    return res(ctx.json(FakeSentHistory));
  }),

  rest.get(`${BASE_URL}/campaigns/1`, (req, res, ctx) => {
    return res(ctx.json(FakeCampaignDetail));
  }),

  rest.post(`${BASE_URL}/campaigns/1/comment`, (req, res, ctx) => {
    return res(
      ctx.json({
        coment: '코멘트 수정',
      }),
    );
  }),

  rest.post(`${BASE_URL}/campaign`, (req, res, ctx) => {
    return res(
      ctx.json({
        success: true,
        data: {
          campaignId: 1,
          result: 'success',
        },
        error: null,
      }),
    );
  }),
];
