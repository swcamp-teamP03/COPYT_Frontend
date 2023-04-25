import React from 'react';
import styled from 'styled-components';

interface InfoNoticeModalProps {
  infoOpen: boolean;
  handleInfo: () => void;
  personalImg: string; // personal 이미지 파일 경로
  personalAlt: string; // personal 이미지 대체 텍스트
  titleText: string; // Title 컴포넌트에 들어갈 텍스트
}

const InfoNoticeModal: React.FC<InfoNoticeModalProps> = ({ infoOpen, handleInfo, personalImg, personalAlt, titleText }) => {
  return (
    <ModalWrapper className={infoOpen ? 'show' : ''} onClick={handleInfo}>
      <ModalContent>
        <Title>{titleText}</Title>
        <CloseButton onClick={handleInfo}>×</CloseButton>
        <PersonalImg src={personalImg} />
      </ModalContent>
    </ModalWrapper>
  );
};

export default InfoNoticeModal;

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  background-color: rgba(0, 0, 0, 0.5);
  display: none;
  justify-content: center;
  align-items: center;

  &.show {
    display: flex;
  }
`;

const CloseButton = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
`;

const ModalContent = styled.div`
  position: relative;
  width: 100%;
  max-height: 90%;
  height: fit-content;
  border-radius: 5px;
  background-color: #fff;
  padding: 15px;
  overflow-y: auto;
`;

const Title = styled.h3`
  margin-top: 0;
  margin-bottom: 10px;
`;

const PersonalImg = styled.img`
  display: block;
  max-width: 100%;
  height: auto;
  margin-top: 10px;
`;
