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
  border-radius: 30px;
  p {
    font-size: 24px;
  }
`;
export const CopyCount = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  margin-bottom: 1rem;
  font-weight: 700;
  font-size: 22px;
`;

export const NonData = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalBody = styled.div`
  height: 80px;
  font-weight: 700;
  font-size: 24px;
`;
