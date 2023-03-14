import React, { useState, useCallback, useRef, useEffect } from 'react';
import { CLIENT_SVG } from '../../assets';
import * as S from './ClientGroupDetail';
import Button from '../common/Button';
import ReactExcelDownload from '../common/XLSX';
import DownloadModal from './DownloadModal';
import useClientDetailQuery from '../../quries/Client/useClientDetailQuery';
import { useParams } from 'react-router-dom';
import { putClientEdit } from '../../api/client/create';

type Property = {
  propertyValue: string;
};

const defaultProperties: Property[] = [
  {
    propertyValue: '속성 1',
  },
  {
    propertyValue: '속성 2',
  },
  {
    propertyValue: '속성 3',
  },
];

const ClientGroupDetail = () => {
  const [modify, setModify] = useState(false);
  const [fileName, setFileName] = useState('');
  const [propertyCount, setPropertyCount] = useState<number>(0);
  const [properties, setProperties] = useState<string[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [groupName, setGroupName] = useState('');

  const { id } = useParams();

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
    setProperties((prevProperties) => [...prevProperties, `속성 ${propertyCount + 1}`]);
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
    //그룹이름
    formData.append('groupName', groupName);

    //속성 값
    properties.forEach((property, index) => {
      formData.append(`properties[${index}].propertyValue`, property);
    });

    try {
      const { data }: any = await putClientEdit({ id, formData });
      console.log(data);
    } catch (err) {}
  };

  console.log(clientDetail);

  return (
    <>
      <S.HeaderLayout>
        <h1>고객 그룹 상세</h1>
        {!clientDetail?.campaigns && (
          <>
            {modify ? (
              <Button title="저장" buttonColor="blue" borderRadius="10px" onButtonClick={ModifyHandler} />
            ) : (
              <Button title="수정" buttonColor="blue" borderRadius="10px" onButtonClick={ModifyHandler} />
            )}
          </>
        )}
      </S.HeaderLayout>
      <S.HeaderLayout>
        <h2>고객 그룹 정보</h2>
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
                  <span>속성{index + 1}</span>
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
                <Button title="+" buttonColor="blue" borderRadius="10px" buttonSize="buttonS" onButtonClick={addProperty}></Button>
              </S.PlusButtonLayout>
            </>

            <>
              <h2>고객 DB 업로드</h2>
              <S.PlusButtonLayout>
                <ReactExcelDownload />
                <Button title="파일 재 업로드" buttonColor="blue" borderRadius="10px" isDisabled={false}></Button>
              </S.PlusButtonLayout>

              <S.ClientProperty style={{ height: '60px', display: 'flex', alignItems: 'center' }}>
                <span>{clientDetail?.excelFile.excelFileName}</span>
                <span>{clientDetail?.excelFile.excelUploadTime}</span>
                <span>{clientDetail?.excelFile.customerCnt}</span>
                <span>{clientDetail?.excelFile.excelFileSize}</span>
                <span onClick={handleDownloadClick}>{CLIENT_SVG.download}</span>
              </S.ClientProperty>
            </>
          </>
        ) : (
          //수정 안되는 부분
          <>
            <div>속성 1 </div>
            <S.ClientProperty>{clientDetail?.customerProperties[0]?.propertyValue} </S.ClientProperty>

            <div>속성 2 </div>
            <S.ClientProperty>{clientDetail?.customerProperties[1]?.propertyValue} </S.ClientProperty>

            <S.PlusButtonLayout>
              <Button title="+" buttonColor="blue" borderRadius="10px" buttonSize="buttonS" isDisabled={true}></Button>
            </S.PlusButtonLayout>

            <h2>고객 DB 업로드</h2>
            <S.PlusButtonLayout>
              <Button title="양식 파일 다운로드" buttonColor="blue" borderRadius="10px" isDisabled={true}></Button>
              <Button title="파일 재 업로드" buttonColor="blue" borderRadius="10px" isDisabled={true}></Button>
            </S.PlusButtonLayout>

            <S.ClientProperty style={{ height: '60px', display: 'flex', alignItems: 'center' }}>
              <span>{clientDetail?.excelFile.excelFileName}</span>
              <span>{clientDetail?.excelFile.excelUploadTime}</span>
              <span>{clientDetail?.excelFile.customerCnt}</span>
              <span>{clientDetail?.excelFile.excelFileSize}</span>
              <span onClick={handleDownloadClick}>{CLIENT_SVG.download}</span>
              {showModal && <DownloadModal show={showModal} onClose={() => setShowModal(false)} />}
            </S.ClientProperty>
          </>
        )}
      </S.TaxtContainer>
      <S.TaxtContainer>
        <h2>연결된 캠페인</h2>
        {clientDetail?.campaigns ? (
          <>
            {/* {clientDetail.campaigns.map((list) => (
              <S.ClientProperty style={{ height: '30px', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }} key={list.campaignName}>
                {list.campaignName}
                <Button title="캠페인 바로가기" buttonColor="blue" borderRadius="10px"></Button>
              </S.ClientProperty>
            ))} */}
          </>
        ) : (
          <S.ClientProperty style={{ height: '30px', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            연결된 캠페인이 없습니다. 캠페인에 활용된 고객그룹은 수정이 불가합니다.
          </S.ClientProperty>
        )}
      </S.TaxtContainer>
    </>
  );
};

export default ClientGroupDetail;
