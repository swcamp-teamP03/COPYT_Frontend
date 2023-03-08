import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { campaignConditionState } from '../../../../store/campaignConditionState';
import Button from '../../../common/Button';
import CopyGroupModal from '../../CopyGroupModal';
import MessageContainer from '../MessageContainer';
import * as S from './SelectCopy.stlyes';

const SelectCopy = () => {
  const [condition, setCondition] = useRecoilState(campaignConditionState);
  const [showCopyGroupModal, setShowCopyGroupModal] = useState(true);
  const [URL, setURL] = useState('');

  const handleCopyGroupModal = () => {
    setShowCopyGroupModal((prev) => !prev);
  };

  const handleURLInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setURL(event.target.value);
  };

  return (
    <>
      <S.FlexBox>
        <S.Title>
          카피 선택
          <span>*</span>
        </S.Title>
        <Button buttonColor="black" buttonSize="buttonM" title="카피 불러오기" onButtonClick={handleCopyGroupModal} />
      </S.FlexBox>
      <MessageContainer />
      <S.Title>
        메시지 발송 URL
        <span>*</span>
      </S.Title>
      <S.FlexBox>
        <S.URLInput placeholder="링크를 입력해 주세요." onChange={handleURLInput} value={URL} name="URL" />
        <Button title="단축 URL 생성" buttonColor="black" buttonSize="buttonM" />
      </S.FlexBox>
      <CopyGroupModal isOpen={showCopyGroupModal} handler={handleCopyGroupModal} />
    </>
  );
};

export default SelectCopy;
