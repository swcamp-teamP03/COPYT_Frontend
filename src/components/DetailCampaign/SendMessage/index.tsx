import React from 'react';
import { useParams } from 'react-router-dom';
import useDetailCampaignQuery from '../../../quries/Campaign/useDetailCampaignQuery';
import * as S from './SendMessage.styles';

const SendMessage = () => {
  const { campaignID } = useParams();
  const { data: detailCampaign } = useDetailCampaignQuery(campaignID);

  return (
    <>
      <S.Flex>
        <S.Info>
          <S.InfoTitle>연결 카피 그룹</S.InfoTitle>
          <S.InfoDesc>{detailCampaign?.copyGroupName}</S.InfoDesc>
        </S.Info>
      </S.Flex>
      <S.Flex>
        <S.Info>
          <S.InfoTitle>발송 카피</S.InfoTitle>
          <S.Grid>
            <S.InfoDesc>메세지 A</S.InfoDesc>
            {detailCampaign?.messageB && <S.InfoDesc>메세지 B</S.InfoDesc>}
          </S.Grid>
        </S.Info>
      </S.Flex>
      <S.MessageContainer>
        {detailCampaign?.copyList.map((copy) => (
          <S.Message key={copy.copyType}>{copy.content}</S.Message>
        ))}
      </S.MessageContainer>
    </>
  );
};

export default SendMessage;
