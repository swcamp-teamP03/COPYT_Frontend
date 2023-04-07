import { useMutation } from '@tanstack/react-query';
import { Dispatch, SetStateAction } from 'react';
import { useNavigate } from 'react-router-dom';
import { createCamapign } from '../../api/Campaign';

const useCreateCampaignMutation = (setShowTestSubmitModal: Dispatch<SetStateAction<boolean>>) => {
  return useMutation(createCamapign, {
    onSuccess: () => {
      setShowTestSubmitModal(true);
    },
  });
};

export default useCreateCampaignMutation;
