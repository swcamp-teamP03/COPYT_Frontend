import { rest } from 'msw';
import { BASE_URL } from '../../constants/api';

const FakeCopy = {
  resultList: [
    {
      content: '생성된 광고문자1',
    },
    {
      content: '생성된 광고문자2',
    },
    {
      content: '생성된 광고문자3',
    },
  ],
};

export const copyHandler = [
  // rest.post(`${BASE_URL}/gptcopy`, (req, res, ctx) => {
  //   return res(ctx.json(FakeCopy));
  // }),
];
