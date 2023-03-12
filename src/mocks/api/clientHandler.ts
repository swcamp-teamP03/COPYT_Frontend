import { rest } from 'msw';
import { BASE_URL } from '../../constants/api';

//고객 그룹 목록
const FakeClientList = {
  success: true,
  data: {
    totalGroupPage: 1,
    groupListList: [
      {
        customerGroupId: 2,
        groupName: '첫구매 고객 별점2',
        customerCnt: 3,
        favorite: false,
        date: '2023-03-09T22:12:23.393526',
      },
      {
        customerGroupId: 1,
        groupName: '첫구매 고객 별점5',
        customerCnt: 3,
        favorite: false,
        date: '2023-03-09T21:35:01.063045',
      },
    ],
  },
  error: null,
};

//고객 그룹 상세
const clientGroupDetail = {
  success: true,
  data: {
    groupName: '첫구매 고객 별점5',
    customerProperties: [
      {
        propertyValue: '블라블라1',
      },
      {
        propertyValue: '블라블라2',
      },
      {
        propertyValue: '블라블라3',
      },
    ],
    excelFile: {
      excelFileName: 'test - 번호포함.xls',
      excelFileSize: '8KB',
      excelUploadTime: '2023-03-09T21:34:59.707935',
      customerCnt: 3,
    },
    campaigns: [
      {
        campaignName: null,
        createdAt: '2023-03-09',
      },
      {
        campaignName: '캠페인 이름',
        createdAt: '2023-03-09',
      },
    ],
  },
  error: null,
};

//고객 그룹 수정
const clientEdit = {
  groupName: '첫구매 고객 별점',
  추출기간start: '2023-02-20',
  추출기간end: '2023-02-24',
  속성1: '블라블라블라',
  속성2: '블라블라블라2',
  file: '230225고객모수SQL.csv',
};

export const clientHandler = [
  //고객 그룹 목록
  rest.get(`${BASE_URL}/groups`, (req, res, ctx) => {
    return res(ctx.json(FakeClientList));
  }),
  //고객 그룹 상세
  rest.get(`${BASE_URL}groups/:clientId`, (req, res, ctx) => {
    return res(ctx.json(clientGroupDetail));
  }),
  //고객 그룹 수정
  rest.put(`${BASE_URL}/groups/:copyId`, (req, res, ctx) => {
    const size = req.url.searchParams.get('size');
    const page = req.url.searchParams.get('page');
    return res(ctx.json(clientEdit));
  }),
];
