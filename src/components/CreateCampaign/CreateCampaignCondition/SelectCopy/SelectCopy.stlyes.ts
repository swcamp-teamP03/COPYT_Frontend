import styled from 'styled-components';

export const FlexBox = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  gap: 30px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const Title = styled.div`
  font-size: 24px;
  span {
    color: ${({ theme }) => theme.colors.red};
  }
`;
export const Desc = styled.div`
  display: flex;
  gap: 10px;
  color: #606060;
  span {
    width: 100%;
    white-space: wrap;
  }
`;

export const URLInput = styled.input`
  padding: 16px 20px;
  border: 1px solid #b7b7b7;
  border-radius: 12px;
  width: 100%;
`;
