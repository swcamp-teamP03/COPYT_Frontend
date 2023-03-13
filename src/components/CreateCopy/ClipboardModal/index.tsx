import React from 'react';
import { COPY_MESSAGE } from '../../../constants/copyMessage';
import Button from '../../common/Button';
import Modal from '../../common/Modal';

interface ClipboardModalProps {
  showClipboardModal: boolean;
  handleClipboardModal: () => void;
}

const ClipboardModal = ({ showClipboardModal, handleClipboardModal }: ClipboardModalProps) => {
  return (
    <Modal.Frame isOpen={showClipboardModal} onClick={handleClipboardModal} height="150px">
      <Modal.Body>{COPY_MESSAGE.CLIPBOARD}</Modal.Body>
      <Modal.Footer>
        <Button buttonColor="blue" buttonSize="buttonS" onButtonClick={handleClipboardModal} title="확인" />
      </Modal.Footer>
    </Modal.Frame>
  );
};

export default ClipboardModal;
