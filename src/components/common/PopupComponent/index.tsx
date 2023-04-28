import React from 'react';
import { PopUpStateType } from '../../../store/popupListState';
import Button from '../Button';
import Modal from '../Modal';

const PopupComponent = ({ message, confirmText = '확인', cancelText, handleClose, handleConfirm, width = '400px', height = '120px' }: PopUpStateType) => {
  return (
    <Modal.Frame isOpen={true} onClick={handleClose} height={height} width={width} borderRadius="24px">
      <Modal.Body>
        <span>{message}</span>
      </Modal.Body>
      <Modal.Footer>
        {cancelText && <Button title={cancelText} onButtonClick={handleClose} buttonColor="white" buttonSize="buttonS" />}
        <Button title={confirmText} onButtonClick={handleConfirm} buttonColor="blue" buttonSize="buttonS" />
      </Modal.Footer>
    </Modal.Frame>
  );
};

export default PopupComponent;
