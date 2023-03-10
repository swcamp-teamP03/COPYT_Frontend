import { BASE_URL } from './../../constants/api';
import { api } from '..';
import { DetailCampaignResult, SentHistoryResult } from '../../types/campaign';
import { QueryFunctionContext } from '@tanstack/react-query';

export const getSentHistory = async ({ queryKey }: QueryFunctionContext<[string, string | undefined]>): Promise<SentHistoryResult | null> => {
  const [_, id] = queryKey;
  const res = await api.get(`${BASE_URL}/campaigns/${id}/sendmessages`);
  if (res.statusText === 'OK') {
    return res.data;
  }
  return null;
};

export const getCampaignDetail = async ({ queryKey }: QueryFunctionContext<[string, string | undefined]>): Promise<DetailCampaignResult | null> => {
  const [_, id] = queryKey;
  const res = await api.get(`${BASE_URL}/campaigns/${id}`);
  if (res.statusText === 'OK') {
    return res.data.data;
  }
  return null;
};
