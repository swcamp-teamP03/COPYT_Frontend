import styled from 'styled-components';

export const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LinkBox = styled.div<{ isActive: boolean }>`
  display: flex;
  align-items: center;
  width: 270px;
  padding: 20px;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.blue60};
  background-color: ${({ isActive }) => (isActive ? '#eef2ff' : ' white')};
  border-radius: 10px;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.15);
  cursor: pointer;
`;

export const WrapperBox = styled.div`
  display: flex;
  gap: 100px;
  justify-content: space-between;
  margin-bottom: 40px;
`;

export const LinkTitle = styled.div`
  margin-left: 10px;
  font-weight: 700;
  font-size: 15px;
  text-align: center;
`;
export const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 602px;
  height: 350px;
  padding: 30px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.15);
  overflow: hidden; // 추가
`;

export const Explanation = styled.img`
  background-color: ${({ theme }) => theme.colors.gray30};
  width: 100%;
  margin: 5px;
  border-radius: 10px;
  max-height: 290px; // 추가
`;

export const Content = styled.div`
  margin-bottom: 10px;
  margin-top: 30px;
  font-size: 15px;
  font-weight: 700;
  text-align: left;
  width: 100%;
  flex: 1;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 30px;
`;
