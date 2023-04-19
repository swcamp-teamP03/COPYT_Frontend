import styled from 'styled-components';

export const Layout = styled.div`
  padding: 0 4rem;
`;

export const HeaderLayout = styled.div`
  display: block;
  align-items: center;
  justify-content: space-between;
  padding: 0px 0px 0px 10px;
  gap: 5px;
  display: flex;
  h1 {
    font-size: 24px;
    font-weight: 700;
    margin: 19.92px 0;
  }
  h2 {
    font-weight: 500;
  }
`;

export const SubTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 40px;
`;

export const PlusButtonLayout = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 5px 0px 0px 10px;
  gap: 10px;
`;

export const TaxtContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 10px;
  margin: 1rem 0 1rem 1rem;
  flex-direction: column;
  h3 {
    font-weight: 500;
    font-size: 20px;
  }
`;

export const TaxtInnerContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 10px;
`;

interface ClientPropertyProps {
  color?: 'blue';
}

export const ClientProperty = styled.div<ClientPropertyProps>`
  background-color: ${(props) => (props.color === 'blue' ? props.theme.colors.blue10 : props.theme.colors.gray10)};
  color: ${({ theme }) => theme.colors.gray50};
  padding: ${(props) => (props.color === 'blue' ? '10px 30px' : '10px 20px')};
  height: 20px;
  border-radius: 10px;
  border: solid 1px;
  border-color: ${({ theme }) => theme.colors.gray10};
  display: flex;
  align-items: center;
  justify-content: space-between;
  div:hover {
    cursor: pointer;
  }
`;

export const ClientModifyProperty = styled.input`
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};
  padding: 10px 20px;
  height: 20px;
  font-size: 16px;
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
  border-radius: 10px;
  border: solid 2px;
  border-color: ${({ theme }) => theme.colors.gray20};
  font-size: ${({ theme }) => theme.fontSize.xs};
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;
