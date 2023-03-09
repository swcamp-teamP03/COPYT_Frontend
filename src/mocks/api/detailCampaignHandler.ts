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

export const detailCampaignHandler = [
  rest.get(`${BASE_URL}/campaigns/1/sendmessages`, (req, res, ctx) => {
    return res(ctx.json(FakeSentHistory));
  }),
];
