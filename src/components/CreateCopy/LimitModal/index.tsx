import React from 'react';
import { COPY_MESSAGE } from '../../../constants/copyMessage';
import Button from '../../common/Button';
import Modal from '../../common/Modal';

interface CopyCountLimitModalProps {
  showLimitModal: boolean;
  handleLimitModal: () => void;
}

const CopyCountLimitModal = ({ showLimitModal, handleLimitModal }: CopyCountLimitModalProps) => {
  return (
    <Modal.Frame isOpen={showLimitModal} onClick={handleLimitModal} height="120px">
      <Modal.Body>{COPY_MESSAGE.LIMITE_OVER}</Modal.Body>
      <Modal.Footer>
        <Button title="확인" buttonColor="black" onButtonClick={handleLimitModal} />
      </Modal.Footer>
    </Modal.Frame>
  );
};

export default CopyCountLimitModal;
