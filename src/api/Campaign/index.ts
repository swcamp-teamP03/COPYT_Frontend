import { api } from '..';
import { CamapaignListResult } from '../../types/campaign';
import { CampignConditionInit } from '../../store/campaignConditionState';
import { CreateCampaignResult } from '../../types/campaign';
import { CommentResult, DetailCampaignResult, SentHistoryResult } from '../../types/campaign';
import { QueryFunctionContext } from '@tanstack/react-query';
import { LikeResult } from '../../types/copy';

export const getCampaignsCreate = async (pageNum: number, count: number): Promise<CamapaignListResult> => {
  const res = await api.get('/campaigns', {
    params: {
      page: pageNum,
      size: count,
    },
  });
  return res.data.data;
};

export const getSentHistory = async ({ queryKey }: QueryFunctionContext<[string, string | undefined]>): Promise<SentHistoryResult | null> => {
  const [_, id] = queryKey;
  const res = await api.get(`/campaigns/${id}/sendmessages`);
  if (res.data.success) {
    return res.data.data;
  }
  return null;
};

export const getCampaignDetail = async ({ queryKey }: QueryFunctionContext<[string, string | undefined]>): Promise<DetailCampaignResult | null> => {
  const [_, id] = queryKey;
  const res = await api.get(`/campaigns/${id}`);
  if (res.data.success) {
    return res.data.data;
  }
  return null;
};

export const postComment = async ({ id, comment }: { id: string | undefined; comment: string }): Promise<CommentResult | null> => {
  const res = await api.post(`/campaigns/${id}/comment`, { comment });
  if (res.data.success) {
    return res.data.data;
  }
  return null;
};

export const createCamapign = async (condition: CampignConditionInit): Promise<CreateCampaignResult | null> => {
  const res = await api.post(`/campaign`, { ...condition });
  if (res.data.success) {
    return res.data;
  }
  return null;
};

export const likeCampaign = async ({ id, favorite }: { id: number; favorite: boolean }): Promise<LikeResult | null> => {
  const res = await api.post(`/campaigns/${id}`, {
    favorite: !favorite,
  });
  if (res.data.success) {
    return res.data.data;
  }
  return null;
};
