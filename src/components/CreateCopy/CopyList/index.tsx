import React, { Dispatch, SetStateAction, useState } from 'react';
import Modal from '../../common/Modal';
import CopyListItem from '../CopyListItem';
import * as S from './CopyList.styles';

interface CopyListProps {
  data: { content: string }[];
  selectedCopy: string[];
  setSelectedCopy: Dispatch<SetStateAction<string[]>>;
}

const CopyList = ({ data, selectedCopy, setSelectedCopy }: CopyListProps) => {
  const [showLimitedModal, setShowLimitedModal] = useState(false);

  const fullSelected = selectedCopy.length === 2;

  const isSelectedCopy = (content: string) => {
    return selectedCopy.includes(content);
  };

  const handelLimtedModal = () => {
    setShowLimitedModal((prev) => !prev);
  };

  return (
    <>
      <S.CopyListContainer>
        {data ? (
          data.map((data, idx) => (
            <CopyListItem
              content={data.content}
              key={idx}
              isSelected={isSelectedCopy(data.content)}
              setSelectedCopy={setSelectedCopy}
              fullSelected={fullSelected}
              setShowLimitedModal={setShowLimitedModal}
            />
          ))
        ) : (
          <S.NonData>
            <span>조건을 작성하고 생성해주세요</span>
          </S.NonData>
        )}
      </S.CopyListContainer>
      <Modal.Frame isOpen={showLimitedModal} onClick={handelLimtedModal} height={'100px'}>
        <Modal.Body>
          <S.ModalBody>
            <span>카피 개수는 최대 2개까지만 선택 할 수 있어요.</span>
          </S.ModalBody>
        </Modal.Body>
        <Modal.Footer>
          <button onClick={handelLimtedModal}>확인</button>
        </Modal.Footer>
      </Modal.Frame>
    </>
  );
};

export default CopyList;
