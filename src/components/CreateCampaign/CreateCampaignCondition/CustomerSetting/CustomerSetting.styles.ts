import styled from 'styled-components';

export const FlexBox = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const Title = styled.div`
  font-size: 20px;
  white-space: nowrap;
  margin-top: 5px;
  span {
    color: ${({ theme }) => theme.colors.red};
  }
`;

export const GroupBox = styled.div`
  margin: 30px 0;
  display: flex;
  justify-content: space-between;
  border-radius: 10px;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.gray40};
  color: #606060;
  div {
    width: 12px;
    height: 12px;
    cursor: pointer;
  }
`;

export const NonGroupBox = styled.div`
  margin: 30px 0;
  display: flex;
  justify-content: center;
  border: 1px dotted #dadada;
  border-radius: 10px;
  padding: 1rem;
  color: #606060;
`;

export const Desc = styled.div`
  display: flex;
  gap: 10px;

  span {
    color: ${({ theme }) => theme.colors.gray50};
    width: 100%;
    white-space: wrap;
    font-size: 14px;
  }
  div {
    margin-top: 4px;
  }
`;

export const Red = styled.span`
  color: ${({ theme }) => theme.colors.red};
`;

export const RadioInput = styled.div`
  font-size: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
  line-height: 30px;
  input {
    width: 18px;
    height: 18px;
    :checked {
      background-color: black;
    }
  }
  label {
    margin-top: 5px;
    white-space: nowrap;
    font-size: 18px;
  }
`;
