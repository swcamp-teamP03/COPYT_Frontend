import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

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
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleDownloadReasonChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDownloadReason(e.target.value);
  };

  const handleConfirmDownload = () => {
    if (downloadReason.trim() === '') {
      setError('다운로드 사유를 입력해주세요.');
      return;
    }

    setPassword('');
    setError('');
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
          <ModalTitle>다운로드</ModalTitle>
          <CloseButton onClick={onClose}>&times;</CloseButton>
        </ModalHeader>
        <ModalBody>
          <div className="form-group">
            <label htmlFor="download-reason">다운로드 사유</label>
            <input type="text" className="form-control" id="download-reason" value={downloadReason} onChange={handleDownloadReasonChange} />
          </div>
          {error && <div className="alert alert-danger">{error}</div>}
          {password !== '' && (
            <div className="form-group">
              <label htmlFor="password">비밀번호</label>
              <input type="password" className="form-control" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
          )}
        </ModalBody>
        <ModalFooter>
          {password === '' ? (
            <>
              <ConfirmButton onClick={handleConfirmDownload}>다음</ConfirmButton>
            </>
          ) : (
            <>
              <CancelButton onClick={() => setPassword('')}>이전</CancelButton>
              <ConfirmButton onClick={handleConfirmPassword}>인증</ConfirmButton>
            </>
          )}
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
  width: 500px;
  max-height: 90vh;
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

const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const CancelButton = styled.button`
  margin-right: 10px;
`;

const ConfirmButton = styled.button`
  background-color: #007bff;
  border-color: #007bff;
  color: #16477c;
`;

export default DownloadModal;
