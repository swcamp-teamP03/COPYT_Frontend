import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Button from '../../common/Button';
import NoticeModal from './NoticeModal';

interface DownloadModalProps {
  show: boolean;
  onClose: () => void;
}

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CloseButton = styled.button`
  border: none;
  background-color: transparent;
  font-size: 1.5rem;
  font-weight: bold;
  color: #000;
  cursor: pointer;
`;

const DownloadModal: React.FC<DownloadModalProps> = ({ show, onClose }) => {
  const [downloadReason, setDownloadReason] = useState('');
  const [step, setStep] = useState(1);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [notice, setNotice] = useState(false);

  const handleDownloadReasonChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDownloadReason(e.target.value);
  };

  const handleConfirmDownload = () => {
    if (downloadReason.trim() === '') {
      setError('다운로드 사유를 입력해주세요.');
      return;
    }

    setStep(step + 1);
    setError('');
  };

  const noticeHandler = () => {
    setNotice(!notice);
  };

  const handleConfirmPassword = async () => {
    try {
      const response = await axios.post('https://52ee0db7-7c10-449a-b3f4-0bda5fff30a1.mock.pstmn.io/groups/1/file/download', {
        downloadReason: downloadReason,
        password: password,
      });
      onClose();
    } catch (error) {
      setError('비밀번호가 일치하지 않습니다. 다시 입력해주세요.');
    }
  };

  return (
    <ModalWrapper className={show ? 'show' : ''}>
      <ModalContent>
        <ModalHeader>
          <ModalTitle>
            {step === 1 && <h2>고객 파일 다운로드 사유</h2>}
            {step === 2 && <h2>관리자 인증</h2>}
            {step === 3 && <h2>다운로드 완료</h2>}
          </ModalTitle>
          <CloseButton onClick={onClose}>&times;</CloseButton>
        </ModalHeader>
        <ModalBody>
          {step === 1 && (
            <label>
              개인정보의 안정성 확보조치 기준(고시)에 따라 개인정보를 다운로드할 경우 사유 확인이 필요합니다.{' '}
              <UnderLine onClick={noticeHandler}>관련법령 {notice === true && <NoticeModal notice={notice} noticeHandler={noticeHandler} />}</UnderLine>
              <input type="text" value={downloadReason} onChange={(e) => setDownloadReason(e.target.value)} />
              {error && <div>{error}</div>}
            </label>
          )}
          {step === 2 && (
            <label>
              비밀번호
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </label>
          )}
          {step === 3 && <p>파일 다운로드가 완료되었습니다. 다운로드 내역은 [마이페이지 - 고객 DB 다운로드 내역] 에서 확인 가능합니다.</p>}
        </ModalBody>
        <ModalFooter>
          {step === 1 && <Button onButtonClick={handleConfirmDownload} title="다음" buttonColor="blue"></Button>}
          {step === 2 && <Button onButtonClick={handleConfirmDownload} title="인증" buttonColor="blue"></Button>}
          {step === 3 && <Button onButtonClick={handleConfirmDownload} title="완료" buttonColor="blue"></Button>}
        </ModalFooter>
      </ModalContent>
    </ModalWrapper>
  );
};

const ModalWrapper = styled.div`
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

const ModalContent = styled.div`
  position: relative;
  width: 630px;
  height: fit-content;
  overflow-y: auto;
  border-radius: 5px;
  background-color: #fff;
  padding: 15px;
`;

const ModalTitle = styled.h5`
  margin-bottom: 0;
`;

const ModalBody = styled.div`
  margin-top: 15px;
  margin-bottom: 15px;
`;

const UnderLine = styled.div`
  text-decoration: underline;
`;

const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export default DownloadModal;
