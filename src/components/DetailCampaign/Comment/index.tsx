import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useCommentMutaion from '../../../quries/Campaign/useCommentMutaiton';
import useDetailCampaignQuery from '../../../quries/Campaign/useDetailCampaignQuery';
import Button from '../../common/Button';
import * as S from './Comment.styles';

const Comment = () => {
  const { campaignID } = useParams();
  const [editMode, setEditMode] = useState(false);
  const [editText, setEditText] = useState('');
  const { data: detailCampaign } = useDetailCampaignQuery(campaignID);

  const changeTextArea = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setEditText(event.target.value);
  };

  const { mutate: commnetMutate } = useCommentMutaion();

  const handleEditMode = () => {
    setEditMode((prev) => !prev);
  };

  const onSumbit = () => {
    commnetMutate({ id: campaignID, comment: editText });
    handleEditMode();
  };

  useEffect(() => {
    if (detailCampaign?.comment) {
      setEditText(detailCampaign?.comment);
    }
  }, [detailCampaign?.comment]);
  return (
    <>
      <S.CommentContainer>
        {editMode ? (
          <S.TextArea value={editText} onChange={changeTextArea}>
            {editText}
          </S.TextArea>
        ) : (
          <S.CommentText>{editText}</S.CommentText>
        )}
      </S.CommentContainer>
      <S.EditButton>
        {editMode ? (
          <Button title="저장" buttonColor="black" buttonSize="buttonS" onButtonClick={onSumbit} />
        ) : (
          <Button title="수정" buttonColor="white" buttonSize="buttonS" onButtonClick={handleEditMode} />
        )}
      </S.EditButton>
    </>
  );
};

export default Comment;
