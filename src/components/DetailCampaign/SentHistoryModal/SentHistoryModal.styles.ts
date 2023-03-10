import styled from 'styled-components';

export const CategoryLayout = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr 3fr 1fr 3fr 2fr 2fr;
  margin-bottom: 10px;
  margin-top: 10px;
  div {
    white-space: nowrap;
    justify-content: center;
    display: flex;
    align-items: center;
  }
`;

export const ListLayout = styled.div`
  max-height: 60%;
  overflow-y: auto;
`;
