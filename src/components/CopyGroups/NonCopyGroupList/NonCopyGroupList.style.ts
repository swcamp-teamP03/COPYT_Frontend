import styled from 'styled-components';

export const Layout = styled.div`
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Title = styled.h3`
  opacity: 0.5;
  margin-bottom: 40px;
`;

export const Flex = styled.div`
  display: flex;
  gap: 30px;
  width: 100%;
`;

export const MessageBox = styled.div`
  cursor: pointer;
  width: 100%;
  height: 200px;
  border: ${({ theme }) => `1px solid ${theme.colors.gray10}`};
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.gray0};
  display: flex;
  padding: 0 30px;
  flex-direction: column;
`;

export const MessageTitle = styled.h3`
  color: ${({ theme }) => theme.colors.gray60};
  font-size: 32px;
  white-space: nowrap;
`;
export const MessageDesc = styled.h5`
  color: ${({ theme }) => theme.colors.gray50};
  font-size: 16px;
  /* white-space: nowrap; */
`;
