import { likeClient } from '../../api/client/group';
import { useQueryClient, useMutation } from '@tanstack/react-query';

const useClientLikeMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(likeClient, {
    onMutate: async (like) => {
      await queryClient.cancelQueries({ queryKey: ['clientGroups'] });
      const previous = queryClient.getQueriesData(['clientGroups']);
    },
  });
};

export default useClientLikeMutation;
