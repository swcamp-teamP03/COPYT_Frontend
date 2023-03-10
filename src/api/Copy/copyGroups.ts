import { CopyDetailResult, CopyLikeResult } from './../../types/copy.d';
import { api } from '..';
import { QueryFunctionContext } from '@tanstack/react-query';
import { CopyGroupsResult } from '../../types/copy';

export const getCopyGroups = async (pageNum: number, count: number): Promise<CopyGroupsResult> => {
  const res = await api.get(`/copies?page=${pageNum}&size=${count}`);

  return res.data.data;
};

export const likedCopy = async (id: number): Promise<CopyLikeResult> => {
  const res = await api.post(`/copy/${id}/like`);
  return res.data.data;
};

export const getCopyGroupDetail = async ({ queryKey }: QueryFunctionContext<[string, string | undefined]>): Promise<CopyDetailResult> => {
  const [_, id] = queryKey;
  const res = await api.get(`/copy/${id}`);
  return res.data.data;
};

