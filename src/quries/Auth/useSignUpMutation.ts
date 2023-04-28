import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { postSignUp } from '../../api/Auth/signUp';

const useSignUpMutation = () => {
  const navigate = useNavigate();

  return useMutation(postSignUp, {
    onSuccess: () => {
      navigate('/auth/signup/success');
    },
  });
};

export default useSignUpMutation;
