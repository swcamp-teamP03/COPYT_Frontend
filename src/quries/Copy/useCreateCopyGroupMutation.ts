import { useMutation } from '@tanstack/react-query';
import { Dispatch, SetStateAction } from 'react';

import { createCopyGroup } from '../../api/Copy/createCopy';

const useCreateCopyGroupMutation = (setShowSubmitModal: Dispatch<SetStateAction<boolean>>) => {
  return useMutation(createCopyGroup, {
    onSuccess: () => {
      setShowSubmitModal(true);
    },
  });
};

export default useCreateCopyGroupMutation;
