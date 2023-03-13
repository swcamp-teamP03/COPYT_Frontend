import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { postSignIn } from '../../api/Auth/signIn';

const useSignInMutation = (setError: <P extends 'signIn'>(target: P, bool: boolean) => boolean) => {
  const navigate = useNavigate();
  return useMutation(postSignIn, {
    onSuccess: ({ data }) => {
      navigate('/');
    },
    onError: (error) => {
      setError('signIn', true);
    },
  });
};

export default useSignInMutation;
