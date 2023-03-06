import styled from 'styled-components';

interface LayoutProps {
  size: 'S' | 'M';
}

export const Layout = styled.div<LayoutProps>`
  margin: ${(props) => `0 ${props.size === 'M' ? 10 : 20}%`};
`;
