import styled from 'styled-components';

export const Fixed = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 210px;
  right: 0;
  align-items: center;
  justify-content: space-between;
  padding: 40px 30px 20px;
  background-color: #f4f4f4;
  border: 1px solid #e8e8e8;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  z-index: 10;
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const Title = styled.h3`
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100%;
  font-size: 18px;
`;

export const LeftChevron = styled.div`
  width: 12px;
  display: flex;
  cursor: pointer;
`;

export const Tag = styled.div`
  border-radius: 10px;
  padding: 0px 15px;
  border: 1px solid #e1e1e1;
  text-align: center;
  font-size: 14px;
  background-color: #eeedff;
  color: #5549ff;
`;
