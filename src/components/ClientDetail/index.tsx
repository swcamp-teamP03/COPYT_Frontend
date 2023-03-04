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
      </S.HeaderLayout>

      <S.TaxtInnerContainer>
        <S.TaxtContainer>
          <h3>고객 그룹명</h3>
          <S.ClientProperty>첫구매 고객 웰컴 이벤트 </S.ClientProperty>
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
        <div>속성 1 </div>
        <S.ClientProperty>230202 이후 가입한 사용자</S.ClientProperty>
        <div>속성 2 </div>
        <S.ClientProperty></S.ClientProperty>

        <Button title="+" buttonColor="black" borderRadius="10px" buttonSize="buttonS" isDisabled={true}></Button>
      </S.TaxtContainer>

      <S.HeaderLayout>
        <h2>고객 DB 업로드</h2>
        <S.HeaderLayout>
          <Button title="양식 파일 다운로드" buttonColor="black" borderRadius="10px" isDisabled={true}></Button>
          <Button title="파일 재 업로드" buttonColor="black" borderRadius="10px" isDisabled={true}></Button>
        </S.HeaderLayout>
      </S.HeaderLayout>
      <S.TaxtContainer>
        <S.ClientProperty style={{ height: '60px', border: 'solid 2px', borderColor: '#D3D3D3', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          230225고객모수SQL.xls{' '}
        </S.ClientProperty>
      </S.TaxtContainer>

      <S.TaxtContainer>
        <h2>연결된 캠페인</h2>
        <S.ClientProperty style={{ height: '30px', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          첫구매 고객 웰컴 이벤트 <Button title="캠페인 바로가기" buttonColor="black" borderRadius="10px"></Button>
        </S.ClientProperty>
      </S.TaxtContainer>
    </>
  );
};

export default ClientGroupDetail;
