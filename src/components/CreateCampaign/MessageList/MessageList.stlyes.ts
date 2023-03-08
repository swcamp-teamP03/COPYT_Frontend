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
  top: 200px;
  height: 500px;
  width: 100%;
  max-width: 350px;
`;

export const MessageHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 35px;
  font-weight: 700;
`;

export const MessageBody = styled.div`
  padding: 30px;
  height: 432px;
  background: #f4f4f4;
  border-radius: 30px;
`;
