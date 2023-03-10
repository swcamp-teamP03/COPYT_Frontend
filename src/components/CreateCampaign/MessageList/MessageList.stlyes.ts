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
