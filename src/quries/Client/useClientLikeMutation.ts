import { favoreitClient } from '../../api/client/group';
import { useQueryClient, useMutation } from '@tanstack/react-query';
import { ClientGroupsResult } from '../../types/client';

const useClientLikeMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(favoreitClient, {
    onMutate: async ({ id }) => {
      await queryClient.cancelQueries({ queryKey: ['clientGroups'] });
      const previousData = queryClient.getQueryData<ClientGroupsResult>(['clientGroups']);

      if (previousData) {
        const target = previousData.groupList.filter((list) => list.customerGroupId === id)[0];
        target.favorite = !target.favorite;

        queryClient.setQueryData<ClientGroupsResult>(['clientGroups'], () => {
          return { ...previousData };
        });
      }

      return { previousData };
    },
    onError: (error, value, context) => {
      if (context?.previousData) {
        queryClient.setQueryData<ClientGroupsResult>(['clientGroups'], context.previousData);
      }
    },
    onSettled: () => queryClient.invalidateQueries(['clientGroups']),
  });
};

export default useClientLikeMutation;
