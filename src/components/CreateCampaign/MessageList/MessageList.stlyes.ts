import styled from 'styled-components';

export const Layout = styled.div`
  padding: 50px;
  display: flex;
  justify-content: center;
  gap: 30px;
  padding: 30px;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.blue20};
`;
