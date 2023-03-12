import React from 'react';
import Button from '../common/Button';
import Modal from '../common/Modal';

interface DeleteFileModalProps {
  showModal: boolean;
  handleDeleteModal: () => void;
}

const DeleteFileModal = ({ showModal, handleDeleteModal }: DeleteFileModalProps) => {
  return (
    <Modal.Frame isOpen={showModal} onClick={handleDeleteModal} height="80px">
      <Modal.Body>파일이 삭제되었습니다.</Modal.Body>
      <Modal.Footer>
        <Button title="확인" buttonColor="black" onButtonClick={handleDeleteModal} />
      </Modal.Footer>
    </Modal.Frame>
  );
};

export default DeleteFileModal;
