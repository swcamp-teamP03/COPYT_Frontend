import React, { useState, useCallback, useRef, useEffect } from 'react';
import { CLIENT_SVG } from '../../assets';
import * as S from './ClientGroupDetail';
import Button from '../common/Button';
import ReactExcelDownload from '../common/XLSX';
import DownloadModal from './DownloadModal';
import useClientDetailQuery from '../../quries/Client/useClientDetailQuery';
import { useNavigate, useParams } from 'react-router-dom';
import { putClientEdit } from '../../api/client/create';
import DeleteFileModal from './DeleteModal';
('');
type Property = {
  propertyValue: string;
};

const defaultProperties: Property[] = [
  {
    propertyValue: '메모 1',
  },
  {
    propertyValue: '메모 2',
  },
];

const ClientGroupDetail = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [modify, setModify] = useState(false);
  const [fileName, setFileName] = useState('');
  const [propertyCount, setPropertyCount] = useState<number>(0);
  const [properties, setProperties] = useState<string[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [groupName, setGroupName] = useState('');
  const [deleteModal, setDeleteModal] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const { id } = useParams();
  const navigate = useNavigate();

  const { data: clientDetail } = useClientDetailQuery(id);

  const ModifyHandler = () => {
    setModify(!modify);
    if (modify) {
      submitForm();
    }
  };

  useEffect(() => {
    if (!clientDetail) return;
    if (clientDetail?.customerProperties) {
      const initialProperties = clientDetail?.customerProperties.map(({ propertyValue }) => propertyValue);
      setProperties(initialProperties);
    } else {
      setProperties(defaultProperties.map(({ propertyValue }) => propertyValue));
    }
    setGroupName(clientDetail.groupName);
    setFileName(clientDetail.excelFile.excelFileName);
  }, [clientDetail]);

  const addProperty = () => {
    setPropertyCount((prevCount) => prevCount + 1);
    setProperties((prevProperties) => [...prevProperties, `메모 ${propertyCount + 1}`]);
  };

  const onUploadFile = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return;
    }
    const file = e.target.files[0];
    const extension = file.name.split('.').pop()?.toLowerCase();
    setSelectedFile(file);
    setFileName(file.name);

    if (extension === 'xls' || extension === 'xlsx') {
      setFileName(file.name);
      // 파일 업로드 처리 로직
    } else {
      alert('파일이 xls 또는 xlsx 인지 확인해 주세요');
    }
  }, []);

  const onUploadFileButtonClick = useCallback(() => {
    if (!inputRef.current) {
      return;
    }
    inputRef.current.click();
  }, []);

  const deleteFile = () => {
    formData.delete('file');
    setFileName('');
    setDeleteModal(false);
  };

  const handleDeleteModal = () => {
    setDeleteModal(true);
  };

  //파일 다운로드
  const handleDownloadClick = () => {
    setShowModal(true);
  };

  //전송 데이터
  const formData = new FormData();

  const handlNameChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setGroupName(e.target.value);
  }, []);

  const submitForm = async () => {
    //파일
    if (selectedFile) {
      formData.append('file', selectedFile);
    }

    //그룹이름
    formData.append('groupName', groupName);

    //속성 값
    properties.forEach((property, index) => {
      formData.append(`properties[${index}].propertyValue`, property);
    });

    try {
      const { data }: any = await putClientEdit({ id, formData });
    } catch (err) {}
  };

  const handleGoCampaigns = (campaignId: number) => {
    navigate(`/campaign/${campaignId}`);
  };

  return (
    <S.Layout>
      <S.HeaderLayout>
        <h1>고객 그룹 상세</h1>
        <>
          {clientDetail && clientDetail.campaigns && clientDetail.campaigns.length > 0 ? null : (
            <Button title={modify ? '저장' : '수정'} buttonColor="blue" borderRadius="10px" onButtonClick={ModifyHandler} />
          )}
        </>
      </S.HeaderLayout>
      <S.TaxtInnerContainer>
        <S.TaxtContainer>
          <h3>고객 그룹명</h3>
          {modify ? <S.ClientModifyProperty value={groupName} onChange={handlNameChange} type="text" /> : <S.ClientProperty>{clientDetail?.groupName} </S.ClientProperty>}
        </S.TaxtContainer>
        <S.TaxtContainer>
          <h3>그룹 생성일</h3>
          <div>{clientDetail?.createdAt} </div>
        </S.TaxtContainer>
      </S.TaxtInnerContainer>
      <S.TaxtContainer>
        <h3>타겟 목표 및 메모</h3>
        <S.PropertyHighlight>
          {CLIENT_SVG.highlight} &nbsp; &nbsp;고객 DB의 데이터 속성(목표)을 입력해주세요. 입력한 속성은 고객 DB에 영향을 미치지 않으며, 데이터 정보 확인용으로만 활용됩니다.
        </S.PropertyHighlight>
        {modify ? (
          //수정되는 부분
          <>
            <>
              {properties.map((property, index) => (
                <div key={index} style={{ display: 'flex', flexDirection: 'column' }}>
                  <span>메모 {index + 1}</span>
                  <S.ClientModifyProperty
                    type="text"
                    value={property}
                    onChange={(event) => {
                      const newValue = event.target.value;
                      setProperties((prevProperties) => [...prevProperties.slice(0, index), newValue, ...prevProperties.slice(index + 1)]);
                    }}
                  />
                </div>
              ))}
              <S.PlusButtonLayout>
                <Button title="+" buttonColor="blue" borderRadius="10px" buttonSize="buttonS" onButtonClick={addProperty} />
              </S.PlusButtonLayout>
            </>

            <>
              <S.SubTitle>
                <h3>고객 DB 업로드</h3>
                <S.PlusButtonLayout>
                  <ReactExcelDownload />
                  <Button title="파일 재 업로드" buttonColor="blue" borderRadius="10px" isDisabled={false} onButtonClick={onUploadFileButtonClick} />
                </S.PlusButtonLayout>
              </S.SubTitle>

              <S.ClientProperty style={{ height: '60px', display: 'flex', alignItems: 'center' }}>
                {fileName ? (
                  <>
                    {fileName} <div onClick={handleDeleteModal}>x</div>
                    {deleteModal && <DeleteFileModal deleteModal={deleteModal} handleDeleteModal={deleteFile} />}
                  </>
                ) : (
                  <>
                    <span>{clientDetail?.excelFile.excelFileName}</span>
                    <span>{clientDetail?.excelFile.excelUploadTime}</span>
                    <span>{clientDetail?.excelFile.customerCnt}</span>
                    <span>{clientDetail?.excelFile.excelFileSize}</span>
                    <span style={{ cursor: 'pointer' }} onClick={handleDownloadClick}>
                      {CLIENT_SVG.download}
                    </span>
                  </>
                )}
                <input className="input-file" type="file" accept=".xls, .xlsx" ref={inputRef} onChange={onUploadFile} style={{ display: 'none' }} />
              </S.ClientProperty>
            </>
          </>
        ) : (
          //수정 안되는 부분
          <>
            {clientDetail?.customerProperties.map((property, index) => (
              <div key={index}>
                <div>메모 {index + 1}</div>
                <S.ClientProperty>{property?.propertyValue}</S.ClientProperty>
              </div>
            ))}

            <S.PlusButtonLayout>
              <Button title="+" buttonColor="blue" borderRadius="10px" buttonSize="buttonS" isDisabled={true}></Button>
            </S.PlusButtonLayout>

            <S.SubTitle>
              <h3>고객 DB 업로드</h3>
              <S.PlusButtonLayout>
                <ReactExcelDownload />
                <Button title="파일 재 업로드" buttonColor="blue" borderRadius="10px" isDisabled={true} onButtonClick={onUploadFileButtonClick} />
              </S.PlusButtonLayout>
            </S.SubTitle>

            <S.ClientProperty style={{ height: '60px', paddingRight: '50px' }} color="blue">
              <span>{clientDetail?.excelFile.excelFileName}</span>
              <span>{clientDetail?.excelFile.excelUploadTime}</span>
              <span>{clientDetail?.excelFile.customerCnt}</span>
              <span>{clientDetail?.excelFile.excelFileSize}</span>
              <span style={{ cursor: 'pointer' }} onClick={handleDownloadClick}>
                {CLIENT_SVG.download}
              </span>
              {showModal && <DownloadModal show={showModal} onClose={() => setShowModal(false)} />}
            </S.ClientProperty>
          </>
        )}
      </S.TaxtContainer>
      <S.TaxtContainer>
        <h3>연결된 캠페인</h3>
        {clientDetail && clientDetail.campaigns && clientDetail.campaigns.length > 0 ? (
          <>
            {clientDetail.campaigns.map((list) => (
              <S.ClientProperty color="blue" style={{ height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }} key={list.campaignId}>
                {list.campaignName}
                <Button title="캠페인 바로가기" buttonColor="blue" borderRadius="10px" onButtonClick={() => handleGoCampaigns(list.campaignId)}></Button>
              </S.ClientProperty>
            ))}
          </>
        ) : (
          <S.ClientProperty style={{ height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            연결된 캠페인이 없습니다. 캠페인에 활용된 고객그룹은 수정이 불가합니다.
          </S.ClientProperty>
        )}
      </S.TaxtContainer>
    </S.Layout>
  );
};

export default ClientGroupDetail;
