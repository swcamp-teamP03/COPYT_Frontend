import styled from 'styled-components';

export const Fixed = styled.div`
  display: flex;
  position: sticky;
  top: 0;
  align-items: center;
  justify-content: space-between;
  padding: 40px 30px 20px;
  background-color: #f4f4f4;
  border: 1px solid #e8e8e8;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  z-index: 20;
`;

export const Flex = styled.div`
  display: flex;
  gap: 30px;
`;

export const Title = styled.h3`
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100%;
`;

export const LeftChevron = styled.div`
  width: 12px;
  display: flex;
  cursor: pointer;
`;

export const SVG = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25px;
  height: 25px;
  cursor: pointer;
`;

export const TitleInput = styled.input`
  width: 250px;
`;
