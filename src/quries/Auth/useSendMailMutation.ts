import { useMutation } from '@tanstack/react-query';
import { sendEmail } from '../../api/Auth/signUp';

interface UseSendMailMutationProps {
  onSendEmailSuccess: () => void;
}

const useSendMailMutation = ({ onSendEmailSuccess }: UseSendMailMutationProps) => {
  return useMutation(sendEmail, {
    onSuccess: () => {
      onSendEmailSuccess();
    },
  });
};

export default useSendMailMutation;
