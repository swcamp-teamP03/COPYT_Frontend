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
      <Sticky>
        <GNB />
      </Sticky>
      <ContentWrapper>
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

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 4.25rem 4.25rem;
`;

const Content = styled.div`
  position: relative;
  height: 100%;
`;

export default Layout;
