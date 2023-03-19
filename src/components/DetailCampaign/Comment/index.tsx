import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useCommentMutaion from '../../../quries/Campaign/useCommentMutaiton';
import useDetailCampaignQuery from '../../../quries/Campaign/useDetailCampaignQuery';
import numberWithComma from '../../../utils/numberWithComma';
import Button from '../../common/Button';
import * as S from './Comment.styles';

const Comment = () => {
  const { campaignID } = useParams();
  const [editMode, setEditMode] = useState(false);
  const [editText, setEditText] = useState('');
  const { data: detailCampaign } = useDetailCampaignQuery(campaignID);

  const changeTextArea = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = event.target;
    setEditText(value.substring(0, 2000));
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
      <S.EditButton>
        {editMode ? (
          <Button title="저장" buttonColor="blue" buttonSize="buttonS" onButtonClick={onSumbit} />
        ) : (
          <Button title="수정" buttonColor="white" buttonSize="buttonS" onButtonClick={handleEditMode} />
        )}
      </S.EditButton>
      <S.CommentContainer>
        {editMode ? (
          <>
            <S.TextArea value={editText} onChange={changeTextArea}>
              {editText}
            </S.TextArea>
            <S.TextCount>
              {numberWithComma(editText.length)} /{numberWithComma(2000)}
            </S.TextCount>
          </>
        ) : (
          <>
            <S.CommentText>{editText}</S.CommentText>
            <S.TextCount>
              {numberWithComma(editText.length)} /{numberWithComma(2000)}
            </S.TextCount>
          </>
        )}
      </S.CommentContainer>
    </>
  );
};

export default Comment;
