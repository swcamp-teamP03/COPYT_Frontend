import React, { useState } from 'react';
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

  const handleCountDropDown = () => {
    setShowCountDropDown((prev) => !prev);
  };

  // const handleAddGroup = () => {
  //   const requestBody = JSON.stringify({
  //     groupName,
  //     extractStart,
  //     extractEnd,
  //     property,
  //     fileOrgName,
  //   });

  //   fetch('https://52ee0db7-7c10-449a-b3f4-0bda5fff30a1.mock.pstmn.io/groups', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: requestBody,
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // };

  return (
    <>
      <S.HeaderLayout>
        <h1>고객 그룹 상세</h1>
        <Button title="수정" buttonColor="black" borderRadius="10px"></Button>
      </S.HeaderLayout>
      <S.HeaderLayout>
        <h2>고객 그룹 정보</h2>
        <p>2024러알날짜</p>
      </S.HeaderLayout>

      <S.TaxtContainer>
        <h3>고객 그룹명</h3>
        <div>첫구매 고객 웰컴 이벤트 </div>
      </S.TaxtContainer>
      <S.TaxtContainer>
        <h3>고객 속성</h3>
        <div>{CLIENT_SVG.highlight} 고객 DB의 데이터 속성(목표)을 입력해주세요. 입력한 속성은 고객 DB에 영향을 미치지 않으며, 데이터 정보 확인용으로만 활용됩니다. </div>
        <div>속성1 </div>
        <div>속성2 </div>
      </S.TaxtContainer>
      <S.HeaderLayout>
        <h3>고객 DB 업로드</h3>
        <S.HeaderLayout>
          <Button title="양식 파일 다운로드" buttonColor="black" borderRadius="10px"></Button>
          <Button title="파일 재 업로드" buttonColor="black" borderRadius="10px"></Button>{' '}
        </S.HeaderLayout>
      </S.HeaderLayout>
      <S.TaxtContainer>
        <div>230225고객모수SQL.xls </div>
      </S.TaxtContainer>
      <S.TaxtContainer>
        <h3>연결된 캠페인</h3>
        <div>230225고객모수SQL.xls </div>
      </S.TaxtContainer>
    </>
  );
};

export default ClientGroupDetail;
