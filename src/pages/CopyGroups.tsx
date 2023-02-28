import React, { useState } from 'react';
import Modal from '../components/common/Modal';

const CopyGroups = () => {
  const [showModal, setShowModal] = useState(true);

  const hanldeModal = () => setShowModal((prev) => !prev);

  return (
    <>
      <Modal.Frame isOpen={showModal} onClick={hanldeModal}>
        <Modal.Header onClick={hanldeModal}>안녕~!!</Modal.Header>
      </Modal.Frame>
    </>
  );
};

export default CopyGroups;
