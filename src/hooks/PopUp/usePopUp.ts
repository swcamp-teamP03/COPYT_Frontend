import { useRecoilState } from 'recoil';
import { popupState, PopUpStateType } from '../../store/popupListState';

const usePopUp = () => {
  const [popup, setPopup] = useRecoilState(popupState);

  const openPopup = (props: PopUpStateType) => {
    setPopup(props);
  };

  const closePopup = () => {
    setPopup(null);
  };

  return { popup, setPopup, openPopup, closePopup };
};

export default usePopUp;
