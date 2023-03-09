import React, { useState, useCallback, useRef } from 'react';
import { CLIENT_SVG } from '../../assets';
import * as S from './ClientGroupCreate';
import Button from '../common/Button';
import ReactExcelDownload from '../common/XLSX';
import PageHeader from '../common/PageHeader';
import { useNavigate } from 'react-router-dom';
import DeleteFileModal from './FileModal';
import LabelInput from '../common/LabelInput';

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
  const [fileName, setFileName] = useState('');
  const [properties, setProperties] = useState(['속성 1', '속성 2']);
  const [propertyCount, setPropertyCount] = useState(2);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

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
      <PageHeader
        buttonTitle="등록"
        buttonSize="buttonM"
        onClick={() => {
          navigate('/clients');
        }}
      >
        고객 그룹 리스트
      </PageHeader>

      <S.TaxtInnerContainer>
        <LabelInput labelTitle="고객 그룹명" limit={24} name="clientGroupName" placeholder="고객 그룹을 입력해 주세요" />
      </S.TaxtInnerContainer>

      <S.TaxtContainer>
        <span>고객 속성</span>
        <S.PropertyHighlight>
          {CLIENT_SVG.highlight} &nbsp; &nbsp;고객 DB의 데이터 속성(목표)을 입력해주세요. 입력한 속성은 고객 DB에 영향을 미치지 않으며, 데이터 정보 확인용으로만 활용됩니다.
        </S.PropertyHighlight>
        <>
          {properties.map((property, index) => (
            <div key={index}>
              {property}
              <S.ClientModifyProperty key={`${index}-prop`} type="text" />
            </div>
          ))}
          <S.HeaderLayout>
            <Button title="+" buttonColor="black" borderRadius="10px" buttonSize="buttonS" onButtonClick={addProperty}></Button>
          </S.HeaderLayout>
        </>

        <div>
          고객 DB 업로드
          <S.HeaderLayout>
            <ReactExcelDownload />
            <label>
              <Button title="고객 DB 업로드" buttonColor="black" borderRadius="10px" isDisabled={false} onButtonClick={onUploadFileButtonClick}></Button>
            </label>
          </S.HeaderLayout>
        </div>

        {fileName ? (
          <S.ClientProperty style={{ height: '60px', display: 'flex', alignItems: 'center' }}>
            <input id="input-file" type="file" accept=".xls, .xlsx" ref={inputRef} onChange={onUploadFile} style={{ display: 'none' }} />
            {fileName}
            <div onClick={handleDeleteModal}>x</div>
            {showModal && <DeleteFileModal showModal={showModal} handleDeleteModal={deleteFile} />} {/* 모달을 열면서 handleDeleteModal 대신 deleteFile 함수를 넘깁니다. */}
          </S.ClientProperty>
        ) : (
          <S.ClientProperty style={{ height: '60px', border: 'dashed 2px', borderColor: '#ded6d6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <input id="input-file" type="file" accept=".xls, .xlsx" ref={inputRef} onChange={onUploadFile} style={{ display: 'none' }} />
            고객 데이터 파일을 업로드 해주세요. *업로드 가능 확장자 : .xls
          </S.ClientProperty>
        )}
      </S.TaxtContainer>
    </>
  );
};

export default ClientGroupCreate;
