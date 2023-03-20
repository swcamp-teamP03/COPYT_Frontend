import React, { Dispatch, SetStateAction, useEffect } from 'react';

interface usePreventEventProps {
  showPreventModal: boolean;
  setShowPreventModal: Dispatch<SetStateAction<boolean>>;
}

const usePreventEvent = ({ showPreventModal, setShowPreventModal }: usePreventEventProps) => {
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

export default usePreventEvent;
