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
  position: relative;
  width: fit-content;
  span {
    color: red;
    margin-right: 0.5rem;
  }
`;

export const Input = styled.input<{ borderColor?: string }>`
  padding: 18px 20px;
  border-radius: 12px;
  border: 1px solid ${({ theme, borderColor }) => borderColor ?? theme.colors.gray30};
`;

interface TextCountProps {
  hasDesc: boolean;
}

export const TextCount = styled.div<TextCountProps>`
  position: absolute;
  right: 1rem;
  bottom: ${(props) => (props.hasDesc ? '2.5rem' : '0.7rem')};
  color: ${({ theme }) => theme.colors.gray50};
`;

export const ErrorMessage = styled.div`
  margin-top: 5px;
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: ${({ theme }) => theme.colors.red};
`;

export const ConfirmMessage = styled.div`
  margin-top: 5px;
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: ${({ theme }) => theme.colors.blue50};
`;

export const Desc = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  span {
    color: #606060;
  }
`;
