import dayjs from 'dayjs';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { CHEVRON } from '../../../assets/Chevron';
import { POST_SVG } from '../../../assets/Post';
import useCreateCampaignMutation from '../../../quries/Campaign/useCreateCampaignMutation';
import { campaignConditionState } from '../../../store/campaignConditionState';
import Button from '../../common/Button';
import * as S from './Header.styles';

const Header = () => {
  const [condition, setCondition] = useRecoilState(campaignConditionState);
  const [title, setTitle] = useState('새 캠페인' + `${dayjs().format('YYMMDD')}`);
  const [editMode, setEditMode] = useState(false);
  const navigate = useNavigate();

  const { mutate: createMutate } = useCreateCampaignMutation();
  const handleEditMode = () => {
    setEditMode((prev) => !prev);
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
    createMutate(condition);
  };

  const goBack = () => {
    navigate(-1);
  };

  const isDisabledSumbit = Object.values(condition).includes('') || condition.messageOver;

  return (
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
              <Button buttonColor="black" title="저장" buttonSize="buttonS" onButtonClick={onSaveCampaignName} />
            </>
          )}
        </S.Flex>
      </S.Flex>
      <div>
        <Button title="캠페인 실행" buttonColor="black" buttonSize="buttonM" isDisabled={isDisabledSumbit} onButtonClick={onSubmit} />
      </div>
    </S.Fixed>
  );
};

export default Header;
