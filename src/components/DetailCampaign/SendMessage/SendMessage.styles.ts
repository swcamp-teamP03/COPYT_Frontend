import styled from 'styled-components';

export const Flex = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 200px;
`;
export const Grid = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr;
`;

export const Info = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 35px;
`;

export const InfoTitle = styled.div`
  margin-right: 30px;
  font-size: 24px;
  color: #555555;
  white-space: nowrap;
  min-width: 150px;
`;

export const InfoDesc = styled.span`
  font-size: 24px;
`;

export const MessageContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 163px;
  background: #f7f7ff;
  border: 1px solid #cac7ff;
  border-radius: 30px;
  padding: 20px 200px 20px 180px;
`;

export const Message = styled.div`
  background: #ffffff;
  border: 1px solid #bebebe;
  border-radius: 30px;
  width: 100%;
  max-height: 300px;
  min-height: 300px;
  max-width: 367px;
  padding: 40px 30px;
  height: fit-content;
  overflow: auto;
`;

