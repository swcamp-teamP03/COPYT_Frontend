import React from 'react';
import Button from '../../common/Button';
import Modal from '../../common/Modal';

interface CopyCountLimitModalProps {
  showLimitModal: boolean;
  handleLimitModal: () => void;
}

const CopyCountLimitModal = ({ showLimitModal, handleLimitModal }: CopyCountLimitModalProps) => {
  return (
    <Modal.Frame isOpen={showLimitModal} onClick={handleLimitModal} height="80px">
      <Modal.Body>최대 20개 까지 생성할 수 있어요!</Modal.Body>
      <Modal.Footer>
        <Button title="확인" buttonColor="black" onButtonClick={handleLimitModal} />
      </Modal.Footer>
    </Modal.Frame>
  );
};

export default CopyCountLimitModal;
