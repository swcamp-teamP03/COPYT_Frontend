import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { PIN, POST_SVG } from '../../../assets';
import { copyListState } from '../../../store/copyListState';
import { CopyListType } from '../../../types/copy';
import Button from '../../common/Button';
import EditWarningModal from '../EditModal';
import * as S from './CopyListItem.styles';

interface CopyListItemProps {
  data: CopyListType;
  handlePinned: (id: number) => void;
}

const CopyListItem = ({ data, handlePinned }: CopyListItemProps) => {
  const [showEditWarnModal, setShowEditWarnModal] = useState(false);
  const [copyList, setCopyList] = useRecoilState(copyListState);
  const [editCopy, setEditCopy] = useState('');
  const [isEditMode, setIsEditMode] = useState(false);

  const editCopyHandler = (id: number) => {
    const target = copyList.filter((list) => list.id === id)[0];
    const index = copyList.indexOf(target);
    const data: CopyListType[] = JSON.parse(JSON.stringify(copyList));
    data[index].content = editCopy;
    setCopyList([...data]);
    setIsEditMode(false);
  };

  const handleText = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setEditCopy(event.currentTarget.value);
  };

  const handleEditWarnModal = () => {
    setShowEditWarnModal((prev) => !prev);
  };

  return (
    <>
      {isEditMode ? (
        <S.Container>
          <S.EditMode>
            <textarea onChange={(e) => handleText(e)}>{data.content}</textarea>
          </S.EditMode>
          <S.Footer>
            <>
              <div></div>
              <div>
                <Button title="취소" buttonColor="white" buttonSize="buttonS" onButtonClick={() => setIsEditMode(false)} />
                <Button title="수정하기" buttonColor="black" onButtonClick={() => editCopyHandler(data.id)} />
              </div>
            </>
          </S.Footer>
        </S.Container>
      ) : (
        <S.Container>
          <span>{data.content}</span>
          <S.Footer>
            <div>{POST_SVG.declation}</div>
            <div>
              <div onClick={() => handlePinned(data.id)}>{data.isPinned ? PIN.pinned : PIN.unpinned}</div>
              <div>{POST_SVG.copy}</div>
              <div onClick={handleEditWarnModal}>{POST_SVG.edit}</div>
            </div>
          </S.Footer>
        </S.Container>
      )}
      <EditWarningModal showEditWarnModal={showEditWarnModal} handleEditWarnModal={handleEditWarnModal} setIsEditMode={setIsEditMode} />
    </>
  );
};

export default CopyListItem;
