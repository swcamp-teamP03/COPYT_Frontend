import React from 'react';
import styled from 'styled-components';
import { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import GNB from '../components/common/GNB';

interface LayoutProps {
  router: ReactNode;
}

const Layout = ({ router }: LayoutProps) => {
  const location = useLocation();
  const { pathname } = location;
  const isRoot = pathname === '/main';
  return (
    <Wrapper>
      <Sticky>
        <GNB />
      </Sticky>
      <ContentWrapper isRoot={isRoot}>
        <Content>{router}</Content>
      </ContentWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  height: 100%;
`;

const Sticky = styled.div`
  position: sticky;
  top: 0;
`;

const ContentWrapper = styled.div<{ isRoot: boolean }>`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 4.25rem;
  background-color: ${({ isRoot }) => (isRoot ? '#F7F8FA' : 'transparent')};
`;

const Content = styled.div`
  position: relative;
  height: 100%;
  min-width: 1000px;
`;

export default Layout;
