import styled from 'styled-components';

export const Layout = styled.div`
  padding: 50px;
  display: flex;
  justify-content: center;
  gap: 120px;
  padding: 30px;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.gray40};
`;

export const MessageContainer = styled.div`
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
`;

export const MessageBody = styled.div`
  padding: 30px;
  height: 432px;
  background: #f4f4f4;
  border-radius: 30px;
  margin-bottom: 15px;
`;

export const MessageHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const MessageFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 15px;
`;

export const EditIcon = styled.div`
  cursor: pointer;
`;

export const EditText = styled.textarea`
  white-space: pre;
  width: 100%;
  height: 70%;
  resize: none;
  border-radius: 10px;
`;
