import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { POST_SVG } from '../../../../assets/Post';
import { campaignConditionState } from '../../../../store/campaignConditionState';
import numberWithCommas from '../../../../utils/numberWithComma';
import Button from '../../../common/Button';
import * as S from './CampaignMessage.styles';

interface CampaignMessageProps {
  type: 'A' | 'B';
  member: number;
  initMessage: string;
}

const CampaignMessage = ({ type, member, initMessage }: CampaignMessageProps) => {
  const [condition, setCondition] = useRecoilState(campaignConditionState);
  const [message, setMessage] = useState(initMessage);
  const [editMode, setEditMode] = useState(false);

  const handleEditMode = () => {
    setMessage(initMessage);
    setEditMode((prev) => !prev);
  };
  const onChangeMessage = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value);
  };

  const onSaveMessage = (type: 'A' | 'B') => {
    setCondition((prev) => ({
      ...prev,
      [`message${type}`]: message,
    }));
    handleEditMode();
  };

  const maxByte = condition.messageType === 'SMS' ? 140 : 2000;
  const isOver = message.length * 2 + 56 > maxByte;

  useEffect(() => {
    setMessage(initMessage);
  }, [initMessage]);
  useEffect(() => {
    setCondition((prev) => ({
      ...prev,
      messageOver: isOver,
    }));
  }, [isOver]);

  return (
    <S.MessageLayout>
      <S.MessageMember>
        <span>메시지 {type}</span>
        <span>{member}명</span>
      </S.MessageMember>
      <S.MessageContainer>
        <S.MessageHeader>
          <div>
            <div>[Web발신]</div>
            {condition.sendType === 'AD' && <span>(광고)</span>}
          </div>
          {!editMode && <S.EditIcon onClick={handleEditMode}>{POST_SVG.edit}</S.EditIcon>}
        </S.MessageHeader>
        <S.MessageBody>{editMode ? <S.EditText value={message} onChange={onChangeMessage} name="message" /> : <div>{condition[`message${type}`]}</div>}</S.MessageBody>
        <S.MessageFooter>
          <span>copyt.bz/LABzD</span>
          <div>[무료수신거부]</div>
          <span>copyt.li/ABCDEFGH</span>
          <S.Byte isOver={isOver}>
            <span>{message.length * 2 + 56}</span>/{numberWithCommas(maxByte)}
          </S.Byte>
        </S.MessageFooter>
      </S.MessageContainer>
      {editMode && (
        <S.EditButtons>
          <Button title="취소" buttonColor="white" buttonSize="buttonS" onButtonClick={handleEditMode} />
          <Button title="저장" buttonColor="blue" buttonSize="buttonS" onButtonClick={() => onSaveMessage(type)} isDisabled={isOver} />
        </S.EditButtons>
      )}
    </S.MessageLayout>
  );
};

export default CampaignMessage;
