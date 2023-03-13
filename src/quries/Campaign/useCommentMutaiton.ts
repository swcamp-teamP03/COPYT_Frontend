import { DetailCampaignResult } from './../../types/campaign.d';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { postComment } from '../../api/Campaign/detailCampaign';

const useCommentMutaion = () => {
  const queryClient = useQueryClient();
  return useMutation(postComment, {
    onMutate: async ({ id, comment }: { id: string | undefined; comment: string }) => {
      const previous = queryClient.getQueryData<DetailCampaignResult>(['detailCampaign', id]);
      await queryClient.cancelQueries({ queryKey: ['detailCampaign', id] });

      if (previous) {
        queryClient.setQueryData<DetailCampaignResult>(['detialCampaign', id], {
          ...previous,
          comment,
        });
      }
      return { previous };
    },
    onError: (error, { id, comment }, context) => {
      if (context?.previous) {
        queryClient.setQueryData(['detailCampaign', id], context.previous);
      }
    },
    onSettled: (data, error, { id, comment }, context) => queryClient.invalidateQueries(['detailCampaign', id]),
  });
};

export default useCommentMutaion;
