import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const HeadTitle = styled.h2``;

interface HaederButtonProps {
  buttonSize: 'buttonS' | 'buttonM' | 'buttonL';
  buttonColor: 'red' | 'white' | 'blue' | 'disabled';
  disabled: boolean;
}

export const HeaderButton = styled.button<HaederButtonProps>`
  ${(props) => props.theme.button[`${props.buttonSize}`]}
  cursor: ${(props) => (props.buttonColor === 'disabled' ? 'default' : 'point')};
  background-color: ${({ theme, buttonColor }) => {
    const colors = {
      red: theme.colors.white,
      white: theme.colors.white,
      blue: theme.colors.blue30,
      disabled: theme.colors.gray30,
    };
    return colors[buttonColor ?? 'blue'];
  }};
  color: ${({ theme, buttonColor }) => {
    const colors = {
      red: theme.colors.red,
      white: theme.colors.gray50,
      blue: theme.colors.white,
      disabled: theme.colors.gray20,
    };
    return colors[buttonColor ?? 'blue'];
  }};
`;
