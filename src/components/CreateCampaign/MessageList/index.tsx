import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { POST_SVG } from '../../../assets/Post';
import { campaignConditionState } from '../../../store/campaignConditionState';
import Button from '../../common/Button';
import * as S from './MessageList.stlyes';

const MessageList = () => {
  const [condition, setCondition] = useRecoilState(campaignConditionState);
  const [editMode, setEditMode] = useState({ A: false, B: false });
  const [messageA, setMessageA] = useState(condition.messageA);
  const [messageB, setMessageB] = useState(condition.messageB);

  const handleEditMode = (type: 'A' | 'B') => {
    setEditMode((prev) => ({
      ...prev,
      [`${type}`]: !editMode[`${type}`],
    }));
  };

  const onChangeMessageA = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessageA(event.target.value);
  };
  const onChangeMessageB = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessageB(event.target.value);
  };

  const onSaveMessage = (type: 'A' | 'B') => {
    setCondition((prev) => ({
      ...prev,
      [`message${type}`]: [`message${type}`],
    }));
  };

  const memberA = condition.abTest ? Math.floor(condition.customerCnt / 2) : condition.customerCnt;
  const memberB = Math.ceil(condition.customerCnt / 2);

  useEffect(() => {
    setMessageA(condition.messageA);
    setMessageB(condition.messageB);
  }, [condition.messageA, condition.messageB]);

  return (
    <>
      <S.Layout>
        <S.MessageContainer>
          <S.MessageMember>
            <span>메시지 A</span>
            <span>{memberA}명</span>
          </S.MessageMember>
          <S.MessageBody>
            <S.MessageHeader>
              <div>
                <div>[Web발신]</div>
                {condition.sentType === 'AD' && <span>(광고)</span>}
              </div>
              {!editMode.A && <S.EditIcon onClick={() => handleEditMode('A')}>{POST_SVG.edit}</S.EditIcon>}
            </S.MessageHeader>
            {editMode.A ? <S.EditText value={messageA} onChange={onChangeMessageA} name="messageA" /> : <span>{condition.messageA}</span>}
          </S.MessageBody>
          {editMode.A && (
            <S.MessageFooter>
              <Button title="취소" buttonColor="white" buttonSize="buttonS" onButtonClick={() => handleEditMode('A')} />
              <Button title="저장" buttonColor="black" buttonSize="buttonS" onButtonClick={() => onSaveMessage('A')} />
            </S.MessageFooter>
          )}
        </S.MessageContainer>
        {condition.abTest && (
          <S.MessageContainer>
            <S.MessageMember>
              <span>메시지 B</span>
              <span>{memberB}명</span>
            </S.MessageMember>
            <S.MessageBody>
              <S.MessageHeader>
                <div>
                  <div>[Web발신]</div>
                  {condition.sentType === 'AD' && <span>(광고)</span>}
                </div>
                {!editMode.B && <S.EditIcon onClick={() => handleEditMode('B')}>{POST_SVG.edit}</S.EditIcon>}
              </S.MessageHeader>
              {editMode.B ? <S.EditText value={messageB} onChange={onChangeMessageB} name="messageB" /> : <span>{condition.messageB}</span>}
            </S.MessageBody>
            {editMode.B && (
              <S.MessageFooter>
                <Button title="취소" buttonColor="white" buttonSize="buttonS" onButtonClick={() => handleEditMode('B')} />
                <Button title="저장" buttonColor="black" buttonSize="buttonS" onButtonClick={() => onSaveMessage('B')} />
              </S.MessageFooter>
            )}
          </S.MessageContainer>
        )}
      </S.Layout>
    </>
  );
};

export default MessageList;
