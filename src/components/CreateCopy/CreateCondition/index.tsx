import React, { useReducer, useState } from 'react';
import { CHEVRON } from '../../../assets';
import DropwDownList from '../DropDownList';
import LabelInput from '../LabelInput';
import * as S from './CreatCondition.styles';

export interface ConditionAction {
  type: 'CHANGE_INPUT' | 'CHANGE_TYPE' | 'CHANGE_LENGTH' | 'CHANGE_COUNT';
  key: 'copyGroupName' | 'tag' | 'brandName' | 'sector' | 'productName' | 'keyword' | 'type' | 'createCount' | 'copyLength';
  value: string;
}

export interface InitialState {
  copyGroupName: string;
  tag: string;
  brandName: string;
  sector: string;
  productName: string;
  keyword: string;
  createCount: string;
  copyLength: string;
  type: string;
}
const conditionReducer: React.Reducer<InitialState, ConditionAction> = (state, action) => {
  switch (action.type) {
    case 'CHANGE_INPUT':
      return { ...state, [action.key]: action.value };
    case 'CHANGE_TYPE':
      return { ...state, type: action.value };
    case 'CHANGE_LENGTH':
      return { ...state, copyLength: action.value };
    case 'CHANGE_COUNT':
      return { ...state, createCount: action.value };
  }
};

const initialState = {
  copyGroupName: '',
  tag: '',
  brandName: '',
  sector: '',
  productName: '',
  keyword: '',
  createCount: '3',
  copyLength: '100',
  type: '리뷰',
};

const COPY_TYPE = [{ title: '리뷰' }, { title: '홍보' }, { title: '질문' }, { title: '광고' }];
const COPY_COUNT = [{ title: '2' }, { title: '3' }, { title: '4' }, { title: '5' }];
const COPY_LENGTH = [{ title: '50' }, { title: '100' }, { title: '150' }, { title: '200' }];

const CreateCondition = () => {
  const [condition, conditionDispatch] = useReducer(conditionReducer, initialState);
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

  const disabeldSubmit = Object.values(condition).includes('');

  const isSelected = (title: string) => {
    return condition.type === title;
  };
  return (
    <div>
      <S.FlexLayout ratio="2fr 1fr">
        <LabelInput title="카피그룹명" limit={24} labelKey="copyGroupName" dispatch={conditionDispatch} condition={condition} />
        <LabelInput title="태그" limit={6} labelKey="tag" dispatch={conditionDispatch} condition={condition} />
      </S.FlexLayout>
      <LabelInput title="브랜드 이름" limit={24} labelKey="brandName" dispatch={conditionDispatch} condition={condition} />
      <LabelInput title="업종" limit={24} labelKey="sector" dispatch={conditionDispatch} condition={condition} />
      <LabelInput title="상품명" limit={30} labelKey="productName" dispatch={conditionDispatch} condition={condition} />
      <LabelInput
        title="필수로 포함할 키워드"
        limit={30}
        labelKey="keyword"
        dispatch={conditionDispatch}
        condition={condition}
        placeHolder="키워드를 ',' 으로 구분하여 입력해 주세요. ( 예시: 키워드1,키워드2 )"
      />
      <S.Label>유형</S.Label>
      <S.CopyTypeContainer>
        {COPY_TYPE.map((type) => (
          <S.CopyType isSelected={isSelected(type.title)} key={type.title} onClick={() => handleType(type.title)}>
            {type.title}
          </S.CopyType>
        ))}
      </S.CopyTypeContainer>
      <S.FlexLayout ratio="1fr 1fr">
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
        <button disabled={!disabeldSubmit}>카피 추천 받기</button>
      </S.CopySubmit>
    </div>
  );
};

export default CreateCondition;
