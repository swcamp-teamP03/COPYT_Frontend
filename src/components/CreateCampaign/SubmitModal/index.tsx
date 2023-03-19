import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../common/Button';
import Modal from '../../common/Modal';

interface CampaignSubmitModalProps {
  isOpen: boolean;
  handleModal: () => void;
}

const CampaignSubmitModal = ({ isOpen, handleModal }: CampaignSubmitModalProps) => {
  const navigate = useNavigate();

  const onClickConfirm = () => {
    navigate('/campaign');
  };
  return (
    <Modal.Frame isOpen={isOpen} onClick={handleModal} height="150px">
      <Modal.Body>캠페인이 생성되었습니다.</Modal.Body>
      <Modal.Footer>
        <Button buttonColor="blue" title="확인" onButtonClick={onClickConfirm} buttonSize="buttonS" />
      </Modal.Footer>
    </Modal.Frame>
  );
};

export default CampaignSubmitModal;
