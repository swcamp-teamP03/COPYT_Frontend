import styled from 'styled-components';

export const Layout = styled.div`
  margin-bottom: 100px;
`;

export const NoticeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  border: 1px dashed ${({ theme }) => theme.colors.gray30};
  border-radius: 10px;
  height: 50px;
  background-color: #f4f4f4;
  span {
    font-weight: 700;
    color: ${({ theme }) => theme.colors.red};
  }
`;
