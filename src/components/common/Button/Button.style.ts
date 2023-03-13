import styled from 'styled-components';

interface ButtonProps {
  buttonSize: 'buttonS' | 'buttonM' | 'buttonL';
  buttonColor: 'blue' | 'white';
  disabled: boolean;
  borderRadius: string;
}

export const HeaderButton = styled.button<ButtonProps>`
  ${(props) => props.theme.button[`${props.buttonSize}`]}
  cursor: pointer;
  background-color: ${(props) => (props.buttonColor === 'blue' ? props.theme.colors.blue30 : props.theme.colors.white)};
  color: ${(props) => (props.buttonColor === 'blue' ? props.theme.colors.white : 'black')};
  border: ${(props) => (props.buttonColor === 'white' ? 'solid 1px' : 'none')};
  border-radius: ${(props) => props.borderRadius};
  :hover {
    background-color: ${(props) => (props.buttonColor === 'blue' ? props.theme.colors.blue40 : props.theme.colors.gray20)};
  }
  :disabled {
    cursor: default;
    background-color: ${({ theme, buttonColor }) => (buttonColor === 'blue' ? theme.colors.gray10 : theme.colors.white)};
    color: ${({ theme, buttonColor }) => (buttonColor === 'blue' ? theme.colors.white : theme.colors.gray40)};
  }
`;
