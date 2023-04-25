import { atom } from 'recoil';

export interface PopUpStateType {
  message: string;
  confirmText?: string;
  handleClose: (...arg: any[]) => any;
  handleConfirm: (...arg: any[]) => any;
  width?: string;
  height?: string;
}

export const popupState = atom<PopUpStateType | null>({
  key: 'popupState',
  default: null,
});
