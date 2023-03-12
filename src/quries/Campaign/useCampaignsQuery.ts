import { useQuery } from '@tanstack/react-query';
import { getCampaignsCreate } from '../../api/Campaign/listCampaign';

const useCampaignsQuery = (pageNum: number, count: number) => {
  return useQuery(['campaignGroups', pageNum, count], () => getCampaignsCreate(pageNum, count));
};

export default useCampaignsQuery;
