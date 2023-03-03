import styled from 'styled-components';

interface HeaderButtonProps {
  buttonSize: 'buttonS' | 'buttonM' | 'buttonL';
  buttonColor: 'black' | 'white';
  disabled: boolean;
  borderRadius: string;
}

export const HeaderButton = styled.button<HeaderButtonProps>`
  ${(props) => props.theme.button[`${props.buttonSize}`]}
  cursor: pointer;
  background-color: ${(props) => (props.buttonColor === 'black' ? props.theme.colors.gray90 : props.theme.colors.white)};
  color: ${(props) => (props.buttonColor === 'black' ? props.theme.colors.white : props.theme.colors.gray60)};
  border: ${(props) => (props.buttonColor === 'white' ? 'solid 1px' : 'none')};
  border-radius: ${(props) => props.borderRadius};
  :hover {
    background-color: ${(props) => (props.buttonColor === 'black' ? props.theme.colors.black : props.theme.colors.gray0)};
  }
  :disabled {
    cursor: default;
    background-color: ${({ theme, buttonColor }) => (buttonColor === 'black' ? theme.colors.gray10 : theme.colors.white)};
    color: ${({ theme, buttonColor }) => (buttonColor === 'black' ? theme.colors.white : theme.colors.gray40)};
  }
`;
