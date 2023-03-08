import React, { Dispatch, SetStateAction } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { SVG } from '../../../../assets';
import { campaignConditionState } from '../../../../store/campaignConditionState';
import Button from '../../../common/Button';

interface MessageListForModalProps {
  setSelecetedMessage: Dispatch<SetStateAction<{ A: string; B: string }>>;
  selectedMesssage: { A: string; B: string };
}

const MessageListForModal = ({ selectedMesssage, setSelecetedMessage }: MessageListForModalProps) => {
  const [condition, setCondition] = useRecoilState(campaignConditionState);

  const selectedMessageCount = Object.values(selectedMesssage).filter((str) => str).length;
  console.log(selectedMessageCount);

  const deleteMessage = (idx: 'A' | 'B') => {
    setSelecetedMessage((prev) => ({ ...prev, [`${idx}`]: '' }));
  };

  return (
    <MessageList>
      <MessageContainer>
        <span>메세지 A</span>
        <Message>
          <span>{selectedMesssage.A}</span>
        </Message>
        <DeleteButton>
          <div onClick={() => deleteMessage('A')}>{SVG.closeButton}</div>
        </DeleteButton>
      </MessageContainer>
      {condition.abTest && (
        <MessageContainer>
          <span>메세지 B</span>
          <Message>
            <span>{selectedMesssage.B}</span>
          </Message>
          <DeleteButton>
            <div onClick={() => deleteMessage('B')}>{SVG.closeButton}</div>
          </DeleteButton>
        </MessageContainer>
      )}
      <Button buttonColor="black" title={`카피 선택 (2개 중 / ${selectedMessageCount}개 선택)`} buttonSize="buttonL" />
    </MessageList>
  );
};

export default MessageListForModal;

const MessageList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.gray30};
  padding: 20px 20px 0 20px;
  position: sticky;
  height: 80%;
  top: 15px;
`;

const MessageContainer = styled.div`
  gap: 10px;
  margin-bottom: 30px;
  position: relative;
  overflow: auto;
`;

const Message = styled.div`
  padding: 15px;
  background: #ffffff;
  border: 1px solid #bebebe;
  border-radius: 30px;
  height: 120px;
  width: 364px;
  overflow: auto;
`;

const DeleteButton = styled.div`
  position: absolute;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  right: 0;
  top: 10px;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  background-color: white;
  border: 1px solid ${({ theme }) => theme.colors.gray40};
  div {
    display: flex;
    justify-content: center;
    width: 12px;
    height: 12px;
  }
`;
