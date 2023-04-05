import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.div`
  width: 100%;
  font-size: 24px;
  font-weight: 600;
  text-align: center;
  line-height: 29px;
  margin-top: 68px;
  margin-bottom: 34px;
`;

export const ButtonLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 17px;
`;

export const GoCampaignButton = styled.button`
  background-color: ${({ theme }) => theme.colors.blue30};
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: center;
  color: ${({ theme }) => theme.colors.white};
  padding: 16px 42px;
  border-radius: 10px;
  border: none;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  margin-top: 11px;
  cursor: pointer;
`;

export const GoListButton = styled.button`
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.colors.blue30};
  color: ${({ theme }) => theme.colors.blue30};
  padding: 16px 23px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 10px;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
`;
