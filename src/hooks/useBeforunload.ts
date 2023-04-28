import { useEffect } from 'react';
import { PREVENT_MESSAGE } from '../constants/Prevent';
import usePopup from './PopUp/usePopUp';

interface usePreventEventProps {
  when: boolean;
}

const useBeforeunload = ({ when }: usePreventEventProps) => {
  const { openPopup, closePopup } = usePopup();

  const handleConfirm = () => {
    closePopup();
    history.back();
  };

  const preventGoBack = () => {
    openPopup({
      message: PREVENT_MESSAGE,
      confirmText: '확인',
      cancelText: '취소',
      handleConfirm: handleConfirm,
      handleClose: closePopup,
    });
  };

  const blockRefresh = (event: BeforeUnloadEvent) => {
    event.preventDefault();
    event.returnValue = '';
  };

  useEffect(() => {
    if (!when) return;
    window.addEventListener('beforeunload', blockRefresh);
    return () => {
      window.removeEventListener('beforeunload', blockRefresh);
    };
  }, [when]);

  useEffect(() => {
    if (!when) return;
    history.pushState(null, '', location.pathname);
    window.addEventListener('popstate', preventGoBack);
    return () => {
      window.removeEventListener('popstate', preventGoBack);
    };
  }, [when]);
};

export default useBeforeunload;
