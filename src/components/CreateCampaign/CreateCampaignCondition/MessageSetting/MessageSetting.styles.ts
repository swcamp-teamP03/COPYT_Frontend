import styled from 'styled-components';

export const Gap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-bottom: 50px;
`;

export const Title = styled.div`
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 10px;
  margin-top: 20px;
  span {
    color: ${({ theme }) => theme.colors.red};
  }
`;
export const Desc = styled.div`
  margin-left: 5px;
  display: flex;
  gap: 10px;
  font-size: 14px;
  line-height: 21px;
  span {
    color: ${({ theme }) => theme.colors.gray50};
    width: 100%;
    white-space: wrap;
  }
  div {
    margin-top: 4px;
  }
`;

export const RadioInput = styled.div`
  font-size: 18px;
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 6px;
  white-space: nowrap;
  input {
    min-width: 16px;
    min-height: 16px;
    :checked {
      background-color: black;
    }
  }
  span {
    color: ${({ theme }) => theme.colors.gray50};
    font-size: 14px;
  }
`;
