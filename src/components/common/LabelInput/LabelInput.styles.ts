import styled from 'styled-components';

export const Label = styled.label`
  margin-bottom: 10px;
`;

export const Input = styled.input`
  padding: 18px 20px;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.gray30};
  margin-bottom: 20px;
`;
