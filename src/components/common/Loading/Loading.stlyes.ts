import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  background: #000000;
  opacity: 0.8;
  z-index: 10;
  width: 100%;
  height: 100%;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
`;

export const Layout = styled.div`
  width: 400px;
  height: 400px;
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  z-index: 20;
`;

export const Spinner = styled.img`
  width: 200px;
`;

export const LoadingTitle = styled.h3`
  color: white;
`;

export const LoadingDesc = styled.span`
  color: white;
`;
