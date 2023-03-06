import React, { Dispatch, SetStateAction } from 'react';
import Button from '../../common/Button';
import Modal from '../../common/Modal';

interface EditWarninModalProps {
  handleEditWarnModal: () => void;
  showEditWarnModal: boolean;
  setIsEditMode: Dispatch<SetStateAction<boolean>>;
}

const EditWarningModal = ({ showEditWarnModal, handleEditWarnModal, setIsEditMode }: EditWarninModalProps) => {
  const onClickNo = () => {
    handleEditWarnModal();
  };
  const onClickYes = () => {
    setIsEditMode(true);
    handleEditWarnModal();
  };

  return (
    <Modal.Frame height="80px" isOpen={showEditWarnModal} onClick={handleEditWarnModal}>
      <Modal.Body>텍스트 수정 후 저장하면 원본으로 돌아갈 수 없어요.</Modal.Body>
      <Modal.Footer>
        <Button title="취소" buttonColor="white" buttonSize="buttonS" onButtonClick={onClickNo} />
        <Button title="수정하기" buttonColor="black" onButtonClick={onClickYes} />
      </Modal.Footer>
    </Modal.Frame>
  );
};

export default EditWarningModal;
