import styled from 'styled-components';

export const TagContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 10px;
  margin: 1rem 0 1.5rem 0;
`;

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const GroupList = styled.div`
  display: grid;
  cursor: pointer;
  gap: 10px;
  grid-template-columns: 1fr 1fr 4fr;
  height: 82px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: #f8f8f8;
  font-size: 18px;
  span,
  div {
    display: flex;
    justify-content: center;
    color: #777777;
  }
  span:nth-child(3) {
    justify-content: flex-start;
    font-weight: 700;
    font-size: 21px;
    color: #444444;
  }
`;

interface TagButtonProps {
  isSelectedTag?: boolean;
}
export const TagButton = styled.button<TagButtonProps>`
  cursor: pointer;
  padding: 10px 20px;
  height: 38px;
  border-radius: 10px;
  border: none;
  background-color: ${(props) => (props.isSelectedTag ? props.theme.colors.gray60 : props.theme.colors.gray40)};
`;

export const VerticalHr = styled.div`
  width: 1px;
  height: 20px;
  background-color: rgba(151, 151, 151, 1);
`;

export const Footer = styled.div`
  display: flex;
  margin-top: 24px;
  justify-content: flex-end;
  align-items: center;
  gap: 16px;
`;

export const ListCount = styled.div`
  position: relative;
  cursor: pointer;
  border: 1px solid #979797;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
  padding: 10px 15px;
`;

export const DropDownContainer = styled.div`
  position: absolute;
  border: 1px solid #dfdfdf;
  border-radius: 12px;
  top: 40px;
  left: 0;
  background-color: white;
  width: 100%;
  div {
    padding: 5px 10px;
    border-top: 1px solid #dfdfdf;
  }
`;
