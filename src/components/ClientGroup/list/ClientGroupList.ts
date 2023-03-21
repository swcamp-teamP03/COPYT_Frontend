import styled from 'styled-components';

export const HeaderLayout = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
`;

export const HeaderSection = styled.div`
  display: flex;
  gap: 22px;
`;

export const TaxtContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 10px;
  align-items: center;
`;

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
