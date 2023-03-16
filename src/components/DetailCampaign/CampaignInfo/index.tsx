import React from 'react';
import { useParams } from 'react-router-dom';
import { SVG } from '../../../assets';
import useDetailCampaignQuery from '../../../quries/Campaign/useDetailCampaignQuery';
import numberWithCommas from '../../../utils/numberWithComma';

import * as S from './CampaignInfo.styles';

const CampaignInfo = () => {
  const { campaignID } = useParams();
  const { data: detailCampaign } = useDetailCampaignQuery(campaignID);

  return (
    <>
      <S.EventText>
        카피티 베타버전에 한여 차감 크딧 없이&nbsp; <span>무료</span>로 전송됩니다.
      </S.EventText>
      <S.Flex>
        <div>
          <S.InfoTitle>캠페인 생성일</S.InfoTitle>
          <span>{detailCampaign?.campaignCreatedAt}</span>
        </div>
        <div>
          <S.InfoTitle>캠페인 예산</S.InfoTitle>
          <S.Credit>{SVG.credit}</S.Credit>
          <span>제한 없음</span>
        </div>
        <div>
          <S.InfoTitle>사용 크레딧</S.InfoTitle>
          <S.Credit>{SVG.credit}</S.Credit>
          <span>0</span>
        </div>
      </S.Flex>
      <S.Flex>
        <div>
          <S.InfoTitle>메시지 발송일시</S.InfoTitle>
          <span>{detailCampaign?.sendingDateTime}</span>
        </div>
        <div>
          <S.InfoTitle>메시지 발송 수</S.InfoTitle>
          <span>총 {numberWithCommas(detailCampaign?.messageCount)}건</span>
        </div>
        <div>
          <S.InfoTitle>메시지 유형</S.InfoTitle>
          <span>{detailCampaign?.messageType}</span>
        </div>
      </S.Flex>
    </>
  );
};

export default CampaignInfo;
