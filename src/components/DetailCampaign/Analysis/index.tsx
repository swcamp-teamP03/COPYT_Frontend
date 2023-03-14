import React from 'react';
import { useParams } from 'react-router-dom';
import useDetailCampaignQuery from '../../../quries/Campaign/useDetailCampaignQuery';
import * as S from './Analysis.styles';
import HoverQuestion from './HoverQuestion';

const Analysis = () => {
  const { campaignID } = useParams();
  const { data: detailCampaign } = useDetailCampaignQuery(campaignID);

  const analysis = [{ ...detailCampaign?.messageA }, { ...detailCampaign?.messageB }];
  if (!detailCampaign) {
    return null;
  }

  const ctrGap = detailCampaign?.messageA?.uniqueCTR - (detailCampaign?.messageB?.uniqueCTR ?? 0);

  const memberA = detailCampaign.messageB ? Math.ceil(detailCampaign.customerCount / 2) : detailCampaign.customerCount;
  const memberB = Math.floor(detailCampaign.customerCount / 2);

  return (
    <>
      <S.Title>
        <h1>성과 분석</h1>
      </S.Title>
      <S.Categories>
        <S.CategoryTitle>테스트 그룹</S.CategoryTitle>
        <S.CategoryTitle>
          메시지 할당 고객 수<br /> / 총 캠페인 고객 수
        </S.CategoryTitle>
        <S.CategoryTitle>
          발송 성공 개수
          <br /> / 메시지 발송 수
        </S.CategoryTitle>
        <S.CategoryTitle>
          <S.Relative>
            Unique CTR <br />
            (고유 링크 클릭 수)
            <HoverQuestion text={'Unique CTR = (고유 링크 클릭 수 / 발송 성공 메시지 수) x 100'} />
          </S.Relative>
        </S.CategoryTitle>
        <S.CategoryTitle>
          <S.Relative>
            Unique CTR <br /> 비교
            <HoverQuestion text={'Unique CTR 비교 = (메시지 A Unique CTR) - (메시지 B Unique CTR)'} />
          </S.Relative>
        </S.CategoryTitle>
      </S.Categories>
      <hr />
      {analysis.map((type, idx) => (
        <S.Categories key={idx}>
          <S.CategoryTitle>메시지 {idx === 0 ? 'A' : 'B'}</S.CategoryTitle>
          <S.CategoryTitle>
            {idx === 0 ? memberA : memberB} / {detailCampaign?.customerCount}
          </S.CategoryTitle>
          <S.CategoryTitle>
            {type.messageSuccessCnt} / {idx === 0 ? memberA : memberB}
          </S.CategoryTitle>
          <S.CategoryTitle>
            {type.uniqueCTR}% ({type.clickCnt})
          </S.CategoryTitle>
          <S.CategoryTitle>{idx === 0 ? '기준' : ctrGap + '%'}</S.CategoryTitle>
        </S.Categories>
      ))}
    </>
  );
};

export default Analysis;
