import React from 'react';
import { useRecoilValue } from 'recoil';
import PopupComponent from '../../components/common/PopupComponent';
import { popupState } from '../../store/popupListState';

const PopupJs = () => {
  const modalProps = useRecoilValue(popupState);
  const renderComponent = () => {
    if (!modalProps) {
      return null;
    }

    return <PopupComponent {...modalProps} />;
  };

  return <>{renderComponent()}</>;
};

export default PopupJs;
