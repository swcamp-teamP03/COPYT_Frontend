import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { postSignIn } from '../../api/Auth/signIn';

const useSignInMutation = (setError: <P extends 'signIn'>(target: P, message: string) => string) => {
  const navigate = useNavigate();
  return useMutation(postSignIn, {
    onSuccess: ({ data }) => {
      navigate('/main');
    },
    onError: (error) => {
      // setError('signIn', true);
    },
  });
};

export default useSignInMutation;
