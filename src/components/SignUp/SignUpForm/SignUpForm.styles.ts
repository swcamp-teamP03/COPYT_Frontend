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
  justify-content: space-between;
  align-items: center;
`;
export const ClientBox = styled.div`
  margin-bottom: 15px;
`;

export const TimerContainer = styled.span`
  color: ${({ theme }) => theme.colors.gray50};
  font-size: 12px;
`;

export const Relative = styled.div`
  display: flex;
  justify-content: center;
  min-width: 150px;
  position: relative;
`;
