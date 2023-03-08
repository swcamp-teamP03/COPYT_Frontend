import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import * as S from './CopyGroupModal.styels';
import { campaignConditionState } from '../../../store/campaignConditionState';
import Modal from '../../common/Modal';
import CopyGroupListForModal from './CopyGroupListForModal';
import MessageListForModal from './MessageListForModal';
import CopyListForModal from './CopyListForModal';

interface CopyGroupModalProps {
  isOpen: boolean;
  handler: () => void;
}
export interface SelecetedMessage {
  id: number;
  content: string;
}

const CopyGroupModal = ({ isOpen, handler }: CopyGroupModalProps) => {
  const [condition, setCondition] = useRecoilState(campaignConditionState);
  const [selectedMesssage, setSelecetedMessage] = useState<SelecetedMessage[]>([]);

  return (
    <Modal.Frame isOpen={isOpen} onClick={handler} height="70%" width="70%">
      <Modal.Header onClick={handler}>카피 불러오기</Modal.Header>
      <Modal.Body>
        <S.GridLayout>
          {!condition.group_name ? <CopyGroupListForModal /> : <CopyListForModal setSelecetedMessage={setSelecetedMessage} selectedMesssage={selectedMesssage} />}
          <MessageListForModal selectedMesssage={selectedMesssage} setSelecetedMessage={setSelecetedMessage} modalHandler={handler} />
        </S.GridLayout>
      </Modal.Body>
    </Modal.Frame>
  );
};

export default CopyGroupModal;
