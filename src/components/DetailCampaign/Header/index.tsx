import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CHEVRON } from '../../../assets/Chevron';
import Button from '../../common/Button';
import SentHistoryModal from '../SentHistoryModal';
import * as S from './Header.styles';

const Header = () => {
  const [showSentHistoryModal, setShowSentHistoryModal] = useState(true);

  const handleShowSentHistoyModal = () => {
    setShowSentHistoryModal((prev) => !prev);
  };

  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };
  return (
    <>
      <S.Fixed>
        <S.Layout>
          <S.Flex>
            <S.LeftChevron onClick={goBack}>{CHEVRON.left}</S.LeftChevron>
            <S.Title>브랜드 맴버십 데이 할인</S.Title>
            <S.Tag>LMS</S.Tag>
          </S.Flex>
          <S.Flex>
            <Button title="발송 내역" buttonColor="black" buttonSize="buttonM" onButtonClick={handleShowSentHistoyModal} />
            <Button title="PDF 다운로드" buttonColor="black" buttonSize="buttonM" />
          </S.Flex>
        </S.Layout>
      </S.Fixed>
      <SentHistoryModal isOpen={showSentHistoryModal} handleModal={handleShowSentHistoyModal} />
    </>
  );
};

export default Header;
