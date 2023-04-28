import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { confirmEmail } from '../../api/Auth/signUp';
import usePopUp from '../../hooks/PopUp/usePopUp';

interface UseConfirmEmailMutationProps {
  onConfirmEmailSuccess: () => void;
}

const useConfirmEmailMutation = ({ onConfirmEmailSuccess }: UseConfirmEmailMutationProps) => {
  const { openPopup, closePopup } = usePopUp();

  return useMutation(confirmEmail, {
    onSuccess: () => {
      onConfirmEmailSuccess();
    },
    onError: (error) => {
      const axiosError = error as unknown as AxiosError;
      const { response } = axiosError;
      if (response?.status === 400) {
        openPopup({
          message: '이메일 인증번호가 일치하지 않습니다.',
          confirmText: '확인',
          handleConfirm: closePopup,
          handleClose: closePopup,
        });
      }
    },
  });
};

export default useConfirmEmailMutation;
