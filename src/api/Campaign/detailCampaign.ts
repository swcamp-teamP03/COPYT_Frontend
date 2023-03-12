import { BASE_URL } from './../../constants/api';
import { api } from '..';
import { CommentResult, DetailCampaignResult, SentHistoryResult } from '../../types/campaign';
import { QueryFunctionContext } from '@tanstack/react-query';

export const getSentHistory = async ({ queryKey }: QueryFunctionContext<[string, string | undefined]>): Promise<SentHistoryResult | null> => {
  const [_, id] = queryKey;
  const res = await api.get(`${BASE_URL}/campaigns/${id}/sendmessages`);
  if (res.data.success) {
    return res.data;
  }
  return null;
};

export const getCampaignDetail = async ({ queryKey }: QueryFunctionContext<[string, string | undefined]>): Promise<DetailCampaignResult | null> => {
  const [_, id] = queryKey;
  const res = await api.get(`${BASE_URL}/campaigns/${id}`);
  if (res.data.success) {
    return res.data.data;
  }
  return null;
};

export const postComment = async ({ id, comment }: { id: string | undefined; comment: string }): Promise<CommentResult | null> => {
  const res = await api.post(`${BASE_URL}/campaigns/${id}/comment`, { comment });
  if (res.data.success) {
    return res.data.data;
  }
  return null;
};
