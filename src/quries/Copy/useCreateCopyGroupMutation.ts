import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { createCopyGroup } from '../../api/Copy/createCopy';
import { CopyCondition, CopyListType } from '../../types/copy';

const useCreateCopyGroupMutation = () => {
  const navigate = useNavigate();
  return useMutation(createCopyGroup, {
    onSuccess: () => {
      navigate(-1);
    },
  });
};

export default useCreateCopyGroupMutation;
