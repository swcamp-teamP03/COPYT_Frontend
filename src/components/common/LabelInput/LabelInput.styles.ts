import styled from 'styled-components';

interface LayoutProps {
  flexDirection: 'row' | 'column';
}

export const Layout = styled.div<LayoutProps>`
  display: flex;
  position: relative;
  flex-direction: ${(props) => props.flexDirection};
  margin-bottom: 20px;
`;
export const Label = styled.label`
  margin-bottom: 10px;
  span {
    color: red;
  }
`;

export const Input = styled.input`
  padding: 18px 20px;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.colors.gray30};
`;

export const TextCount = styled.div`
  position: absolute;
  right: 1rem;
  bottom: 1rem;
  color: ${({ theme }) => theme.colors.gray50};
`;

export const ErrorMessage = styled.div`
  margin-top: 5px;
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: ${({ theme }) => theme.colors.red};
`;
