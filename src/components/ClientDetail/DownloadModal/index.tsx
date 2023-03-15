import React, { useState } from 'react';
import { postExcelDown } from '../../../api/client/create';
import styled from 'styled-components';
import Button from '../../common/Button';
import NoticeModal from './NoticeModal';
import { useParams } from 'react-router-dom';
import * as S from './DownloadModal';

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

  console.log(downloadReason);

  const { id } = useParams();

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
      const { data }: any = await postExcelDown({
        id: id,
        downloadReason: downloadReason,
        password: password,
      });
      const blob = await data.blob();
      const filename = data.headers.get('Content-Disposition').split('filename=')[1];
      const url = window.URL.createObjectURL(new Blob([blob]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', decodeURIComponent(filename));
      document.body.appendChild(link);
      link.click();
      if (link.parentNode) {
        link.parentNode.removeChild(link);
      }
      onClose();
      setStep(step + 1);
      console.log(data);
      alert('파일이 다운로드되었습니다.');
    } catch (err) {
      setError('비밀번호가 일치하지 않습니다. 다시 입력해주세요.');
    }
  };

  return (
    <S.ModalWrapper className={show ? 'show' : ''}>
      <S.ModalContent>
        <ModalHeader>
          <S.ModalTitle>
            {step === 1 && <p>고객 파일 다운로드 사유</p>}
            {step === 2 && <p>관리자 인증</p>}
            {step === 3 && <p>다운로드 완료</p>}
          </S.ModalTitle>
          <CloseButton onClick={onClose}>&times;</CloseButton>
        </ModalHeader>
        <S.ModalBody>
          {step === 1 && (
            <label>
              개인정보의 안정성 확보조치 기준(고시)에 따라 개인정보를 다운로드할 경우 사유 확인이 필요합니다.{' '}
              <S.UnderLine onClick={noticeHandler}>관련법령 {notice === true && <NoticeModal notice={notice} noticeHandler={noticeHandler} />}</S.UnderLine>
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
        </S.ModalBody>
        <S.ModalFooter>
          {step === 1 && <Button onButtonClick={handleConfirmDownload} title="다음" buttonColor="blue"></Button>}
          {step === 2 && <Button onButtonClick={handleConfirmPassword} title="인증" buttonColor="blue"></Button>}
          {step === 3 && <Button onButtonClick={handleConfirmDownload} title="완료" buttonColor="blue"></Button>}
        </S.ModalFooter>
      </S.ModalContent>
    </S.ModalWrapper>
  );
};

export default DownloadModal;
