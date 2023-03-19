import React, { Dispatch, SetStateAction } from 'react';
import { COPY_MESSAGE } from '../../../constants/copyMessage';
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
    <Modal.Frame height="120px" isOpen={showEditWarnModal} onClick={handleEditWarnModal}>
      <Modal.Body>{COPY_MESSAGE.EDIT}</Modal.Body>
      <Modal.Footer>
        <Button title="취소" buttonColor="white" buttonSize="buttonS" onButtonClick={onClickNo} />
        <Button title="수정하기" buttonColor="blue" onButtonClick={onClickYes} />
      </Modal.Footer>
    </Modal.Frame>
  );
};

export default EditWarningModal;
