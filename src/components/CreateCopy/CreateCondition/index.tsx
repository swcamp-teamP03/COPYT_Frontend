import React, { Dispatch, useReducer, useState } from 'react';
import { CHEVRON } from '../../../assets';
import DropwDownList from '../DropDownList';
import LabelInput from '../../common/LabelInput';
import { ConditionAction, ConditionInit } from './conditionReducer';
import * as S from './CreatCondition.styles';

const COPY_TYPE = [{ title: '리뷰' }, { title: '홍보' }, { title: '질문' }, { title: '광고' }];
const COPY_COUNT = ['2', '3', '4', '5'];
const COPY_LENGTH = ['70', '200', '300', '1000'];

interface CreatConditionProps {
  condition: ConditionInit;
  conditionDispatch: Dispatch<ConditionAction>;
  disabledCondition: boolean;
}

const CreateCondition = ({ condition, conditionDispatch, disabledCondition }: CreatConditionProps) => {
  const [showCountDropDown, setShowCountDropDown] = useState(false);
  const [showLengthDropDown, setShowLengthDropDown] = useState(false);

  const handleType = (value: string) => {
    conditionDispatch({ type: 'CHANGE_TYPE', value, key: 'type' });
  };

  const handleCountDropDown = () => {
    setShowCountDropDown((prev) => !prev);
  };
  const handleLengthDropDown = () => {
    setShowLengthDropDown((prev) => !prev);
  };

  const isSelected = (title: string) => {
    return condition.type === title;
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    conditionDispatch({ type: 'CHANGE_INPUT', key: name, value });
  };

  return (
    <div>
      <LabelInput labelTitle="카피그룹명" limit={24} name="copyGroupName" onChange={handleInput} />
      <LabelInput labelTitle="브랜드 이름" limit={24} name="brandName" onChange={handleInput} />
      <LabelInput labelTitle="업종" limit={24} name="sector" onChange={handleInput} />
      <LabelInput labelTitle="상품명" limit={30} name="productName" onChange={handleInput} />
      <LabelInput
        labelTitle="필수로 포함할 키워드"
        limit={30}
        name="keyword"
        onChange={handleInput}
        placeholder="키워드를 ',' 으로 구분하여 입력해 주세요. ( 예시: 키워드1,키워드2 )"
      />
      <S.Label>유형</S.Label>
      <S.CopyTypeContainer>
        {COPY_TYPE.map((type) => (
          <S.CopyType isSelected={isSelected(type.title)} key={type.title} onClick={() => handleType(type.title)}>
            {type.title}
          </S.CopyType>
        ))}
      </S.CopyTypeContainer>
      <S.FlexLayout>
        <div>
          <S.Label>
            생성수 <span>*</span>
          </S.Label>
          <S.DropDownBox onClick={handleCountDropDown}>
            <span>{condition.createCount}</span>
            <div>{CHEVRON.down}</div>
            {showCountDropDown && <DropwDownList list={COPY_COUNT} dispatch={conditionDispatch} onClose={handleCountDropDown} type="CHANGE_COUNT" />}
          </S.DropDownBox>
        </div>
        <div>
          <S.Label>
            글자수 <span>*</span>
          </S.Label>
          <S.DropDownBox onClick={handleLengthDropDown}>
            <span>{condition.copyLength}</span>
            <div>{CHEVRON.down}</div>
            {showLengthDropDown && <DropwDownList list={COPY_LENGTH} dispatch={conditionDispatch} onClose={handleLengthDropDown} type="CHANGE_LENGTH" />}
          </S.DropDownBox>
        </div>
      </S.FlexLayout>
      <S.CopySubmit>
        <button disabled={disabledCondition}>카피 추천 받기</button>
      </S.CopySubmit>
    </div>
  );
};

export default CreateCondition;