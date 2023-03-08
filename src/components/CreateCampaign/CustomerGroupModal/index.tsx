import React from 'react';
import { useRecoilValue } from 'recoil';
import { campaignConditionState } from '../../../store/campaignConditionState';
import Modal from '../../common/Modal';

interface CustomerGroupModalProps {
  isOpen: boolean;
  handler: () => void;
}

const CustomerGroupModal = ({ isOpen, handler }: CustomerGroupModalProps) => {
  const condition = useRecoilValue(campaignConditionState);

  return (
    <Modal.Frame isOpen={isOpen} onClick={handler} height="fit-content" width="50%">
      <Modal.Header onClick={handler}>고객 그룹 불러오기</Modal.Header>
      <Modal.Body>
        <h4>고객 그룹 선택</h4>
        {/* TODO : 고객 그룹 선택 컴포넌트 넣기 */}
      </Modal.Body>
    </Modal.Frame>
  );
};

export default CustomerGroupModal;