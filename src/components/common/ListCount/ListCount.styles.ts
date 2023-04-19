import styled from 'styled-components';

export const FlexBox = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  white-space: nowrap;
`;

export const VerticalHr = styled.div`
  width: 1px;
  background-color: black;
  height: 20px;
`;

export const ListCount = styled.div`
  position: relative;
  display: flex;
  justify-content: space-around;
  width: 80px;
  padding: 5px 8px;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  div {
    cursor: pointer;
  }
`;

export const DropDownContainer = styled.div`
  position: absolute;
  top: 37px;
  left: 0;
  border-radius: 10px;
  text-align: center;
  border: 1px solid black;
  background-color: white;
  width: 100%;
  div {
    padding: 5px 0;
    border-bottom: 1px solid black;
  }
  div:nth-last-child(1) {
    border: none;
  }
`;
