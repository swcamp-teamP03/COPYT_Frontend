import styled from 'styled-components';

export const Layout = styled.div`
  padding: 0 4rem;
`;

export const HeaderLayout = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 10px 0px 0px 10px;
  gap: 10px;
`;

export const PlusButtonLayout = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 10px 0px 0px 10px;
  gap: 10px;
  margin: 2rem;
`;

export const TaxtContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 10px;
  margin: 1rem 0 1.5rem 1rem;
  flex-direction: column;
  h3 {
    font-size: 20px;
    font-weight: 500;
  }
`;

export const TaxtInnerContainer = styled.div`
  display: flex;
  width: 50%;
  gap: 10px;
  margin: 1rem 0 1.5rem 1rem;
  flex-direction: column;
  h3 {
    margin: 0;
    font-size: 20px;
    font-weight: 500;
  }
`;

export const ClientProperty = styled.div`
  background-color: ${({ theme }) => theme.colors.gray10};
  color: ${({ theme }) => theme.colors.gray50};
  padding: 10px 30px 10px 10px;
  height: 20px;
  border-radius: 10px;
  border: solid 1px;
  border-color: ${({ theme }) => theme.colors.gray10};
  justify-content: space-between;

  div:hover {
    cursor: pointer;
  }
`;

export const FlexBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
`;

export const ClientModifyProperty = styled.input`
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};
  padding: 12px;
  height: 20px;
  width: 98%;
  border-radius: 10px;
  border: solid 1px;
  border-color: ${({ theme }) => theme.colors.gray10};
  #input-file {
    display: none;
  }

  #input-file + label::before {
    content: '파일 선택'; /* 파일 선택 글자 추가 */
    display: inline-block;
    padding: 8px 16px;
    border: 1px solid #ded6d6;
    border-radius: 10px;
    cursor: pointer;
  }

  #input-file:focus + label::before {
    outline: 2px solid blue; /* 선택된 파일이 아닐 때는 포커스 표시 안 함 */
  }
`;

export const PropertyHighlight = styled.div`
  color: ${({ theme }) => theme.colors.gray50};
  padding: 10px;
  margin: 2px;
  height: 20px;
  border-radius: 10px;
  border: solid 2px;
  border-color: ${({ theme }) => theme.colors.gray20};
  font-size: ${({ theme }) => theme.fontSize.xs};
  display: flex;
  flex-wrap: wrap;
  align-content: flex-end;
  justify-content: center;
  align-items: center;
`;
