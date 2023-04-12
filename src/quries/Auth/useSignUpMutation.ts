import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { postSignUp } from '../../api/Auth/signUp';

type ErrorResponse = {
  message: string;
  detail?: string;
};

const useSignUpMutation = () => {
  const navigate = useNavigate();

  return useMutation(postSignUp, {
    onSuccess: ({ data }) => {
      alert('카피티에 오신 것을 환영합니다.');
      navigate('/');
    },
    onError: (error: any) => {
      const errorResponse = error.response;
      const errorData = errorResponse && errorResponse.data;

      if (errorData && errorData.error && errorData.error.detail) {
        const errorMessage = errorData.error.detail;
        alert(`회원가입 실패: ${errorMessage}`);
      } else {
        alert('회원가입 실패');
      }
    },
  });
};

export default useSignUpMutation;
