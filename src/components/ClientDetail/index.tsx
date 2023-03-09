import React, { useState, useCallback, useRef } from 'react';
import { CLIENT_SVG } from '../../assets';
import * as S from './ClientGroupDetail';
import Button from '../common/Button';
import DeleteFileModal from '../ClientCreate/FileModal';
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

const ClientGroupDetail = () => {
  const [modify, setModify] = useState(false);
  const [fileName, setFileName] = useState('');
  const [properties, setProperties] = useState(['속성 1', '속성 2']);
  const [propertyCount, setPropertyCount] = useState(2);
  const [showModal, setShowModal] = useState(false);

  const ModifyHandler = () => {
    setModify(!modify);
  };

  const addProperty = () => {
    setPropertyCount((prevCount) => prevCount + 1);
    setProperties((prevProperties) => [...prevProperties, `속성 ${propertyCount + 1}`]);
  };

  //파일 업로드
  const inputRef = useRef<HTMLInputElement | null>(null);

  const onUploadFile = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return;
    }
    setFileName(e.target.files[0].name);
  }, []);

  const onUploadFileButtonClick = useCallback(() => {
    if (!inputRef.current) {
      return;
    }
    inputRef.current.click();
  }, []);

  //파일 삭제
  const deleteFile = () => {
    if (fileName && inputRef.current) {
      inputRef.current.value = '';
      setFileName('');
      setShowModal(false); // 파일 삭제 후 모달을 닫기
    }
  };

  const handleDeleteModal = () => {
    setShowModal(true); // 모달을 띄웁니다.
  };

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
          //수정되는 부분
          <>
            <>
              {properties.map((property, index) => (
                <div key={index}>
                  <div> {property}</div>
                  <S.ClientModifyProperty key={`${index}-prop`} type="text" />
                </div>
              ))}
              <S.PlusButtonLayout>
                <Button title="+" buttonColor="black" borderRadius="10px" buttonSize="buttonS" onButtonClick={addProperty}></Button>
              </S.PlusButtonLayout>
            </>

            <>
              <h2>고객 DB 업로드</h2>
              <S.PlusButtonLayout>
                <ReactExcelDownload />
                <label>
                  <Button title="파일 재업로드" buttonColor="black" borderRadius="10px" isDisabled={false} onButtonClick={onUploadFileButtonClick}></Button>
                </label>
              </S.PlusButtonLayout>

              <S.ClientProperty style={{ height: '60px', display: 'flex', alignItems: 'center' }}>
                <input id="input-file" type="file" accept=".xls, .xlsx" ref={inputRef} onChange={onUploadFile} style={{ display: 'none' }} />
                {fileName}
                <div onClick={handleDeleteModal}>x</div>
                {showModal && <DeleteFileModal showModal={showModal} handleDeleteModal={handleDeleteModal} />}
              </S.ClientProperty>
            </>
          </>
        ) : (
          //수정 안되는 부분
          <>
            <div>속성 1 </div>
            <S.ClientProperty>propertyValue :230202 이후 가입한 사용자 </S.ClientProperty>
            <div>속성 2 </div>
            <S.ClientProperty>propertyValue :230202 이후 가입한 사용자 </S.ClientProperty>

            <S.PlusButtonLayout>
              <Button title="+" buttonColor="black" borderRadius="10px" buttonSize="buttonS" isDisabled={true}></Button>
            </S.PlusButtonLayout>

            <h2>고객 DB 업로드</h2>
            <S.PlusButtonLayout>
              <Button title="양식 파일 다운로드" buttonColor="black" borderRadius="10px" isDisabled={true}></Button>
              <Button title="파일 재 업로드" buttonColor="black" borderRadius="10px" isDisabled={true}></Button>
            </S.PlusButtonLayout>

            <S.ClientProperty style={{ height: '60px', display: 'flex', alignItems: 'center' }}>
              <input id="input-file" type="file" accept=".xls, .xlsx" ref={inputRef} onChange={onUploadFile} style={{ display: 'none' }} />
              {fileName}
              <div onClick={handleDeleteModal}>x</div>
              {showModal && <DeleteFileModal showModal={showModal} handleDeleteModal={deleteFile} />}
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
