import styled from 'styled-components';

export const TagContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 6px;
  margin: 1rem 0 1.5rem 0;
`;

export const ListCategory = styled.div`
  margin-top: 1.5rem;
  display: grid;
  grid-template-columns: 1fr 1fr 4fr 1fr;
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

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const GroupList = styled.div`
  display: grid;
  cursor: pointer;
  grid-template-columns: 1fr 1fr 4fr 1fr;
  height: 82px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: #f8f8f8;
  font-size: 21px;
  span,
  div {
    display: flex;
    justify-content: center;
    color: #777777;
  }

  span:nth-child(3) {
    justify-content: flex-start;
    font-weight: 700;
    font-size: 21px;
    color: #444444;
  }
`;

export const Footer = styled.div`
  display: flex;
  margin-top: 24px;
  justify-content: flex-end;
  gap: 16px;
`;
