import styled from 'styled-components';

export const Fixed = styled.div`
  display: flex;
  position: sticky;
  top: 0;
  align-items: center;
  justify-content: center;
  padding: 40px 30px 20px;
  background-color: #f4f4f4;
  border: 1px solid #e8e8e8;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  z-index: 10;
`;

export const Layout = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-between;
`;

export const Flex = styled.div`
  white-space: nowrap;
  display: flex;
  align-items: center;
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

export const Tag = styled.div`
  border-radius: 10px;
  padding: 10px 20px;
  text-align: center;
  background-color: #eeedff;
  color: #5549ff;
`;
