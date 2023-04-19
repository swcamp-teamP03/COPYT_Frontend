import React, { useState, useCallback, useRef } from 'react';
import { CLIENT_SVG } from '../../assets';
import * as S from './ClientGroupCreate';
import Button from '../common/Button';
import ReactExcelDownload from '../common/XLSX';
import PageHeader from '../common/PageHeader';
import DeleteFileModal from './FileModal';
import LabelInput from '../common/LabelInput';
import PreventModal from '../PreventModal';
import { useRecoilState } from 'recoil';
import { clientListState } from '../../store/clientListState';
import useCreatClientMutation from '../../quries/Client/useCreateClientMutation';
import useBeforeunload from '../../hooks/useBeforunload';

const ClientGroupCreate = ({}) => {
  const [fileName, setFileName] = useState('');
  const [properties, setProperties] = useState(['메모 1', '메모 2']);
  const [propertyCount, setPropertyCount] = useState(2);
  const [showModal, setShowModal] = useState(false);
  const [groupName, setGroupName] = useState('');
  const [showPreventModal, setShowPreventModal] = useState(false);
  const [clientList, setClientList] = useRecoilState(clientListState);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  // useBeforeunload({ showPreventModal, setShowPreventModal });

  const { mutate: createClientMutate } = useCreatClientMutation();

  const handlePrevnetModal = () => {
    setShowPreventModal((prev) => !prev);
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
    const file = e.target.files[0];
    setSelectedFile(file);
    setFileName(file.name);
  }, []);

  const onUploadFileButtonClick = useCallback(() => {
    if (!inputRef.current) {
      return;
    }
    inputRef.current.click();
  }, []);

  //파일 삭제
  const deleteFile = () => {
    formData.delete('file');
    setFileName('');
    setShowModal(false);
  };

  const handleDeleteModal = () => {
    setShowModal(true);
  };
  //작성 등록
  const formData = new FormData();

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setGroupName(e.target.value);
  }, []);

  console.log(selectedFile);

  const submitForm = async () => {
    //파일
    if (selectedFile) {
      formData.append('file', selectedFile);
    }

    //그룹이름
    formData.append('groupName', groupName);
    setClientList((prevClientList) => [...prevClientList, { groupName }]);

    //파일이름
    formData.append('fileOrgName', fileName);

    //속성 값
    properties.forEach((property, index) => {
      formData.append(`properties[${index}].propertyValue`, property);
    });

    createClientMutate(formData);
  };

  return (
    <S.Layout>
      <PageHeader buttonTitle="등록" buttonSize="buttonM" onClick={submitForm}>
        고객 그룹 생성
      </PageHeader>
      <S.TaxtInnerContainer>
        <LabelInput
          labelTitle="고객 그룹명"
          limit={24}
          name="clientGroupName"
          placeholder="고객 그룹을 입력해 주세요"
          onChange={handleChange}
          labelFontSize="20px"
          labelFontWeight="500"
        />
      </S.TaxtInnerContainer>

      <S.TaxtContainer>
        <h3>타겟 목표 및 메모</h3>
        <S.PropertyHighlight>
          {CLIENT_SVG.highlight} &nbsp; &nbsp;고객 DB의 데이터 속성(목표)을 입력해주세요. 입력한 속성은 고객 DB에 영향을 미치지 않으며, 데이터 정보 확인용으로만 활용됩니다.
        </S.PropertyHighlight>
        <>
          {properties.map((property, index) => (
            <div key={index}>
              <span>메모 {index + 1} </span>
              <S.ClientModifyProperty
                type="text"
                placeholder={property}
                onChange={(event) => {
                  const newValue = event.target.value;
                  setProperties((prevProperties) => [...prevProperties.slice(0, index), newValue, ...prevProperties.slice(index + 1)]);
                }}
              />
            </div>
          ))}
          <S.HeaderLayout>
            <Button title="+" buttonColor="blue" borderRadius="10px" buttonSize="buttonS" onButtonClick={addProperty}></Button>
          </S.HeaderLayout>
        </>

        <S.FlexBox>
          <h3>
            고객 DB 업로드
            <span style={{ color: 'red' }}>*</span>
          </h3>
          <S.HeaderLayout>
            <ReactExcelDownload />
            <label>
              <Button title="고객 DB 업로드" buttonColor="blue" borderRadius="10px" isDisabled={false} onButtonClick={onUploadFileButtonClick}></Button>
            </label>
          </S.HeaderLayout>
        </S.FlexBox>

        {fileName ? (
          <S.ClientProperty style={{ height: '60px', display: 'flex', alignItems: 'center' }}>
            <>
              <input className="input-file" type="file" accept=".xls, .xlsx" ref={inputRef} onChange={onUploadFile} style={{ display: 'none' }} />
              {fileName}
            </>
            <div onClick={handleDeleteModal}>X</div>
            {showModal && <DeleteFileModal showModal={showModal} handleDeleteModal={deleteFile} />} {/* 모달을 열면서 handleDeleteModal 대신 deleteFile 함수를 넘깁니다. */}
          </S.ClientProperty>
        ) : (
          <S.ClientProperty style={{ height: '60px', border: 'dashed 2px', borderColor: '#ded6d6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <>
              <input className="input-file" type="file" accept=".xls, .xlsx" ref={inputRef} onChange={onUploadFile} style={{ display: 'none' }} />
              고객 데이터 파일을 업로드 해주세요. *업로드 가능 확장자 : .xls, .xlsx
            </>
          </S.ClientProperty>
        )}
      </S.TaxtContainer>
      <PreventModal isOpen={showPreventModal} handleModal={handlePrevnetModal} />
    </S.Layout>
  );
};

export default ClientGroupCreate;
