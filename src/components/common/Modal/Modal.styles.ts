import { ModalFrameProps } from './index';
import styled from 'styled-components';

export const Overlay = styled.div<Pick<ModalFrameProps, 'isOpen'>>`
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  position: fixed;
  background-color: ${({ theme }) => theme.colors.gray50};
  opacity: 0.3;
  z-index: 10;
  width: 100%;
  height: 100%;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
`;

export const ModalFrame = styled.div<Partial<ModalFrameProps>>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  flex-direction: column;
  position: fixed;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  z-index: 20;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 40px 50px;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  h2 {
    font-size: 24px;
  }
  div {
    width: 24px;
    cursor: pointer;
  }
`;

export const Hr = styled.hr`
  margin: 0;
`;

export const ModalBody = styled.div`
  white-space: pre-wrap;
  height: 70%;
  overflow: auto;
`;

export const ModalFooter = styled.div`
  padding-top: 20px;
  width: 100%;
  height: 30%;
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`;
