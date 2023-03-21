import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { SVG } from '../../../assets';
import { PIN } from '../../../assets/Like';
import { POST_SVG } from '../../../assets/Post';
import { copyListState } from '../../../store/copyListState';
import { CopyListType } from '../../../types/copy';
import Button from '../../common/Button';
import ClipboardModal from '../ClipboardModal';
import CopyDeleteModal from '../CopyDeleteModal';
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
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const editCopyHandler = (id: number) => {
    const target = copyList.filter((list) => list.copyId === id)[0];
    const index = copyList.indexOf(target);
    const data: CopyListType[] = JSON.parse(JSON.stringify(copyList));
    data[index].content = editCopy;
    setCopyList([...data]);
    setIsEditMode(false);
  };

  const handleText = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setEditCopy(event.currentTarget.value);
  };

  const deleteList = () => {
    const target = copyList.filter((list) => list.copyId === data.copyId)[0];
    const index = copyList.indexOf(target);
    const result: CopyListType[] = JSON.parse(JSON.stringify(copyList));
    result.splice(index, 1);
    setCopyList([...result]);
    setShowDeleteModal(false);
  };

  const handleClipboardModal = () => {
    setShowClipboardModal((prev) => !prev);
  };

  const handleEditWarnModal = () => {
    setShowEditWarnModal((prev) => !prev);
  };
  const handleDeleteModal = () => {
    setShowDeleteModal((prev) => !prev);
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
                <Button title="수정하기" buttonColor="blue" onButtonClick={() => editCopyHandler(data.copyId)} />
              </div>
            </>
          </S.Footer>
        </S.Container>
      ) : (
        <S.Container>
          <span>{data.content}</span>
          <S.DeleteButton onClick={handleDeleteModal}>{SVG.closeButton}</S.DeleteButton>
          <S.TextCount>{data.content.length}/900</S.TextCount>
          <S.Footer>
            <div>
              <S.PinButton onClick={() => handlePinned(data.copyId)}>{data.isPinned ? PIN.pinned : PIN.unpinned}</S.PinButton>
              <S.EditButton onClick={handleEditWarnModal}>{POST_SVG.edit}</S.EditButton>
            </div>
          </S.Footer>
        </S.Container>
      )}
      <EditWarningModal showEditWarnModal={showEditWarnModal} handleEditWarnModal={handleEditWarnModal} setIsEditMode={setIsEditMode} />
      <ClipboardModal showClipboardModal={showClipboardModal} handleClipboardModal={handleClipboardModal} />
      <CopyDeleteModal showDeleteModal={showDeleteModal} handleDeleteModal={handleDeleteModal} onClickYes={deleteList} />
    </>
  );
};

export default CopyListItem;
