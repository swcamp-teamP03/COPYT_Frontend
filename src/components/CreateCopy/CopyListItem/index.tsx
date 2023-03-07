import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { SVG } from '../../../assets';
import { PIN } from '../../../assets/Like';
import { POST_SVG } from '../../../assets/Post';

import { copyListState } from '../../../store/copyListState';
import { CopyListType } from '../../../types/copy';
import Button from '../../common/Button';
import ClipboardModal from '../ClipboardModal';
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
  const [showClipboardModal, setShowClipboardModal] = useState(false);

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

  const deleteList = (id: number) => {
    const target = copyList.filter((list) => list.id === id)[0];
    const index = copyList.indexOf(target);
    const data: CopyListType[] = JSON.parse(JSON.stringify(copyList));
    data.splice(index, 1);
    setCopyList([...data]);
  };

  const handleClipboardModal = () => {
    setShowClipboardModal((prev) => !prev);
  };

  const handleEditWarnModal = () => {
    setShowEditWarnModal((prev) => !prev);
  };
  const copyText = (text: string) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text).then(() => {
        handleClipboardModal();
      });
    }
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
          <S.DeleteButton onClick={() => deleteList(data.id)}>{SVG.closeButton}</S.DeleteButton>
          <S.TextCount>{data.content.length}/900</S.TextCount>
          <S.Footer>
            <div>
              <div onClick={() => handlePinned(data.id)}>{data.isPinned ? PIN.pinned : PIN.unpinned}</div>
              <div onClick={() => copyText(data.content)}>{POST_SVG.copy}</div>
              <div onClick={handleEditWarnModal}>{POST_SVG.edit}</div>
            </div>
          </S.Footer>
        </S.Container>
      )}
      <EditWarningModal showEditWarnModal={showEditWarnModal} handleEditWarnModal={handleEditWarnModal} setIsEditMode={setIsEditMode} />
      <ClipboardModal showClipboardModal={showClipboardModal} handleClipboardModal={handleClipboardModal} />
    </>
  );
};

export default CopyListItem;
