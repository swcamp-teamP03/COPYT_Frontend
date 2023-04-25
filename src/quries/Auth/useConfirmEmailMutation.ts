import { useMutation } from '@tanstack/react-query';
import { Dispatch } from 'react';
import { confirmEmail } from '../../api/Auth/signUp';
import { SignUpAction } from '../../components/SignUp/SignupReducer';

interface UseConfirmEmailMutationProps {
  onConfirmEmailSuccess: () => void;
}

const useConfirmEmailMutation = ({ onConfirmEmailSuccess }: UseConfirmEmailMutationProps) => {
  return useMutation(confirmEmail, {
    onSuccess: () => {
      alert('인증이 완료 되었습니다.');
      onConfirmEmailSuccess();
    },
    onError: () => {
      alert('인증번호를 다시 확인해 주세요');
    },
  });
};

export default useConfirmEmailMutation;
