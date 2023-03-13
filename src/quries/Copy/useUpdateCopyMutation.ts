import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateCopy } from '../../api/Copy/createCopy';
import { CopyDetailResult } from '../../types/copy';

const useUpdateCopyMutation = () => {
  const queryClient = useQueryClient();

  return useMutation(updateCopy, {
    onMutate: async ({ id, list }) => {
      await queryClient.cancelQueries({ queryKey: ['copyDetails', id] });

      const previousData = queryClient.getQueryData<CopyDetailResult>(['copyDetails', id]);

      if (previousData) {
        queryClient.setQueryData<CopyDetailResult>(['copyDetails', id], {
          ...previousData,
          copyList: list,
        });
      }

      return { previousData };
    },
    onError: (error, value, context) => {
      if (context?.previousData) {
        queryClient.setQueryData<CopyDetailResult>(['copyDetails', value.id], context.previousData);
      }
    },
    onSettled: (data, error, { id }, context) => queryClient.invalidateQueries(['copyDetails', id]),
  });
};

export default useUpdateCopyMutation;
