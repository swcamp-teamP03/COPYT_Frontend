import styled from 'styled-components';

export const CopyListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.gray0};
  padding: 40px;
  overflow-y: auto;
  overflow-x: hidden;
  span {
    margin-bottom: 10px;
    font-size: 24px;
  }
`;

export const ModalBody = styled.div`
  height: 80px;
  font-weight: 700;
  font-size: 24px;
`;
