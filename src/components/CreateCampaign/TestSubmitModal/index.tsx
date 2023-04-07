import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../common/Button';
import Modal from '../../common/Modal';
import * as S from './TestSubmitModal.styles';

interface TestSubmitModalProps {
  isOpen: boolean;
  handleModal: () => void;
}

const TestSubmitModal = ({ isOpen, handleModal }: TestSubmitModalProps) => {
  const navigate = useNavigate();

  const onClickConfirm = () => {
    navigate('/campaign');
  };

  return (
    <Modal.Frame isOpen={isOpen} onClick={handleModal} borderRadius={'12px'} height="400px" width="700px">
      <Modal.Body height="100%">
        <S.Layout>
          <S.Text>
            <span>발송이 완료 되었습니다.</span>
            <span>테스트는 캠페인 리스트에 저장 되지 않아요!</span>
          </S.Text>
          <Button title="캠페인 리스트로 돌아가기" buttonColor="white" buttonSize="buttonL" onButtonClick={onClickConfirm} />
        </S.Layout>
      </Modal.Body>
    </Modal.Frame>
  );
};

export default TestSubmitModal;
