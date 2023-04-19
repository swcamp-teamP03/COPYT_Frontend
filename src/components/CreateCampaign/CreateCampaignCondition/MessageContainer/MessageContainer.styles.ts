import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-bottom: 50px;
`;

export const FlexBox = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  margin-bottom: 20px;
`;

export const Title = styled.div`
  font-size: 24px;
  span {
    color: ${({ theme }) => theme.colors.red};
  }
`;

export const Label = styled.label`
  white-space: nowrap;
  font-size: 18px;
  width: fit-content;
`;

interface MessageContainerProps {
  hasMessage: boolean;
}

export const MessageContainer = styled.div<MessageContainerProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  width: 400px;
  max-width: 400px;
  height: 50px;
  border: ${(props) => (props.hasMessage ? 'none' : '1px dashed #DADADA')};
  border-radius: 10px;
  background-color: ${(props) => (props.hasMessage ? props.theme.colors.gray30 : 'white')};
  opacity: ${(props) => !props.hasMessage && 0.7};
  text-align: ${(props) => (props.hasMessage ? 'left' : 'center')};
  span {
    width: 100%;
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 14px;
  }
`;

export const CloseButton = styled.div`
  width: 12px;
  cursor: pointer;
`;
