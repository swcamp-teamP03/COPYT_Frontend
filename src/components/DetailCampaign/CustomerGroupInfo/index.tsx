import React from 'react';
import { useParams } from 'react-router-dom';
import useDetailCampaignQuery from '../../../quries/Campaign/useDetailCampaignQuery';
import numberWithCommas from '../../../utils/numberWithComma';
import * as S from './CustomerGroupInfo.styles';

const CustomerGroupInfo = () => {
  const { campaignID } = useParams();
  const { data: detailCampaign } = useDetailCampaignQuery(campaignID);

  return (
    <>
      <S.Title>
        <h1>고객 그룹 정보</h1>
      </S.Title>
      <S.Flex>
        <S.Info>
          <S.InfoTitle>고객 그룹명</S.InfoTitle>
          <S.InfoDesc>{detailCampaign?.groupName}</S.InfoDesc>
        </S.Info>
        <S.Info>
          <S.InfoTitle>총 고객 수</S.InfoTitle>
          <S.InfoDesc>{numberWithCommas(detailCampaign?.customerCount)}명</S.InfoDesc>
        </S.Info>
      </S.Flex>
      <S.Info>
        <S.InfoTitle>고객 메모</S.InfoTitle>
        <S.PropertyBox>
          {detailCampaign?.customerProperties.map((property) => (
            <div key={property.propertyValue}>{property.propertyValue}</div>
          ))}
        </S.PropertyBox>
      </S.Info>
      <S.Info>
        <S.InfoTitle>업로드 파일</S.InfoTitle>
        <S.InfoDesc>{detailCampaign?.excelOrgFileName}</S.InfoDesc>
      </S.Info>
    </>
  );
};

export default CustomerGroupInfo;
