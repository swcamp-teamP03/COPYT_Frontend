import React, { ReactNode, useEffect } from 'react';
import { SVG } from '../../../assets';
import * as S from './Modal.styles';

export interface PropsWithChild {
  children: ReactNode | string;
}

export interface ModalFrameProps extends PropsWithChild {
  isOpen: boolean;
  height?: string;
  width?: string;
  onClick: () => void;
  borderRadius?: string;
}

const ModalFrame = ({ isOpen, height = '180px', width = '520px', onClick, children, borderRadius }: ModalFrameProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.cssText = `
        position: fixed; 
        overflow-y: hidden;
        height:100%;
        width: 100%;`;
    } else {
      document.body.style.cssText = '';
    }
    return () => {
      document.body.style.cssText = '';
    };
  }, [isOpen]);

  return (
    <>
      <S.Overlay isOpen={isOpen} onClick={onClick} />
      <S.ModalFrame isOpen={isOpen} width={width} height={height} borderRadius={borderRadius}>
        {children}
      </S.ModalFrame>
    </>
  );
};

export interface ModalHeaderProps extends PropsWithChild {
  onClick: () => void;
}

const ModalHeader = ({ children, onClick }: ModalHeaderProps) => {
  return (
    <>
      <S.ModalHeader>
        <h2>{children}</h2>
        <div onClick={onClick}>{SVG.closeButton}</div>
      </S.ModalHeader>
      <S.Hr />
    </>
  );
};

export interface ModalBodyProps extends PropsWithChild {
  height?: string;
}

const ModalBody = ({ children, height = '70%' }: ModalBodyProps) => {
  return <S.ModalBody height={height}>{children}</S.ModalBody>;
};

const ModalFooter = ({ children }: PropsWithChild) => {
  return <S.ModalFooter>{children}</S.ModalFooter>;
};

const Modal = {
  Frame: ModalFrame,
  Header: ModalHeader,
  Body: ModalBody,
  Footer: ModalFooter,
};

export default Modal;
