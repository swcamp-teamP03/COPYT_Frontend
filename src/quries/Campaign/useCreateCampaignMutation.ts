import { useMutation } from '@tanstack/react-query';
import { Dispatch, SetStateAction } from 'react';
import { useNavigate } from 'react-router-dom';
import { createCamapign } from '../../api/Campaign';

const useCreateCampaignMutation = (setShowSubmitModal: Dispatch<SetStateAction<boolean>>) => {
  return useMutation(createCamapign, {
    onSuccess: () => {
      setShowSubmitModal(true);
    },
  });
};

export default useCreateCampaignMutation;
