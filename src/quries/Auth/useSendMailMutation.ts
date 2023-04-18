import { useMutation } from '@tanstack/react-query';
import { sendEmail } from '../../api/Auth/signUp';

interface UseSendMailMutationProps {
  onSendEmail: () => void;
}

const useSendMailMutation = ({ onSendEmail }: UseSendMailMutationProps) => {
  return useMutation(sendEmail, {
    onSuccess: () => {
      alert('메일함에서 인증번호를 확인해 주세요');
      onSendEmail();
    },
  });
};

export default useSendMailMutation;
