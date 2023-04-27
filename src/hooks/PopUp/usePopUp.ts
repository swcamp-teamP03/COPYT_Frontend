import { useRecoilState } from 'recoil';
import { popupState, PopUpStateType } from '../../store/popupListState';

const usePopUp = () => {
  const [popup, setPopup] = useRecoilState(popupState);

  const openPopup = (props: PopUpStateType) => {
    setPopup(props);
    console.log('open');
  };

  const closePopup = () => {
    console.log('close');
    setPopup(null);
  };

  return { popup, setPopup, openPopup, closePopup };
};

export default usePopUp;
