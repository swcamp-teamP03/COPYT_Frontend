import styled from 'styled-components';

export const Gap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  margin-bottom: 50px;
`;

export const Title = styled.div`
  font-size: 24px;
  margin-bottom: 10px;
  span {
    color: ${({ theme }) => theme.colors.red};
  }
`;
export const Desc = styled.div`
  display: flex;
  gap: 10px;

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
  font-size: 20px;
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
    font-size: 16px;
  }
`;
