import styled from 'styled-components';

interface LayoutProps {
  flexDirection: 'row' | 'column';
}

export const Layout = styled.div<LayoutProps>`
  display: flex;
  flex-direction: ${(props) => props.flexDirection};
`;
export const Label = styled.label`
  margin-bottom: 10px;
  span {
    color: red;
  }
`;

export const Input = styled.input`
  padding: 18px 20px;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.gray30};
  margin-bottom: 20px;
`;
