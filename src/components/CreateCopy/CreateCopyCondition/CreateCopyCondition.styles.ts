import styled from 'styled-components';

export const FlexLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
`;

export const Label = styled.label`
  font-size: 20px;
  span {
    color: ${({ theme }) => theme.colors.red};
    font-size: 24px;
    text-align: center;
  }
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
  cursor: pointer;
  width: 74px;
  height: 42px;
  border: 1px solid #e1e1e1;
  border-radius: 10px;
  background-color: ${(props) => (props.isSelected ? '#e1e1e1' : 'white')};
`;

export const DropDownBox = styled.div`
  position: relative;
  height: 30px;
  border: 1px solid #e1e1e1;
  border-radius: 10px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;

export const CopySubmit = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin: 42px 0;

  button {
    cursor: pointer;
    width: 204px;
    height: 52px;
  }
`;

export const KeywordContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 1rem;
  flex-wrap: wrap;
`;

export const KeywordTag = styled.div`
  display: flex;
  gap: 10px;
  overflow: hidden;
  border-radius: 10px;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.gray20};
  margin-bottom: 10px;
  div {
    cursor: pointer;
    width: 10px;
    height: 10px;
  }
`;

export const TextCount = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 5px;
  height: 30px;
  border: 1px solid #e1e1e1;
  border-radius: 10px;
  padding: 10px 20px;
  div {
    cursor: pointer;
  }
`;
