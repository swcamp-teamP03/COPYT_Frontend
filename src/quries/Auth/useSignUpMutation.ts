import { useMutation } from '@tanstack/react-query';
import { postSignUp } from '../../api/Auth/signUp';

const useSignUpMutation = () => {
  return useMutation(postSignUp);
};

export default useSignUpMutation;
