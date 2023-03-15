import styled from 'styled-components';

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;

  &.show {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const ModalContent = styled.div`
  position: relative;
  width: 630px;
  height: fit-content;
  overflow-y: auto;
  border-radius: 5px;
  background-color: #fff;
  padding: 15px;
`;

export const ModalTitle = styled.h5`
  margin-bottom: 0;
  font-size: ${({ theme }) => theme.fontSize.lg};
`;

export const ModalBody = styled.div`
  margin-top: 15px;
  margin-bottom: 15px;
`;

export const UnderLine = styled.div`
  text-decoration: underline;
`;

export const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
`;
