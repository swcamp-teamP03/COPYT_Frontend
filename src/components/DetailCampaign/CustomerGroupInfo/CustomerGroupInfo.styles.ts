import styled from 'styled-components';

export const Flex = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 100px;
`;

export const Info = styled.div`
  display: flex;
  margin-bottom: 35px;
`;

export const InfoTitle = styled.div`
  margin-right: 30px;
  font-size: 24px;
  color: #555555;
  white-space: nowrap;
  min-width: 110px;
`;

export const InfoDesc = styled.span`
  font-size: 24px;
`;

export const PropertyBox = styled.div`
  width: 100%;
  padding: 24px 52px;
  border: 1px solid #c6c6c6;
  border-radius: 30px;
  max-height: 200px;
  overflow: auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
