import styled from 'styled-components';

export const GridLayout = styled.div`
  display: grid;
  grid-template-columns: 2.5fr 1fr;
  gap: 40px;
  height: 100%;
`;

export const MessageList = styled.div`
  background-color: ${({ theme }) => theme.colors.gray30};
  padding: 40px;
`;

export const MessageContainer = styled.div`
  gap: 10px;
  margin-bottom: 30px;
  position: relative;
`;
export const Message = styled.div`
  padding: 15px;
  background: #ffffff;
  border: 1px solid #bebebe;
  border-radius: 30px;
  height: 190px;
  width: 364px;
  overflow-y: scroll;
`;

export const DeleteButton = styled.div`
  position: absolute;
  cursor: pointer;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  right: -5px;
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
