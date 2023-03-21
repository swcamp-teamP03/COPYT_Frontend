import React from 'react';
import Button from '../common/Button';
import Modal from '../common/Modal';

interface DeleteFileModalProps {
  deleteModal: boolean;
  handleDeleteModal: () => void;
}

const DeleteFileModal = ({ deleteModal, handleDeleteModal }: DeleteFileModalProps) => {
  return (
    <Modal.Frame isOpen={deleteModal} onClick={handleDeleteModal} height="80px">
      <Modal.Body>파일이 삭제되었습니다.</Modal.Body>
      <Modal.Footer>
        <Button title="확인" buttonColor="blue" onButtonClick={handleDeleteModal} />
      </Modal.Footer>
    </Modal.Frame>
  );
};

export default DeleteFileModal;
