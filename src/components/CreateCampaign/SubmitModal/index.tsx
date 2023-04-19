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
    // navigate('/campaign');
    handleModal();
  };
  return (
    <Modal.Frame isOpen={isOpen} onClick={handleModal} height="100px">
      {/* <Modal.Body>캠페인이 생성되었습니다.</Modal.Body> */}
      <Modal.Body>
        <span>캠페인 실행은 데모 버전에서 사용할 수 없는 기능이에요.</span>
        <br />
        <span>"나에게 테스트 하기"로 문자를 보내보세요.</span>
      </Modal.Body>
      <Modal.Footer>
        <Button buttonColor="blue" title="확인" onButtonClick={onClickConfirm} buttonSize="buttonS" />
      </Modal.Footer>
    </Modal.Frame>
  );
};

export default CampaignSubmitModal;
