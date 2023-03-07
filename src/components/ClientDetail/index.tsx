import React, { useState, useCallback, useRef } from 'react';
import { CLIENT_SVG } from '../../assets';
import * as S from './ClientGroupDetail';
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

const LIST_COUNT = [10, 30, 50];

const ClientGroupDetail = () => {
  // : React.FC<ClientGroupDetailProps>

  // ({ groupName, extractStart, extractEnd, property, fileOrgName })

  const [showCountDropDown, setShowCountDropDown] = useState(false);
  const [listCount, setListCount] = useState(10);
  const [modify, setModify] = useState(false);

  const handleCountDropDown = () => {
    setShowCountDropDown((prev) => !prev);
  };

  const ModifyHandler = () => {
    setModify(!modify);
  };

  // const [file, setFile] = useState<File | null>(null);

  // const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const selectedFile = event.target.files?.[0];
  //   if (selectedFile) {
  //     if (file) {
  //       const confirmed = window.confirm('기존 파일을 삭제하고 새 파일을 업로드하시겠습니까?');
  //       if (confirmed) {
  //         setFile(selectedFile);
  //       }
  //     } else {
  //       setFile(selectedFile);
  //     }
  //   }
  // };

  // const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   if (file) {
  //     // 파일 업로드 로직을 수행합니다.
  //   }
  // };

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
        <h1>고객 그룹 상세</h1>
        {modify ? (
          <Button title="저장" buttonColor="black" borderRadius="10px" onButtonClick={ModifyHandler} />
        ) : (
          <Button title="수정" buttonColor="black" borderRadius="10px" onButtonClick={ModifyHandler} />
        )}
      </S.HeaderLayout>
      <S.HeaderLayout>
        <h2>고객 그룹 정보</h2>
      </S.HeaderLayout>

      <S.TaxtInnerContainer>
        <S.TaxtContainer>
          <h3>고객 그룹명</h3>
          {modify ? <S.ClientModifyProperty type="text" /> : <S.ClientProperty>첫구매 고객 웰컴 이벤트 </S.ClientProperty>}
        </S.TaxtContainer>
        <S.TaxtContainer>
          <h3>그룹 생성일</h3>
          <div>2023/날짜 </div>
        </S.TaxtContainer>
      </S.TaxtInnerContainer>

      <S.TaxtContainer>
        <h3>고객 속성</h3>
        <S.PropertyHighlight>
          {CLIENT_SVG.highlight} &nbsp; &nbsp;고객 DB의 데이터 속성(목표)을 입력해주세요. 입력한 속성은 고객 DB에 영향을 미치지 않으며, 데이터 정보 확인용으로만 활용됩니다.
        </S.PropertyHighlight>
        {modify ? (
          <>
            <div>속성 1 </div>
            <S.ClientModifyProperty type="text" />
            <div>속성 2 </div>
            <S.ClientModifyProperty type="text" />

            <Button title="+" buttonColor="black" borderRadius="10px" buttonSize="buttonS" isDisabled={false}></Button>

            <>
              <S.HeaderLayout>
                <h2>고객 DB 업로드</h2>
                <S.HeaderLayout>
                  <Button title="양식 파일 다운로드" buttonColor="black" borderRadius="10px" isDisabled={false} onButtonClick={onUploadFileButtonClick}></Button>
                  <Button title="파일 재 업로드" buttonColor="black" borderRadius="10px" isDisabled={false}></Button>
                </S.HeaderLayout>
              </S.HeaderLayout>
              <S.ClientProperty style={{ height: '60px', border: 'dashed 2px', borderColor: '#ded6d6', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <input type="file" accept=".xls, .xlsx" ref={inputRef} onChange={onUploadFile} />
                <button type="submit">Upload</button>
              </S.ClientProperty>
            </>
          </>
        ) : (
          <>
            <div>속성 1 </div>
            <S.ClientProperty>230202 이후 가입한 사용자 </S.ClientProperty>
            <div>속성 2 </div>
            <S.ClientProperty> </S.ClientProperty>

            <Button title="+" buttonColor="black" borderRadius="10px" buttonSize="buttonS" isDisabled={true}></Button>
            <S.HeaderLayout>
              <h2>고객 DB 업로드</h2>
              <S.HeaderLayout>
                <Button title="양식 파일 다운로드" buttonColor="black" borderRadius="10px" isDisabled={true}></Button>
                <Button title="파일 재 업로드" buttonColor="black" borderRadius="10px" isDisabled={true}></Button>
              </S.HeaderLayout>
            </S.HeaderLayout>

            <S.ClientProperty style={{ height: '60px', border: 'solid 2px', borderColor: '#D3D3D3', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              230225고객모수SQL.xls{' '}
            </S.ClientProperty>
          </>
        )}
      </S.TaxtContainer>

      {modify ? (
        <></>
      ) : (
        <S.TaxtContainer>
          <h2>연결된 캠페인</h2>
          <S.ClientProperty style={{ height: '30px', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            첫구매 고객 웰컴 이벤트
            <Button title="캠페인 바로가기" buttonColor="black" borderRadius="10px"></Button>
          </S.ClientProperty>
        </S.TaxtContainer>
      )}
    </>
  );
};

export default ClientGroupDetail;
