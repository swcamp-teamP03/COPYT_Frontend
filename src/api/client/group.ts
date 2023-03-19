import { api } from '../index';
import { ClientFavoritType, ClientGroupsResult, CustomerGroup } from '../../types/client';
import { QueryFunctionContext } from '@tanstack/react-query';

export const getClientGroups = async (pageNum: number, count: number): Promise<ClientGroupsResult> => {
  const res = await api.get('/groups', {
    params: {
      page: pageNum,
      size: count,
    },
  });
  return res.data.data;
};

export const favoreitClient = async ({ id, favorite }: { id: number; favorite: boolean }): Promise<ClientFavoritType | null> => {
  const res = await api.post(`/groups/${id}`, {
    favorite: !favorite,
  });
  if (res.data.success) {
    return res.data.data;
  }
  return null;
};

export const getClientGroupDetail = async ({ queryKey }: QueryFunctionContext<[string, string | undefined]>): Promise<CustomerGroup> => {
  const [_, id] = queryKey;
  const res = await api.get(`/groups/${id}`);
  return res.data.data;
};
