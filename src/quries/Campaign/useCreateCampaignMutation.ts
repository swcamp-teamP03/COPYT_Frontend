import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { createCamapign } from '../../api/Campaign';

const useCreateCampaignMutation = () => {
  const navigate = useNavigate();

  return useMutation(createCamapign, {
    onSuccess: () => {
      navigate('/campaign');
    },
  });
};

export default useCreateCampaignMutation;
