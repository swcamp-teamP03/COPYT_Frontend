import styled from 'styled-components';

interface HeaderButtonProps {
  buttonSize: 'buttonS' | 'buttonM' | 'buttonL';
  buttonColor: 'normal' | 'disabled' | 'active' | 'sDisabled' | 'sNormal' | 'sActive';
  disabled: boolean;
}

export const HeaderButton = styled.button<HeaderButtonProps>`
  ${(props) => props.theme.button[`${props.buttonSize}`]}
  cursor : ${(props) => (props.buttonColor === 'disabled' ? 'default' : 'point')};
  background-color: ${({ theme, buttonColor }) => {
    const colors = {
      disabled: theme.colors.gray10,
      normal: theme.colors.gray90,
      active: theme.colors.black,
      sDisabled: theme.colors.white,
      sNormal: theme.colors.white,
      sActive: theme.colors.white,
    };
    return colors[buttonColor ?? 'active'];
  }};
  color: ${({ theme, buttonColor }) => {
    const colors = {
      disabled: theme.colors.white,
      normal: theme.colors.white,
      active: theme.colors.white,
      sDisabled: theme.colors.gray10,
      sNormal: theme.colors.gray60,
      sActive: theme.colors.black,
    };
    return colors[buttonColor ?? 'active'];
  }};
  border: ${(props) => (props.buttonColor === 'sDisabled' || props.buttonColor === 'sNormal' || props.buttonColor === 'sActive' ? 'solid 1px' : 'none')};
  width: ${(props) => (props.buttonSize === 'buttonL' ? '13rem' : '')};
  width: ${(props) => (props.buttonSize === 'buttonM' ? '7.6rem' : '3.3rem')};
  :hover {
    background-color: ButtonFace;
  }
`;
