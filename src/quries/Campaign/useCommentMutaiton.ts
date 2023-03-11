import { DetailCampaignResult } from './../../types/campaign.d';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { postComment } from '../../api/Campaign/DetailCampaign';
import { AxiosResponse } from 'axios';

const useCommentMutaion = () => {
  const queryClient = useQueryClient();
  return useMutation(postComment, {
    onMutate: async ({ id, comment }: { id: string | undefined; comment: string }) => {
      const previous = queryClient.getQueryData<AxiosResponse<DetailCampaignResult>>(['detailCampaign', id]);
      await queryClient.cancelQueries({ queryKey: ['detailCampaign', id] });

      if (previous) {
        queryClient.setQueryData<AxiosResponse<DetailCampaignResult>>(['detialCampaign', id], {
          ...previous,
          data: {
            ...previous.data,
            comment,
          },
        });
      }
      return { previous };
    },
    onError: (error, { id, comment }, context) => {
      if (context?.previous) {
        queryClient.setQueryData(['detailCampaign', id], context.previous);
      }
    },
  });
};

export default useCommentMutaion;
