import { AxiosResponse } from 'axios';
import { likedCopy } from './../../api/Copy/copyGroups';
import { useQueryClient, useMutation } from '@tanstack/react-query';
import { CopyGroupsResult } from '../../types/copy';

const useCopyLikeMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(likedCopy, {
    onMutate: async (id) => {
      await queryClient.cancelQueries({ queryKey: ['copyGroups'] });
      const previousData = queryClient.getQueryData<CopyGroupsResult>(['copyGroups']);

      if (previousData) {
        const target = previousData.groupList.filter((list) => list.copyId === id)[0];
        target.favorite = !target.favorite;

        queryClient.setQueryData<CopyGroupsResult>(['copyGroups'], () => {
          return { ...previousData };
        });
      }

      return { previousData };
    },
    onError: (error, value, context) => {
      if (context?.previousData) {
        queryClient.setQueryData<CopyGroupsResult>(['copyGroups'], context.previousData);
      }
    },
    onSettled: () => queryClient.invalidateQueries(['copyGroups']),
  });
};

export default useCopyLikeMutation;
