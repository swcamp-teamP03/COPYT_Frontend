import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useDetailCampaignQuery from '../../../quries/Campaign/useDetailCampaignQuery';
import CollapseContainer from '../../common/CollapseContainer';
import * as S from './CustomerGroupInfo.styles';

const CustomerGroupInfo = () => {
  const [open, setOpen] = useState(true);
  const { campaignID } = useParams();
  const { data: detailCampaign } = useDetailCampaignQuery(campaignID);

  const handleCollapsed = () => {
    setOpen((prev) => !prev);
  };

  return (
    <CollapseContainer title="고객 그룹 정보" open={open} handleCollapsed={handleCollapsed}>
      <S.Flex>
        <S.Info>
          <S.InfoTitle>고객 그룹명</S.InfoTitle>
          <S.InfoDesc>{detailCampaign?.copyGroupName}</S.InfoDesc>
        </S.Info>
        <S.Info>
          <S.InfoTitle>총 고객 수</S.InfoTitle>
          <S.InfoDesc>{detailCampaign?.customerCnt}명</S.InfoDesc>
        </S.Info>
      </S.Flex>
      <S.Info>
        <S.InfoTitle>고객 속성</S.InfoTitle>
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
    </CollapseContainer>
  );
};

export default CustomerGroupInfo;
