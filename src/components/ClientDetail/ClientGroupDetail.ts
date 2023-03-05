import styled from 'styled-components';

export const HeaderLayout = styled.div`
  display: block;
  align-items: center;
  justify-content: space-between;
  padding: 0px 0px 0px 10px;
  gap: 5px;
`;

export const TaxtContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 10px;
  margin: 1rem 0 1.5rem 1rem;
  flex-direction: column;
`;
export const TaxtInnerContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 10px;
`;

export const ClientProperty = styled.div`
  background-color: ${({ theme }) => theme.colors.gray0};
  color: ${({ theme }) => theme.colors.gray70};
  padding: 10px;
  margin: 2px;
  height: 20px;
  border-radius: 10px;
  border: solid 1px;
  border-color: ${({ theme }) => theme.colors.gray10};
`;

export const ClientModifyProperty = styled.input`
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};
  padding: 10px;
  margin: 2px;
  height: 20px;
  border-radius: 10px;
  border: solid 1px;
  border-color: ${({ theme }) => theme.colors.gray10};
`;

export const PropertyHighlight = styled.div`
  color: ${({ theme }) => theme.colors.gray70};
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
