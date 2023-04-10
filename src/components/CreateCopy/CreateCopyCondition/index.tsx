import React, { Dispatch, useState } from 'react';
import LabelInput from '../../common/LabelInput';
import { CopyConditionAction, CopyConditionInit } from './copyConditionReducer';
import * as S from './CreateCopyCondition.styles';
import Button from '../../common/Button';
import useCreateCopyMutation from '../../../quries/Copy/useCreateCopyMutation';
import { useRecoilState } from 'recoil';
import { copyListState } from '../../../store/copyListState';
import CopyCountLimitModal from '../LimitModal';
import DropDwown from '../../common/DropDown';
import { SVG } from '../../../assets';
import { CHEVRON } from '../../../assets/Chevron';
import Loading from '../../common/Loading';

const COPY_COUNT = [1, 2, 3, 4, 5];
const TARTGET_AGE = ['10대', '20대', '30대', '40대', '50대', '60대 이상', '구분없음'];
const TARGET_GENDER = ['여성', '남성', '구분없음'];
export const COPY_LENGTH = [{ title: '짧게' }, { title: '길게' }];

interface CreatConditionProps {
  condition: CopyConditionInit;
  conditionDispatch: Dispatch<CopyConditionAction>;
}

const CreateCondition = ({ condition, conditionDispatch }: CreatConditionProps) => {
  const [showCountDropDown, setShowCountDropDown] = useState(false);
  const [showAgeDropDown, setShowAgeDropDown] = useState(false);
  const [showGenderDropDwon, setShowGenderDropDown] = useState(false);
  const [copyList, setCopyList] = useRecoilState(copyListState);
  const [showLimitModal, setShowLimitModal] = useState(false);
  const [keyword, setKeyword] = useState('');
  const { mutate: createCopytMutate, isLoading } = useCreateCopyMutation({ copyList, setCopyList });

  const disabledCondition = Object.values(condition).includes('') || condition.keyword.length < 1;

  const handleCountDropDown = () => {
    setShowCountDropDown((prev) => !prev);
  };
  const handleAgeDropDown = () => {
    setShowAgeDropDown((prev) => !prev);
  };
  const handleGenderDropDown = () => {
    setShowGenderDropDown((prev) => !prev);
  };

  const removeKeyword = (keyword: string) => {
    conditionDispatch({ type: 'REMOVE_KEYWORD', key: 'keyword', value: keyword });
  };

  const addKeyword = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && keyword) {
      conditionDispatch({ type: 'ADD_KEYWORD', key: 'keyword', value: keyword });
      setKeyword('');
    }
  };

  const onChangeKeyword = (event: React.ChangeEvent<HTMLInputElement>, limite: number) => {
    const value = event.target.value.substring(0, limite);
    setKeyword(value);
  };

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>, limite: number) => {
    const value = event.target.value.substring(0, limite - 1);
    const name = event.target.name;
    conditionDispatch({ type: 'CHANGE_VALUE', key: name, value });
  };

  const changeAge = (value: string) => {
    conditionDispatch({ type: 'CHANGE_VALUE', key: 'targetAge', value });
  };
  const changeGender = (value: string) => {
    conditionDispatch({ type: 'CHANGE_VALUE', key: 'targetGender', value });
  };
  const changeCount = (value: number) => {
    conditionDispatch({ type: 'CHANGE_VALUE', key: 'createCount', value });
  };

  const changeType = (value: string) => {
    conditionDispatch({ type: 'CHANGE_VALUE', value, key: 'type' });
  };
  const isSelected = (title: string) => {
    return condition.type === title;
  };

  const handleLimitModal = () => {
    setShowLimitModal((prev) => !prev);
  };

  const handleSubmit = () => {
    if (copyList.length + Number(condition.createCount) > 20) {
      return handleLimitModal();
    }
    const { keyword } = condition;
    const keywordStr = keyword.join();
    createCopytMutate({ ...condition, keyword: keywordStr });
  };

  return (
    <div>
      {isLoading && <Loading />}
      <LabelInput
        labelTitle="카피그룹명"
        limit={24}
        name="copyGroupName"
        onChange={(e) => handleInput(e, 24)}
        value={condition.copyGroupName}
        placeholder="커피티 신메뉴 출시 이벤트 문구"
      />
      <LabelInput labelTitle="브랜드명" limit={24} name="brandName" onChange={(e) => handleInput(e, 24)} value={condition.brandName} placeholder="커피티" />
      <LabelInput labelTitle="상품 &middot; 서비스 카테고리" limit={24} name="sector" onChange={(e) => handleInput(e, 24)} value={condition.sector} placeholder="식품" />
      <LabelInput labelTitle="상품명" limit={30} name="productName" onChange={(e) => handleInput(e, 30)} value={condition.productName} placeholder="딸기 프라푸치노" />
      <LabelInput
        labelTitle="핵심 키워드"
        limit={30}
        name="keyword"
        onChange={(e) => onChangeKeyword(e, 30)}
        onKeyUp={addKeyword}
        value={keyword}
        placeholder="기간한정"
        desc={condition.keyword.length === 0 ? "키워드 입력 시, 'Enter key (엔터 키)'를 눌러 하나씩 추가해주세요!" : ''}
        disabled={condition.keyword.length === 8}
        hover="필수로 포함되어야하거나 핵심 내용을 담은 키워드를 입력해주세요!"
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
      <S.FlexLayout>
        <div>
          <S.Label>
            타겟 연령
            <span>*</span>
          </S.Label>
          <S.DropDownBox onClick={handleAgeDropDown}>
            <span>{condition.targetAge}</span>
            <div>{CHEVRON.down}</div>
            {showAgeDropDown && <DropDwown list={TARTGET_AGE} base={condition.targetAge} handler={changeAge} />}
          </S.DropDownBox>
        </div>
        <div>
          <S.Label>
            타겟 성별
            <span>*</span>
          </S.Label>
          <S.DropDownBox onClick={handleGenderDropDown}>
            <span>{condition.targetGender}</span>
            <div>{CHEVRON.down}</div>
            {showGenderDropDwon && <DropDwown list={TARGET_GENDER} base={condition.targetGender} handler={changeGender} />}
          </S.DropDownBox>
        </div>
      </S.FlexLayout>
      <S.FlexLayout>
        <div>
          <S.Label>
            문장 길이 <span>*</span>
          </S.Label>
          <S.CopyTypeContainer>
            {COPY_LENGTH.map((type) => (
              <S.CopyType isSelected={isSelected(type.title)} key={type.title} onClick={() => changeType(type.title)}>
                {type.title}
              </S.CopyType>
            ))}
          </S.CopyTypeContainer>
        </div>
        <div>
          <S.Label>
            카피 생성 수 <span>*</span>
          </S.Label>
          <S.DropDownBox onClick={handleCountDropDown}>
            <span>{condition.createCount}</span>
            <div>{CHEVRON.down}</div>
            {showCountDropDown && <DropDwown list={COPY_COUNT} base={condition.createCount} handler={changeCount} />}
          </S.DropDownBox>
        </div>
      </S.FlexLayout>
      <S.CopySubmit>
        <Button title="카피 추천 받기" isDisabled={disabledCondition} buttonSize="buttonL" buttonColor="blue" onButtonClick={handleSubmit} />
      </S.CopySubmit>
      <CopyCountLimitModal showLimitModal={showLimitModal} handleLimitModal={handleLimitModal} />
    </div>
  );
};

export default CreateCondition;
