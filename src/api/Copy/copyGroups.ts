import { api } from '..';
import { QueryFunctionContext } from '@tanstack/react-query';
import { CopyGroupsReturn } from '../../types/copy';

export const getCopyGroups = async ({ queryKey }: QueryFunctionContext<[string, number | undefined, number | undefined]>): Promise<CopyGroupsReturn> => {
  const [_, pageNum, count] = queryKey;
  const res = await api.get(`/copies?page=${pageNum}&size=${count}`);
  return res.data.data;
};
