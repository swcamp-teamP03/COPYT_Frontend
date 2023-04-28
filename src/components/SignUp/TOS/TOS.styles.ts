import styled from 'styled-components';

export const CheckBoxContainer = styled.div`
  display: flex;
  margin-bottom: 10px;
  flex-direction: column;
  width: 100%;
`;

export const CheckBoxLayout = styled.div`
  display: flex;
  margin-bottom: 10px;
  width: 100%;
`;

export const CheckBox = styled.input`
  width: 24px;
  margin-top: 9px;
  margin-right: 20px;
  height: 24px;
`;

export const CheckBoxContent = styled.div`
  position: relative;
  width: 100%;
  h3 {
    margin: 5px 0 10px 0;
  }
  p {
    font-size: ${({ theme }) => theme.fontSize.xs};
    color: ${({ theme }) => theme.colors.gray50};
    font-weight: 700;
  }
  span {
    font-size: ${({ theme }) => theme.fontSize.xs};
    color: ${({ theme }) => theme.colors.gray50};
    font-weight: 300;
    cursor: pointer;
  }
`;

export const MotionWrapper = styled.div`
  overflow: hidden;
  width: 100%;
`;

interface ChevronButtonProps {
  open: boolean;
}

export const ChevronButton = styled.div<ChevronButtonProps>`
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 0;

  transform: rotate(${(props) => (props.open ? '180deg' : '0deg')});
  transition: trasform 0.3s, -webkit-transform 0.3s;
`;
