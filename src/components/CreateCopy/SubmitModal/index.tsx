import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../common/Button';
import Modal from '../../common/Modal';
import * as S from './SubmitModal.styles';
import { motion } from 'framer-motion';
import { POST_SVG } from '../../../assets/Post';

interface SubmitModalProps {
  showSubmitModal: boolean;
  handleSubmitModal: () => void;
  onClickYes: () => void;
}

const SubmitModal = ({ showSubmitModal, handleSubmitModal, onClickYes }: SubmitModalProps) => {
  const navigate = useNavigate();

  const goCampaign = () => {
    navigate('/campaign/create');
  };

  const goList = () => {
    navigate('/copies');
  };

  return (
    <Modal.Frame isOpen={showSubmitModal} onClick={handleSubmitModal} height="400px" width="700px" borderRadius="12px">
      <Modal.Body height="100%">
        <S.Layout>
          <S.Title>카피 그룹이 저장 되었어요.</S.Title>
          <motion.div animate={{ y: -5 }} transition={{ type: 'spring', damping: 0 }}>
            {POST_SVG.message}
          </motion.div>
          <S.ButtonLayout>
            <S.GoCampaignButton onClick={goCampaign}>
              <span>캠페인 생성하기</span>
              {POST_SVG.mail}
            </S.GoCampaignButton>
            <S.GoListButton onClick={goList}>카피 그룹 리스트로 돌아가기</S.GoListButton>
          </S.ButtonLayout>
        </S.Layout>
      </Modal.Body>
    </Modal.Frame>
  );
};

export default SubmitModal;
