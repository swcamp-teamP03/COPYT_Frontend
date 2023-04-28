import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { sendEmail } from '../../api/Auth/signUp';
import usePopUp from '../../hooks/PopUp/usePopUp';

interface UseSendMailMutationProps {
  onSendEmailSuccess: () => void;
}

const useSendMailMutation = ({ onSendEmailSuccess }: UseSendMailMutationProps) => {
  const { openPopup, closePopup } = usePopUp();

  return useMutation(sendEmail, {
    onSuccess: () => {
      onSendEmailSuccess();
    },
    onError: (error) => {
      const axiosError = error as unknown as AxiosError;
      const { response } = axiosError;
      if (response?.status === 400) {
        openPopup({
          message: '이미 존재하는 이메일 입니다',
          confirmText: '확인',
          handleConfirm: closePopup,
          handleClose: closePopup,
        });
      }
    },
  });
};

export default useSendMailMutation;
