import styled from 'styled-components';

export const Title = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-top: 80px;
  h1 {
    font-size: 32px;
  }
`;

export const Flex = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 200px;
`;
export const Grid = styled.div`
  display: flex;
  width: 100%;
  justify-content: stretch;
  padding-right: 180px;
  gap: 20px;
`;

export const Info = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 35px;
`;

export const InfoTitle = styled.div`
  margin-right: 30px;
  color: #555555;
  white-space: nowrap;
  min-width: 150px;
`;

export const InfoDesc = styled.span`
  width: 100%;
`;

export const MessageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #f7f7ff;
  border: 1px solid #cac7ff;
  border-radius: 30px;
  padding: 20px 180px;
  gap: 20px;
`;

export const MessageWrapper = styled.div`
  width: 100%;
`;

export const Message = styled.div`
  background: #ffffff;
  border: 1px solid #bebebe;
  border-radius: 30px;
  max-height: 300px;
  min-height: 300px;
  max-width: 367px;
  padding: 40px 30px;
  height: fit-content;
  overflow: auto;
`;
