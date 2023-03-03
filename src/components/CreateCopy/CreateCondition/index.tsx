import React, { Dispatch, useReducer, useState } from 'react';
import { CHEVRON, SVG } from '../../../assets';
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
  const [isComposing, setIsComposing] = useState(false);

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

  const removeKeyword = (keyword: string) => {
    conditionDispatch({ type: 'REMOVE_KEYWORD', key: 'keyword', value: keyword });
  };

  const addKeyword = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    if (isComposing) return;
    if (event.key === 'Enter' && value) {
      conditionDispatch({ type: 'ADD_KEYWORD', key: 'keyword', value });
      event.currentTarget.value = '';
    }
  };

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>, limite: number) => {
    const value = event.target.value.substring(0, limite - 1);
    const name = event.target.name;
    conditionDispatch({ type: 'CHANGE_INPUT', key: name, value });
  };

  return (
    <div>
      <LabelInput
        labelTitle="카피그룹명"
        limit={24}
        name="copyGroupName"
        onChange={(e) => handleInput(e, 24)}
        value={condition.copyGroupName}
        placeholder="그룹명을 입력해 주세요."
      />
      <LabelInput
        labelTitle="브랜드 이름"
        limit={24}
        name="brandName"
        onChange={(e) => handleInput(e, 24)}
        value={condition.brandName}
        placeholder="브랜드 이름을 입력해 주세요."
      />
      <LabelInput labelTitle="업종" limit={24} name="sector" onChange={(e) => handleInput(e, 24)} value={condition.sector} placeholder="업종을 입력해 주세요." />
      <LabelInput labelTitle="상품명" limit={30} name="productName" onChange={(e) => handleInput(e, 30)} value={condition.productName} placeholder="상품명을 입력해 주세요." />
      <LabelInput
        labelTitle="필수로 포함할 키워드"
        limit={30}
        name="keyword"
        onKeyUp={addKeyword}
        placeholder="키워드를 입력해 주세요. 최대 8개까지 등록 가능해요."
        onCompositionStart={() => setIsComposing(true)}
        onCompositionEnd={() => setIsComposing(false)}
        disabled={condition.keyword.length === 8}
      />
      <S.KeywordContainer>
        {condition.keyword &&
          condition.keyword.map((keyword) => (
            <S.KeywordTag key={keyword}>
              <span>{keyword}</span>
              <div onClick={() => removeKeyword(keyword)}>{SVG.closeButton}</div>
            </S.KeywordTag>
          ))}
      </S.KeywordContainer>
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
