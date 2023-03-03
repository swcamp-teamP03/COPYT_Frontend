import React from 'react';
import styled from 'styled-components';
import { ReactNode } from 'react';
import GNB from '../components/common/GNB';

interface LayoutProps {
  router: ReactNode;
}

const Layout = ({ router }: LayoutProps) => {
  return (
    <Wrapper>
      <Content>
        {' '}
        <GNB />
        {router}
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
`;

const Content = styled.div`
  position: relative;
`;

// const Main = styled.main`
//   padding: 20px;
//   padding-top: 80px; /* GNB 높이만큼 여백 추가 */
//   flex: 1;
//   overflow: auto;
// `;

export default Layout;
