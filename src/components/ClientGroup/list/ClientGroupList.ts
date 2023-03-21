import styled from 'styled-components';

export const ListCategory = styled.div`
  margin-top: 1.5rem;
  display: grid;
  grid-template-columns: 0.5fr 1fr 2fr 2fr;
  margin-bottom: 20px;
  div {
    display: flex;
    justify-content: center;
  }
  div:nth-child(2) {
    gap: 30px;
  }
  div:nth-child(3) {
    justify-content: flex-start;
  }
`;

export const NoneSvg = styled.div`
  display: flex;
  justify-content: center;
  margin: 50px 0px 0px 0px;
`;
