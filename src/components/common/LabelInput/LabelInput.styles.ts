import styled from 'styled-components';

interface LayoutProps {
  flexDirection: 'row' | 'column';
  marginBottom: string;
}

export const Layout = styled.div<LayoutProps>`
  display: flex;
  position: relative;
  width: 100%;
  flex-direction: ${(props) => props.flexDirection};
  margin-bottom: ${(props) => props.marginBottom};
`;

interface LabelProps {
  labelFontSize: string;
  labelFontWeight: string;
}

export const Label = styled.label<LabelProps>`
  margin-bottom: 10px;
  display: flex;
  width: fit-content;
  font-size: ${(props) => props.labelFontSize};
  font-weight: ${(props) => props.labelFontWeight};
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
  font-size: 12px;
  right: 1rem;
  bottom: ${(props) => (props.hasDesc ? '3.5rem' : '1rem')};
  color: ${({ theme }) => theme.colors.gray50};
  opacity: 0.7;
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
  white-space: pre;
  gap: 10px;
  font-size: 11px;
  margin-top: 0.7rem;
  span {
    color: #606060;
    line-height: 21px;
  }
`;
