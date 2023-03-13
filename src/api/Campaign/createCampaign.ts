import { api } from '..';
import { BASE_URL } from '../../constants/api';
import { CampignConditionInit } from '../../store/campaignConditionState';
import { CreateCampaignResult } from '../../types/campaign';

export const createCamapign = async (condition: CampignConditionInit): Promise<CreateCampaignResult | null> => {
  const res = await api.post(`${BASE_URL}/campaign`, { ...condition });
  if (res.data.success) {
    return res.data;
  }
  return null;
};
