import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { createCamapign } from '../../api/Campaign/createCampaign';

const useCreateCampaignMutation = () => {
  const navigate = useNavigate();

  return useMutation(createCamapign, {
    onSuccess: () => {
      navigate('/campaigns');
    },
  });
};

export default useCreateCampaignMutation;
