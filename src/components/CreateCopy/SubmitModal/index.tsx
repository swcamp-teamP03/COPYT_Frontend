import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../common/Button';
import Modal from '../../common/Modal';

interface SubmitModalProps {
  showSubmitModal: boolean;
  handleSubmitModal: () => void;
}

const SubmitModal = ({ showSubmitModal, handleSubmitModal }: SubmitModalProps) => {
  const navigate = useNavigate();

  const onClickYes = () => {
    navigate('/copies');
  };

  return (
    <Modal.Frame isOpen={showSubmitModal} onClick={handleSubmitModal} height="150px">
      <Modal.Body>저장되었습니다!</Modal.Body>
      <Modal.Footer>
        <Button buttonColor="blue" buttonSize="buttonS" onButtonClick={onClickYes} title="확인" />
      </Modal.Footer>
    </Modal.Frame>
  );
};

export default SubmitModal;
