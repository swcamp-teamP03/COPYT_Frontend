import React from 'react';
import { useParams } from 'react-router-dom';
import useSenHisoryQuery from '../../../quries/Campaign/useSentHistoryQuery';
import Modal from '../../common/Modal';
import * as S from './SentHistoryModal.styles';

interface SentHistoryModalProps {
  isOpen: boolean;
  handleModal: () => void;
}

const SentHistoryModal = ({ isOpen, handleModal }: SentHistoryModalProps) => {
  const { campaignID } = useParams();

  const { data: sentHistory } = useSenHisoryQuery(campaignID);

  return (
    <Modal.Frame isOpen={isOpen} onClick={handleModal} width="70%" height="50%">
      <Modal.Header onClick={handleModal}>발송 내역 상세보기</Modal.Header>
      <Modal.Body>
        <S.CategoryLayout>
          <div>번호</div>
          <div>발송카피</div>
          <div>발송일시</div>
          <div>이름</div>
          <div>수신번호</div>
          <div>발송결과</div>
          <div>실패사유</div>
        </S.CategoryLayout>
        <S.ListLayout>
          {sentHistory?.sendList.map((list, idx) => (
            <S.CategoryLayout key={idx}>
              <div>{list.sendMessageId}</div>
              <div>A</div>
              <div>{list.sendDate.replace('T', ' ')}</div>
              <div>{list.name}</div>
              <div>{list.phone}</div>
              <div>{list.state}</div>
              <div>{list.errorMessage}</div>
            </S.CategoryLayout>
          ))}
        </S.ListLayout>
      </Modal.Body>
    </Modal.Frame>
  );
};

export default SentHistoryModal;
