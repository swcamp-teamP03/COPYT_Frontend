import { api } from '../index';
import { QueryFunctionContext } from '@tanstack/react-query';

export type ClientListType = { id: number; content: string; isPinned: boolean };

export interface PostClientList {
  resultList: { content: string }[];
}

export interface ClientGroup {
  customerGroupId: number;
  groupName: string;
  customerCnt: number;
  favorite: boolean;
  csvUploadCheck: boolean;
  date: string;
}

export interface ClientGroupsReturn {
  groupList: ClientGroup[];
  totalgroup: number;
}

export const getClientGroupList = async ({ queryKey }: QueryFunctionContext<[string, number | undefined, number | undefined]>): Promise<ClientGroupsReturn> => {
  const [_, pageNum, count] = queryKey;
  const res = await api.get(`/groups?page=${pageNum}&size=${count}`);
  return res.data.data;
};
