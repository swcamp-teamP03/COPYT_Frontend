import { useQuery } from '@tanstack/react-query';
import { getCampaignDetail } from '../../api/Campaign/DetailCampaign';

const useDetailCampaignQuery = (id: string | undefined) => {
  return useQuery(['detailCampaign', id], getCampaignDetail, {
    enabled: !!id,
    staleTime: 1000 * 60 * 5,
    suspense: true,
  });
};

export default useDetailCampaignQuery;
