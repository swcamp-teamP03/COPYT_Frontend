import DatePicker from 'react-datepicker';
import styled from 'styled-components';

export const FlexBox = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  margin-top: 40px;
  margin-bottom: 20px;
`;

export const Title = styled.div`
  font-size: 20px;
  font-weight: 500;
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
`;

export const RadioInput = styled.div`
  font-size: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
  line-height: 30px;
  input {
    width: 16px;
    height: 16px;
    :checked {
      background-color: black;
    }
  }
  label {
    font-size: 18px;
  }
  span {
    color: ${({ theme }) => theme.colors.gray50};
    font-size: 14px;
  }
`;

export const TimeWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0 20px;
  justify-content: space-between;
  border: 2px solid ${({ theme }) => theme.colors.gray30};
  width: 200px;
  height: 50px;
  border-radius: 12px;
  padding-left: 20px;
`;

export const SDatePicker = styled(DatePicker)`
  padding-left: 25px;
  cursor: pointer;
  border: none;
  width: 180px;
  height: 40px;
  font-size: 16px;
`;
