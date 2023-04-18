import styled from 'styled-components';

export const CopyListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  max-height: 100vh;
  background-color: ${({ theme }) => theme.colors.gray20};
  padding: 40px;
  overflow-y: auto;
  overflow-x: hidden;
  border-radius: 30px;
  p {
    font-size: 24px;
  }
`;
export const CopyCount = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  margin-bottom: 1rem;
  font-weight: 700;
  font-size: 22px;
  span {
    color: ${({ theme }) => theme.colors.blue40};
  }
`;

export const NonData = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const NonDataTitle = styled.h2`
  display: flex;
  text-align: center;
  margin: 0;
  font-weight: 500;
  font-size: 25px;
  margin-bottom: 20px;
  color: #c6c6c6;
`;

export const NondataFooter = styled.span`
  position: absolute;
  bottom: 10px;
  font-weight: 500;
  font-size: 14px;
  color: #c6c6c6;
`;
