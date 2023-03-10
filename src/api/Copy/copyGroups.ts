import { CopyDetailResult, CopyLikeResult } from './../../types/copy.d';
import { api } from '..';
import { QueryFunctionContext } from '@tanstack/react-query';
import { CopyGroupsResult } from '../../types/copy';

export const getCopyGroups = async (pageNum: number, count: number): Promise<CopyGroupsResult | null> => {
  const res = await api.get(`/copies?page=${pageNum}&size=${count}`);
  if (res.statusText === 'OK') {
    return res.data.data;
  }
  return null;
};

export const likedCopy = async (id: number): Promise<CopyLikeResult | null> => {
  const res = await api.post(`/copy/${id}/like`);
  if (res.statusText === 'OK') {
    return res.data.data;
  }
  return null;
};

export const getCopyGroupDetail = async ({ queryKey }: QueryFunctionContext<[string, string | undefined]>): Promise<CopyDetailResult | null> => {
  const [_, id] = queryKey;
  const res = await api.get(`/copy/${id}`);
  if (res.statusText === 'OK') {
    return res.data.data;
  }
  return null;
};
