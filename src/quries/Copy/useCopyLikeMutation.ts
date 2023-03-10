import { likedCopy } from './../../api/Copy/copyGroups';
import { useQueryClient, useMutation } from '@tanstack/react-query';

const useCopyLikeMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(likedCopy, {
    onMutate: async (like) => {
      await queryClient.cancelQueries({ queryKey: ['copyGroups'] });
      const previous = queryClient.getQueriesData(['copyGroups']);
    },
  });
};

export default useCopyLikeMutation;
