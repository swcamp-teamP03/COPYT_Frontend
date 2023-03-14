import { useQuery } from '@tanstack/react-query';
import { getCampaignDetail } from '../../api/Campaign/detailCampaign';

const useDetailCampaignQuery = (id: string | undefined) => {
  return useQuery(['detailCampaign', id], getCampaignDetail, {
    enabled: !!id,
    staleTime: 1000 * 60 * 5,
  });
};

export default useDetailCampaignQuery;
