import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 3rem;
  gap: 5px;
`;

interface ButtonProps {
  isSelected?: boolean;
}

export const Button = styled.button<ButtonProps>`
  cursor: pointer;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.gray30};
  background-color: ${(props) => (props.isSelected ? props.theme.colors.gray10 : 'white')};

  :disabled {
    cursor: default;
    color: ${({ theme }) => theme.colors.gray10};
  }
`;
