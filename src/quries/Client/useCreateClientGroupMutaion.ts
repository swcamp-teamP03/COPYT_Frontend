import { useMutation } from '@tanstack/react-query';
import { Dispatch, SetStateAction } from 'react';

import { postClientCreate } from '../../api/client/create';

const useCreateClientGroupMutaion = (setShowSubmitModal: Dispatch<SetStateAction<boolean>>) => {
  return useMutation(postClientCreate, {
    onSuccess: () => {
      setShowSubmitModal(true);
    },
  });
};

export default useCreateClientGroupMutaion;
