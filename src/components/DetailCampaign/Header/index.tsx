import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { CHEVRON } from '../../../assets/Chevron';
import useDetailCampaignQuery from '../../../quries/Campaign/useDetailCampaignQuery';
import Button from '../../common/Button';
import SentHistoryModal from '../SentHistoryModal';
import * as S from './Header.styles';

const Header = () => {
  const [showSentHistoryModal, setShowSentHistoryModal] = useState(false);
  const { campaignID } = useParams();
  const { data: detailCampaign } = useDetailCampaignQuery(campaignID);

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
        <S.Flex>
          <S.LeftChevron onClick={goBack}>{CHEVRON.left}</S.LeftChevron>
          <S.Title>{detailCampaign?.campaignName}</S.Title>
          <S.Tag>{detailCampaign?.messageType}</S.Tag>
        </S.Flex>
        <S.Flex>
          <Button title="발송 내역" buttonColor="blue" buttonSize="buttonM" onButtonClick={handleShowSentHistoyModal} />
          {/* <Button title="PDF 다운로드" buttonColor="blue" buttonSize="buttonM" /> */}
        </S.Flex>
      </S.Fixed>
      <SentHistoryModal isOpen={showSentHistoryModal} handleModal={handleShowSentHistoyModal} />
    </>
  );
};

export default Header;
