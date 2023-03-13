import React from 'react';
import { COPY_MESSAGE } from '../../../constants/copyMessage';
import Button from '../../common/Button';
import Modal from '../../common/Modal';

interface ScantyModalProps {
  showScantyModal: boolean;
  handleScantyModal: () => void;
}

const ScantyModal = ({ showScantyModal, handleScantyModal }: ScantyModalProps) => {
  return (
    <>
      <Modal.Frame isOpen={showScantyModal} onClick={handleScantyModal} height="150px">
        <Modal.Body>{COPY_MESSAGE.SCANTY}</Modal.Body>
        <Modal.Footer>
          <Button buttonColor="blue" buttonSize="buttonS" onButtonClick={handleScantyModal} title="확인" />
        </Modal.Footer>
      </Modal.Frame>
    </>
  );
};

export default ScantyModal;
