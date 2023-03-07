import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CHEVRON } from '../../../assets/Chevron';
import { POST_SVG } from '../../../assets/Post';
import Button from '../../common/Button';
import * as S from './Header.styles';

interface HeaderProps {
  editMode: boolean;
}

const Header = () => {
  const [editMode, setEditMode] = useState(false);
  const navigate = useNavigate();
  const handleEditMode = () => {
    setEditMode((prev) => !prev);
  };

  const goBack = () => {
    navigate(-1);
  };

  return (
    <S.Fixed>
      <S.Flex>
        <S.LeftChevron onClick={goBack}>{CHEVRON.left}</S.LeftChevron>
        <S.Flex>
          {!editMode ? (
            <>
              <S.Title>새 켐페인 230228</S.Title>
              <S.SVG onClick={handleEditMode}>{POST_SVG.edit}</S.SVG>
            </>
          ) : (
            <>
              <S.TitleInput />
              <Button buttonColor="black" title="저장" buttonSize="buttonS" />
            </>
          )}
        </S.Flex>
      </S.Flex>
      <div>
        <Button title="캠페인 실행" buttonColor="black" buttonSize="buttonM" />
      </div>
    </S.Fixed>
  );
};

export default Header;
