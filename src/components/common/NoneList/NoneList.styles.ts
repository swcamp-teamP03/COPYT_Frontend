import styled from 'styled-components';

export const Container = styled.div`
  width: 40rem;
  height: 25rem;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.gray20};
  border: 1px solid ${({ theme }) => theme.colors.gray40};
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.span`
  color: ${({ theme }) => theme.colors.gray40};
`;

export const SVG = styled.div`
  margin-top: 3rem;
`;
