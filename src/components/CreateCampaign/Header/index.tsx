import dayjs from 'dayjs';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { CHEVRON } from '../../../assets/Chevron';
import { POST_SVG } from '../../../assets/Post';
import useCreateCampaignMutation from '../../../quries/Campaign/useCreateCampaignMutation';
import { campaignConditionState } from '../../../store/campaignConditionState';
import Button from '../../common/Button';
import CampaignSubmitModal from '../SubmitModal';
import TestSubmitModal from '../TestSubmitModal';
import * as S from './Header.styles';

const Header = () => {
  const [condition, setCondition] = useRecoilState(campaignConditionState);
  const [showSubmitModal, setShowSubmitModal] = useState(false);
  const [showTestSubmitModal, setShowTestSubmitModal] = useState(false);

  const [title, setTitle] = useState('새 캠페인' + `${dayjs().format('YYMMDD')}`);
  const [editMode, setEditMode] = useState(false);
  const navigate = useNavigate();

  const { mutate: createMutate } = useCreateCampaignMutation(setShowTestSubmitModal);
  const handleEditMode = () => {
    setEditMode((prev) => !prev);
  };

  const handleSubmitModal = () => {
    setShowSubmitModal((prev) => !prev);
  };
  const handleTestSubmitModal = () => {
    setShowTestSubmitModal((prev) => !prev);
  };

  const handleTitleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const onSaveCampaignName = () => {
    setCondition((prev) => ({
      ...prev,
      campaignName: title,
    }));
    handleEditMode();
  };

  const onSubmit = () => {
    handleSubmitModal();
  };

  const goBack = () => {
    navigate('/campaign');
  };

  const onClickTest = () => {
    createMutate({ ...condition, sendingDate: null });
  };

  const isDisabledSumbit = () => {
    if (condition.abTest) {
      return Object.values(condition).includes('') || condition.messageOver;
    } else {
      return (
        Object.entries(condition)
          .filter((list) => list[0] !== 'messageB')
          .flat()
          .includes('') || condition.messageOver
      );
    }
  };

  return (
    <>
      <S.Fixed>
        <S.Flex>
          <S.LeftChevron onClick={goBack}>{CHEVRON.left}</S.LeftChevron>
          <S.Flex>
            {!editMode ? (
              <>
                <S.Title>{condition.campaignName}</S.Title>
                <S.SVG onClick={handleEditMode}>{POST_SVG.edit}</S.SVG>
              </>
            ) : (
              <>
                <S.TitleInput value={title} onChange={(e) => handleTitleInput(e)} />
                <Button buttonColor="blue" title="저장" buttonSize="buttonS" onButtonClick={onSaveCampaignName} />
              </>
            )}
          </S.Flex>
        </S.Flex>
        <S.ButtonLayout>
          <Button title="캠페인 실행" buttonColor="white" buttonSize="buttonM" isDisabled={isDisabledSumbit()} onButtonClick={onSubmit} />
          <Button title="나에게 테스트 하기" buttonColor="blue" buttonSize="buttonL" onButtonClick={onClickTest} isDisabled={isDisabledSumbit()} />
        </S.ButtonLayout>
      </S.Fixed>
      <CampaignSubmitModal isOpen={showSubmitModal} handleModal={handleSubmitModal} />
      <TestSubmitModal isOpen={showTestSubmitModal} handleModal={handleTestSubmitModal} />
    </>
  );
};

export default Header;
