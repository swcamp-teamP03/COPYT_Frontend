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
const copyGroupDetail = {
  success: true,
  data: {
    copyGroupName: '나이키 할인 행사',
    tag: '태그1',
    brandName: '브랜드이름',
    productName: '상품명',
    keyword: '키워드1,키워드2,키워드3',
    type: '카피 유형',
    createCount: '3',
    copyLength: '200',
    copyList: [
      {
        copyId: 1,
        content: '광고문자내용 1',
        isPinned: false,
      },
      {
        copyId: 2,
        content: '광고문자내용 2',
        isPinned: false,
      },
      {
        copyId: 3,
        content: '광고문자내용 3',
        isPinned: true,
      },
    ],
  },
  error: null,
};
const groupList = {
  success: true,
  data: {
    totalCopy: 2,
    groupList: [
      {
        copyId: 1,
        createDate: '2023-02-25',
        isPinned: true,
        copyName: '나이키 할인 행사',
      },
      {
        copyId: 2,
        createDate: '2023-02-25',
        isPinned: false,
        copyName: '룰루레몬 이벤트',
      },
    ],
  },
  error: null,
};

export const copyHandler = [
  rest.post(`${BASE_URL}/gptcopy`, (req, res, ctx) => {
    return res(ctx.json(FakeCopy));
  }),

  rest.get(`${BASE_URL}/copy/:copyId`, (req, res, ctx) => {
    return res(ctx.json(copyGroupDetail));
  }),

  rest.get(`${BASE_URL}/copies`, (req, res, ctx) => {
    const size = req.url.searchParams.get('size');
    const page = req.url.searchParams.get('page');
    return res(ctx.json(groupList));
  }),
];
