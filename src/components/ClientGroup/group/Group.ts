import styled from 'styled-components';

export const ListContainer = styled.div`
  display: flex;
  white-space: nowrap;
  flex-direction: column;
  gap: 24px;
`;

export const GroupList = styled.div`
  display: grid;
  cursor: pointer;
  gap: 10px;
  grid-template-columns: 0.5fr 1fr 2fr 2fr;
  height: 82px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.blue10};
  font-size: 18px;
  span,
  div {
    display: flex;
    justify-content: center;
    color: #777777;
  }
  div:nth-child(3) {
    justify-content: flex-start;
    font-weight: 700;
    font-size: 21px;
    color: #444444;
  }
  :hover {
    border: 2px solid rgba(85, 73, 255, 0.4);
  }
`;
