import styled from 'styled-components';

export const CheckBoxContainer = styled.div`
  display: flex;
  margin-bottom: 10px;
  width: 100%;
`;

export const CheckBox = styled.input`
  width: 24px;
  margin-right: 20px;
  height: 24px;
`;

export const CheckBoxContent = styled.div`
  position: relative;
  width: 100%;
  h3 {
    margin: 5px 0 10px 0;
  }
  span {
    font-size: ${({ theme }) => theme.fontSize.sm};
    color: ${({ theme }) => theme.colors.gray20};
  }
`;

export const ChevronButton = styled.div`
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 0;
`;
