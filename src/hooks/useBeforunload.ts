import { Dispatch, SetStateAction, useEffect } from 'react';

interface usePreventEventProps {
  when: boolean;
  setShowPreventModal: Dispatch<SetStateAction<boolean>>;
}

const useBeforeunload = ({ when, setShowPreventModal }: usePreventEventProps) => {
  const detectEvent = (event: BeforeUnloadEvent) => {
    event.preventDefault();
    event.returnValue = false;
  };

  useEffect(() => {
    if (!when) return;
    window.addEventListener('beforeunload', detectEvent);
    return () => {
      window.removeEventListener('beforeunload', detectEvent);
    };
  }, [when]);

  useEffect(() => {
    if (!when) return;
    history.pushState(null, '', location.href); // 현재 페이지 history stack 한개 더 쌓기
    window.onpopstate = () => {
      setShowPreventModal(true);
    };
  }, [when]);
};

export default useBeforeunload;
