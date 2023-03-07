import styled from 'styled-components';

export const Gap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
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
  color: #606060;
  span {
    width: 100%;
    white-space: wrap;
  }
`;

export const RadioInput = styled.div`
  font-size: 20px;
  display: flex;
  gap: 10px;
  line-height: 30px;
  margin-bottom: 6px;
  input {
    width: 20px;
    height: 20px;
    :checked {
      background-color: black;
    }
  }
  span {
    color: ${({ theme }) => theme.colors.gray20};
    font-size: 16px;
  }
`;
