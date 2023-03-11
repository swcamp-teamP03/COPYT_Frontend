import { api } from '../index';
import { ClientGroupsResult } from '../../types/client';

export const getClientGroups = async (pageNum: number, count: number): Promise<ClientGroupsResult> => {
  const res = await api.get('/groups', {
    params: {
      page: pageNum,
      size: count,
    },
  });
  return res.data.data;
};
