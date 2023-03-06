import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: ${({ theme }) => `1px solid ${theme.colors.gray10}`};
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.gray0};
  height: 300px;
`;

export const Title = styled.h3`
  opacity: 0.5;
  margin-bottom: 40px;
`;
