import { api } from '..';
import { CampaignsListType } from '../../types/campaign';

export const getCampaignsCreate = async (pageNum: number, count: number): Promise<CampaignsListType> => {
  const res = await api.get('/campaigns', {
    params: {
      page: pageNum,
      size: count,
    },
  });
  return res.data.data;
};
