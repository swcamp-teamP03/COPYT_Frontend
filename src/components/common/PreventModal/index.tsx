import React from 'react';
import Button from '../Button';
import Modal from '../Modal';

interface PreventModalProsp {
  isOpen: boolean;
  handleModal: () => void;
}

const PreventModal = ({ isOpen, handleModal }: PreventModalProsp) => {
  const onClickYes = () => {
    history.back();
  };

  return (
    <Modal.Frame isOpen={isOpen} onClick={handleModal} height="150px">
      <Modal.Body>
        작성중 이동하면 작성한 내용이 저장되지 않아요.
        <br />
        이동하시겠습니까?
      </Modal.Body>
      <Modal.Footer>
        <Button title="취소" buttonColor="white" buttonSize="buttonS" onButtonClick={handleModal} />
        <Button title="확인" buttonColor="blue" buttonSize="buttonS" onButtonClick={onClickYes} />
      </Modal.Footer>
    </Modal.Frame>
  );
};

export default PreventModal;
