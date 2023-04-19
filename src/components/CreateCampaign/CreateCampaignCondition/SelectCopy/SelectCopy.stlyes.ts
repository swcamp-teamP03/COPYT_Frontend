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
  div {
    margin-top: 4px;
  }
`;

export const URLInput = styled.input`
  padding: 16px 20px;
  border: 1px solid #b7b7b7;
  border-radius: 12px;
  width: 100%;
`;

export const URLContaienr = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #f0f0f0;
  border-radius: 10px;
  padding: 0 16px;
  max-width: 507px;
  height: 50px;
  span {
    display: block;
    overflow: hidden;
    width: 90%;
    text-overflow: ellipsis;
  }
`;

export const CloseButton = styled.div`
  width: 12px;
  cursor: pointer;
`;
