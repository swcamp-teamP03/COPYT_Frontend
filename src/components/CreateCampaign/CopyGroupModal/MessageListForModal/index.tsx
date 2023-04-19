import React, { Dispatch, SetStateAction } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { SelecetedMessage } from '..';
import { SVG } from '../../../../assets';
import { campaignConditionState } from '../../../../store/campaignConditionState';
import Button from '../../../common/Button';

interface MessageListForModalProps {
  setSelecetedMessage: Dispatch<SetStateAction<SelecetedMessage[]>>;
  selectedMesssage: SelecetedMessage[];
  modalHandler: () => void;
}

const MessageListForModal = ({ selectedMesssage, setSelecetedMessage, modalHandler }: MessageListForModalProps) => {
  const [condition, setCondition] = useRecoilState(campaignConditionState);

  const selectedMessageCount = Object.values(selectedMesssage).filter((str) => str).length;
  const limitSelected = condition.abTest ? 2 : 1;

  const deleteMessage = (id: number) => {
    setSelecetedMessage((prev) => prev.filter((list) => list.id !== id));
  };

  const onSubmit = () => {
    if (condition.abTest) {
      setCondition((prev) => ({
        ...prev,
        messageA: selectedMesssage[0].content,
        messageB: selectedMesssage[1].content,
      }));
    } else {
      setCondition((prev) => ({
        ...prev,
        messageA: selectedMesssage[0].content,
      }));
    }
    setSelecetedMessage([]);
    modalHandler();
  };
  return (
    <MessageList>
      <Sticky>
        <MessageContainer>
          <span>메시지 A</span>
          <Message>
            <span>{selectedMesssage[0]?.content}</span>
          </Message>
          <DeleteButton>
            <div onClick={() => deleteMessage(selectedMesssage[0]?.id)}>{SVG.closeButton}</div>
          </DeleteButton>
        </MessageContainer>
        {condition.abTest && (
          <MessageContainer>
            <span>메시지 B</span>
            <Message>
              <span>{selectedMesssage[1]?.content}</span>
            </Message>
            <DeleteButton>
              <div onClick={() => deleteMessage(selectedMesssage[1]?.id)}>{SVG.closeButton}</div>
            </DeleteButton>
          </MessageContainer>
        )}
        <Button
          buttonColor="blue"
          title={`카피 선택 (${limitSelected}개 중 / ${selectedMessageCount}개 선택)`}
          buttonSize="buttonL"
          isDisabled={selectedMessageCount !== limitSelected}
          onButtonClick={onSubmit}
        />
      </Sticky>
    </MessageList>
  );
};

export default MessageListForModal;

const MessageList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.blue20};
  padding: 20px 20px 0 20px;
`;

const Sticky = styled.div`
  position: sticky;
  top: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MessageContainer = styled.div`
  gap: 10px;
  margin-bottom: 20px;
  position: relative;
`;

const Message = styled.div`
  padding: 15px;
  background-color: ${({ theme }) => theme.colors.white};
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
  top: 20px;
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
