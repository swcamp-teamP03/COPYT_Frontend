import React from 'react';
import Button from '../common/Button';
import Modal from '../common/Modal';

interface FileUploadModalProps {
  showModal: boolean;
  handleDeleteModal: () => void;
}

const FileUploadModal = ({ showModal, handleDeleteModal }: FileUploadModalProps) => {
  return (
    <Modal.Frame isOpen={showModal} onClick={handleDeleteModal}>
      <Modal.Body>파일 재업로드 시, 기존 파일은 삭제됩니다. 삭제하시겠습니까?</Modal.Body>
      <Modal.Footer>
        <Button title="확인" buttonColor="black" onButtonClick={handleDeleteModal} />
      </Modal.Footer>
    </Modal.Frame>
  );
};

export default FileUploadModal;
