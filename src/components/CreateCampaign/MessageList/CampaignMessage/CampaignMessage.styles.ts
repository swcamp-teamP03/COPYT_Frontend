import styled from 'styled-components';

export const MessageLayout = styled.div`
  position: sticky;
  position: -webkit-sticky;
  z-index: 10;
  top: 150px;
  height: 500px;
  width: 100%;
  max-width: 350px;
`;

export const MessageMember = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  font-weight: 700;
  span:nth-child(2) {
    color: ${({ theme }) => theme.colors.blue30};
  }
`;

export const MessageContainer = styled.div`
  padding: 30px;
  height: 432px;
  background-color: white;
  border-radius: 30px;
  border: 1px solid #bebebe;
  margin-bottom: 15px;
`;

export const MessageHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const MessageBody = styled.div`
  height: 75%;
  overflow-y: auto;
  white-space: pre-wrap;
`;

export const MessageFooter = styled.div`
  font-size: ${({ theme }) => theme.fontSize.sm};
  span {
    color: blue;
    text-decoration: underline;
  }
`;
interface ByteProps {
  isOver: boolean;
}

export const Byte = styled.div<ByteProps>`
  display: flex;
  justify-content: flex-end;
  color: ${({ theme }) => theme.colors.gray20};
  span {
    color: ${(props) => (props.isOver ? props.theme.colors.red : props.theme.colors.gray20)};
    text-decoration: none;
  }
`;

export const EditButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 15px;
`;

export const EditIcon = styled.div`
  cursor: pointer;
`;

export const EditText = styled.textarea`
  white-space: wrap;
  width: 95%;
  height: 100%;
  resize: none;
  border-radius: 10px;
  outline: none;
`;
