import styled from 'styled-components';

export const FlexBox = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  margin-top: 40px;
  margin-bottom: 20px;
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

const DropwDownWrapper = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  position: relative;
  padding: 0 20px;
  border: 2px solid ${({ theme }) => theme.colors.gray30};
  border-radius: 12px;
  height: 50px;
`;

export const CalendarWrapper = styled(DropwDownWrapper)`
  justify-content: space-between;
  margin-left: 30px;

  width: 150px;
`;

export const TimeWrapper = styled(DropwDownWrapper)`
  border: 2px solid ${({ theme }) => theme.colors.gray30};
  width: 100px;
  height: 50px;
  border-radius: 12px;
`;
