import styled from 'styled-components';

export const Box = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.colors.gray40};
  border-radius: 12px;
  justify-content: space-evenly;
  align-items: center;
  color: ${({ theme }) => theme.colors.gray40};
  padding: 0px 20px;
  background-color: white;
`;

export const GridLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.3fr;
  gap: 40px;
`;

export const CopyLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const CopyItems = styled.div`
  padding: 10px 15px;
  display: flex;
  border: 1px solid ${({ theme }) => theme.colors.gray40};
  border-radius: 17px;
  align-items: center;
  justify-content: space-between;
  background-color: white;
`;

export const CampaignLayout = styled.div`
  display: flex;
  gap: 10px;
`;

export const CampaignItems = styled.div`
  display: flex;
  width: 40%;
  height: 220px;
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.colors.gray40};
  border-radius: 17px;
  padding: 20px 25px 0px 25px;
  background-color: white;
`;

export const CampaignBody = styled.div`
  display: flex;
  flex-direction: column;
  height: 80%;
  h3 {
    margin: 0;
    font-weight: 700;
    font-size: 18px;
  }
`;
export const CamapignFooter = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
`;

export const SendDate = styled.span`
  font-weight: 400;
  font-size: 12px;
  margin-bottom: 25px;
`;

export const ClickRate = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 25px;
`;

export const GoCurrent = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;
