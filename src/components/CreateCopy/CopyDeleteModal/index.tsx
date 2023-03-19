import React from 'react';
import Button from '../../common/Button';
import Modal from '../../common/Modal';

interface CopyDeleteModalProps {
  showDeleteModal: boolean;
  handleDeleteModal: () => void;
  onClickYes: () => void;
}

const CopyDeleteModal = ({ showDeleteModal, handleDeleteModal, onClickYes }: CopyDeleteModalProps) => {
  return (
    <Modal.Frame isOpen={showDeleteModal} onClick={handleDeleteModal} height="150px">
      <Modal.Body>삭제되면 다시 돌릴 수 없어요!</Modal.Body>
      <Modal.Footer>
        <Button title="취소" buttonColor="white" buttonSize="buttonS" onButtonClick={handleDeleteModal} />
        <Button title="확인" buttonColor="blue" buttonSize="buttonS" onButtonClick={onClickYes} />
      </Modal.Footer>
    </Modal.Frame>
  );
};

export default CopyDeleteModal;
