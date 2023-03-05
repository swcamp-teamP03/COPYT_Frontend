import React, { useState } from 'react';
import { CLIENT_SVG } from '../../assets';
import * as S from './ClientGroupCreate';
import Button from '../common/Button';

interface ClientGroupDetailProps {
  groupName: string;
  extractStart: string;
  extractEnd: string;
  property: {
    propertyName: string;
    propertyValue: string;
  }[];
  fileOrgName: string;
}

const ClientGroupCreate = () => {
  const [modify, setModify] = useState(false);

  const ModifyHandler = () => {
    setModify(!modify);
  };

  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      if (file) {
        const confirmed = window.confirm('기존 파일을 삭제하고 새 파일을 업로드하시겠습니까?');
        if (confirmed) {
          setFile(selectedFile);
        }
      } else {
        setFile(selectedFile);
      }
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (file) {
      // 파일 업로드 로직을 수행합니다.
    }
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>): void => {
    event.preventDefault();
    event.stopPropagation();

    const file = event.dataTransfer.files[0];
    const extension = file.name.split('.').pop();

    if (extension !== 'xls') {
      alert('Only .xls files are allowed!');
      return;
    }

    if (file) {
      // 기존 파일이 있는 경우
      if (window.confirm('Are you sure you want to replace the existing file?')) {
        setFile(file);
        alert('File uploaded successfully!');
      } else {
        alert('File upload cancelled.');
      }
    } else {
      // 기존 파일이 없는 경우
      setFile(file);
      alert('File uploaded successfully!');
    }
  };

  return (
    <>
      <S.HeaderLayout>
        <h1>고객 그룹 생성</h1>
        <Button title="등록" buttonColor="black" borderRadius="10px" onButtonClick={ModifyHandler} />
      </S.HeaderLayout>
      <S.HeaderLayout>
        <h2>고객 그룹 정보</h2>
      </S.HeaderLayout>

      <S.TaxtInnerContainer>
        <S.TaxtContainer>
          <h3>고객 그룹명</h3>
          <S.ClientModifyProperty type="text" />
        </S.TaxtContainer>
      </S.TaxtInnerContainer>

      <S.TaxtContainer>
        <h3>고객 속성</h3>
        <S.PropertyHighlight>
          {CLIENT_SVG.highlight} &nbsp; &nbsp;고객 DB의 데이터 속성(목표)을 입력해주세요. 입력한 속성은 고객 DB에 영향을 미치지 않으며, 데이터 정보 확인용으로만 활용됩니다.
        </S.PropertyHighlight>

        <div>속성 1 </div>
        <S.ClientModifyProperty type="text" />
        <div>속성 2 </div>
        <S.ClientModifyProperty type="text" />

        <Button title="+" buttonColor="black" borderRadius="10px" buttonSize="buttonS"></Button>

        <h2>고객 DB 업로드</h2>
        <form onSubmit={handleSubmit}>
          <S.HeaderLayout>
            <Button title="양식 파일 다운로드" buttonColor="black" borderRadius="10px" />

            <label htmlFor="file-input">
              <Button title="파일 선택" buttonColor="black" borderRadius="10px" />
              <input type="file" id="file-input" accept=".xls" onChange={handleFileChange} style={{ display: 'none' }} />
            </label>
          </S.HeaderLayout>
          <div
            onDrop={handleDrop}
            onDragOver={(event) => {
              event.preventDefault();
              event.stopPropagation();
            }}
            style={{
              height: '60px',
              border: 'dashed 2px',
              borderColor: '#ded6d6',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            {file ? <div>{file.name}</div> : <div>파일을 업로드해주세요.</div>}
          </div>
        </form>
      </S.TaxtContainer>
    </>
  );
};

export default ClientGroupCreate;
