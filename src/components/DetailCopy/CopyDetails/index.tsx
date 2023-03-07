import React from 'react';
import Button from '../../common/Button';
import { COPY_TYPE } from '../../CreateCopy/CreateCondition';
import * as S from './CopyDetail.stlyes';

const CopyDetails = () => {
  const isSelected = (title: string) => {
    return title === title;
  };

  return (
    <div>
      <S.Label>카피그룹명</S.Label>
      <S.GroupName>코카콜라 할인</S.GroupName>
      <S.Label>브랜드 이름</S.Label>
      <S.TextBox>
        <span>브랜드 이름</span>
      </S.TextBox>
      <S.Label>상품명</S.Label>
      <S.TextBox>
        <span>상품명</span>
      </S.TextBox>
      <S.Label>필수로 포함할 키워드</S.Label>
      <S.TextBox>
        <S.Keyword>키워드1</S.Keyword>
        <S.Keyword>키워드1</S.Keyword>
        <S.Keyword>키워드1</S.Keyword>
        <S.Keyword>키워드1</S.Keyword>
      </S.TextBox>
      <S.Label>유형</S.Label>
      <S.CopyTypeContainer>
        {COPY_TYPE.map((type) => (
          <S.CopyType isSelected={isSelected(type.title)} key={type.title}>
            {type.title}
          </S.CopyType>
        ))}
      </S.CopyTypeContainer>
      <S.FlexLayout>
        <div>
          <S.Label>생성수</S.Label>
          <S.DarkBox>
            <span>3</span>
          </S.DarkBox>
        </div>
        <div>
          <S.Label>글자수</S.Label>
          <S.DarkBox>
            <span>150</span>
          </S.DarkBox>
        </div>
      </S.FlexLayout>
      <S.CopySubmit>
        <Button title="카피 추천 받기" buttonSize="buttonL" buttonColor="black" />
      </S.CopySubmit>
    </div>
  );
};

export default CopyDetails;
