import { handler } from '../mocks/handler';
import { Dispatch, SetStateAction, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

interface usePreventEventProps {
  showPreventModal: boolean;
  setShowPreventModal: Dispatch<SetStateAction<boolean>>;
}

const useBeforeunload = ({ showPreventModal, setShowPreventModal }: usePreventEventProps) => {
  const detectEvent = (event: BeforeUnloadEvent) => {
    event.returnValue = false;
  };

  useEffect(() => {
    window.addEventListener('beforeunload', detectEvent);
    return () => {
      window.removeEventListener('beforeunload', detectEvent);
    };
  }, []);

  useEffect(() => {
    if (!showPreventModal) {
      history.pushState(null, '', ''); // 현재 페이지 history stack 한개 더 쌓기
      window.onpopstate = () => {
        setShowPreventModal(true);
      };
    } else {
      window.onpopstate = () => {
        setShowPreventModal(false);
      };
    }
  }, [showPreventModal]);
};

export default useBeforeunload;
