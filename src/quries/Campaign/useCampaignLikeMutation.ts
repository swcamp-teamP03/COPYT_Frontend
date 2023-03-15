import { likeCampaign } from './../../api/Campaign/index';
import { useQueryClient, useMutation } from '@tanstack/react-query';
import { CamapaignListResult } from '../../types/campaign';

const useCampaignLikeMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(likeCampaign, {
    onMutate: async ({ id }) => {
      await queryClient.cancelQueries({ queryKey: ['campaignGroups'] });
      const previousData = queryClient.getQueryData<CamapaignListResult>(['campaignGroups']);

      if (previousData) {
        const target = previousData.campaignList.filter((list) => list.campaignId === id)[0];
        target.favorite = !target.favorite;

        queryClient.setQueryData<CamapaignListResult>(['campaignGroups'], () => {
          return { ...previousData };
        });
      }

      return { previousData };
    },
    onError: (error, value, context) => {
      if (context?.previousData) {
        queryClient.setQueryData<CamapaignListResult>(['campaginGroups'], context.previousData);
      }
    },
    onSettled: () => queryClient.invalidateQueries(['campaignGroups']),
  });
};

export default useCampaignLikeMutation;
