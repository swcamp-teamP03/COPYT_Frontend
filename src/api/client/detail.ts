import { api } from '../index';
import { ClientGroupsResult } from '../../types/client';

export const getClientDetail = async (pageNum: number, count: number): Promise<ClientGroupsResult> => {
  const res = await api.get('/groups', {
    params: {
      page: pageNum,
      size: count,
    },
  });
  return res.data.data;
};
