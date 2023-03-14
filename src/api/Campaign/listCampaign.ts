import { api } from '..';
import { CamapaignListResult } from '../../types/campaign';

export const getCampaignsCreate = async (pageNum: number, count: number): Promise<CamapaignListResult> => {
  const res = await api.get('/campaigns', {
    params: {
      page: pageNum,
      size: count,
    },
  });
  return res.data.data;
};
