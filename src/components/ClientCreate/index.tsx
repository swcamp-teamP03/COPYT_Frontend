import React, { useState, useCallback, useRef } from 'react';
import { CLIENT_SVG } from '../../assets';
import * as S from './ClientGroupCreate';
import Button from '../common/Button';
import ReactExcelDownload from '../common/XLSX';

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

  const inputRef = useRef<HTMLInputElement | null>(null);

  const onUploadFile = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return;
    }
    console.log(e.target.files[0].name);
  }, []);

  const onUploadFileButtonClick = useCallback(() => {
    if (!inputRef.current) {
      return;
    }
    inputRef.current.click();
  }, []);

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

        <S.HeaderLayout>
          <h2>고객 DB 업로드</h2>
          <S.HeaderLayout>
            <ReactExcelDownload />
            <label>
              <Button title="파일 업로드" buttonColor="black" borderRadius="10px" isDisabled={false} onButtonClick={onUploadFileButtonClick}></Button>
            </label>
          </S.HeaderLayout>
        </S.HeaderLayout>
        <S.ClientProperty style={{ height: '60px', border: 'dashed 2px', borderColor: '#ded6d6', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <input type="file" accept=".xls, .xlsx" ref={inputRef} onChange={onUploadFile} style={{ display: 'none' }} />
        </S.ClientProperty>
      </S.TaxtContainer>
    </>
  );
};

export default ClientGroupCreate;
