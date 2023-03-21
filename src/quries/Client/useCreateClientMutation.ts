import { postClientCreate } from '../../api/client/create';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

const useCreatClientMutation = () => {
  const navigate = useNavigate();
  return useMutation(postClientCreate, {
    onSuccess: () => {
      navigate('/clients');
    },
  });
};

export default useCreatClientMutation;
