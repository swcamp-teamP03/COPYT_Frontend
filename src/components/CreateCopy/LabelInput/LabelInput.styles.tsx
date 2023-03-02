import styled from 'styled-components';

export const Layout = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 30px;
`;

export const Label = styled.label`
  font-size: 20px;
  span {
    color: ${({ theme }) => theme.colors.red};
    font-size: 24px;
    text-align: center;
  }
`;

export const Input = styled.input`
  height: 30px;
  border-radius: 10px;
  border: 1px solid;
  padding: 10px;
  width: 100%;
  border-color: ${({ theme }) => theme.colors.gray60};
`;

export const TextCount = styled.div`
  position: absolute;
  bottom: 15px;
  right: 15px;
  color: ${({ theme }) => theme.colors.gray50};
`;
