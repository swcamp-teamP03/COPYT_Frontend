import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { SVG } from '../../../../assets';
import { campaignConditionState } from '../../../../store/campaignConditionState';
import Button from '../../../common/Button';
import CopyGroupModal from '../../CopyGroupModal';
import MessageContainer from '../MessageContainer';
import * as S from './SelectCopy.stlyes';

const EXCLAMATION = ['단축 URL 생성시, URL 내 UV 트래킹 코드가 자동으로 심어집니다'];

const SelectCopy = () => {
  const [condition, setCondition] = useRecoilState(campaignConditionState);
  const [showCopyGroupModal, setShowCopyGroupModal] = useState(false);
  const [URL, setURL] = useState('');

  const handleCopyGroupModal = () => {
    setShowCopyGroupModal((prev) => !prev);
  };

  const onSubmitURL = () => {
    setCondition((prev) => ({
      ...prev,
      sendURL: URL,
    }));
  };

  const onDeleteURL = () => {
    setCondition((prev) => ({
      ...prev,
      sendURL: '',
    }));
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
        <Button buttonColor="blue" buttonSize="buttonM" title="카피 불러오기" onButtonClick={handleCopyGroupModal} />
      </S.FlexBox>
      <MessageContainer />
      <S.Title>
        발송 URL
        <span>*</span>
      </S.Title>
      <S.FlexBox>
        {condition.sendURL ? (
          <S.URLContaienr>
            <span>{condition.sendURL}</span>
            <S.CloseButton onClick={onDeleteURL}>{SVG.closeButton}</S.CloseButton>
          </S.URLContaienr>
        ) : (
          <S.URLInput placeholder="링크를 입력해 주세요." onChange={handleURLInput} value={URL} name="URL" />
        )}
        <Button title="단축 URL 생성" buttonColor="blue" buttonSize="buttonM" onButtonClick={onSubmitURL} />
      </S.FlexBox>
      {EXCLAMATION.map((text, idx) => (
        <S.Desc key={idx}>
          <div>{SVG.exclamation}</div>
          <span>{text}</span>
        </S.Desc>
      ))}
      <CopyGroupModal isOpen={showCopyGroupModal} handler={handleCopyGroupModal} />
    </>
  );
};

export default SelectCopy;
