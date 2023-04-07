import styled from 'styled-components';

export const Title = styled.h1`
  margin-bottom: 42px;
`;

export const FlexRow = styled.div`
  display: flex;
  width: 100%;
  gap: 10px;
`;

export const FlexRover = styled.div`
  display: flex;
  /* grid-template-columns: 1fr 2fr; */
  align-items: center;
`;
export const ClientBox = styled.div`
  margin-bottom: 15px;
`;

export const TimerContainer = styled.span`
  color: ${({ theme }) => theme.colors.gray50};
  font-size: 12px;
`;
