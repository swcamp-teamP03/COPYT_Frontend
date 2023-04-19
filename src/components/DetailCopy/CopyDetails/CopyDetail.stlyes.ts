import styled from 'styled-components';

export const Label = styled.label`
  display: flex;
  margin-bottom: 10px;
`;

export const GroupName = styled.h2``;

export const TextBox = styled.div`
  padding: 11px 20px;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.colors.gray30};
  margin-bottom: 30px;
  display: flex;
`;

export const KeywordWrapper = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 30px;
`;

export const Keyword = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 12px;
  height: 42px;
  border: 1px solid #e1e1e1;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.gray20};
  white-space: nowrap;
`;

export const CopyTypeContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 30px;
`;

interface CopyTypeProps {
  isSelected: boolean;
}

export const CopyType = styled.button<CopyTypeProps>`
  width: 74px;
  height: 42px;
  border: 1px solid #e1e1e1;
  border-radius: 10px;
  background-color: ${(props) => (props.isSelected ? '#e1e1e1' : 'white')};
`;

export const FlexLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  margin-bottom: 30px;
`;

export const DarkBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  border: 1px solid #e1e1e1;
  border-radius: 10px;
  padding: 10px 20px;
  background: #f0f0f0;
`;

export const CopySubmit = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin: 20px 0;
  button {
    cursor: pointer;
    width: 204px;
    height: 52px;
  }
`;
