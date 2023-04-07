import React from 'react';
import { useParams } from 'react-router-dom';
import useDetailCampaignQuery from '../../../quries/Campaign/useDetailCampaignQuery';
import * as S from './Analysis.styles';
import HoverQuestion from './HoverQuestion';
import numberWithCommas from '../../../utils/numberWithComma';

const Analysis = () => {
  const { campaignID } = useParams();
  const { data: detailCampaign } = useDetailCampaignQuery(campaignID);

  const ctrGap = detailCampaign?.messageA?.uniqueCTR ?? 0 - (detailCampaign?.messageB?.uniqueCTR ?? 0);

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
            <HoverQuestion text={'Unique CTR\n(고유 링크 클릭 수 / 발송 성공 메시지 수) x 100'} />
          </S.Relative>
        </S.CategoryTitle>
        <S.CategoryTitle>
          <S.Relative>
            Unique CTR <br /> 비교
            <HoverQuestion text={'Unique CTR 비교\n(메시지 B Unique CTR) - (메시지 A Unique CTR)'} />
          </S.Relative>
        </S.CategoryTitle>
      </S.Categories>
      <hr />
      <S.Categories>
        <S.CategoryTitle>메시지 A</S.CategoryTitle>
        <S.CategoryTitle>
          {numberWithCommas(detailCampaign?.messageA.messageACnt)}/{detailCampaign?.customerCount}
        </S.CategoryTitle>
        <S.CategoryTitle>
          {detailCampaign?.messageA.messageSuccessCnt} / {detailCampaign?.messageA.messageACnt}
        </S.CategoryTitle>
        <S.CategoryTitle>
          {detailCampaign?.messageA.uniqueCTR}%({detailCampaign?.messageA.clickCnt})
        </S.CategoryTitle>
        <S.CategoryTitle>기준</S.CategoryTitle>
      </S.Categories>
      {detailCampaign?.copyWriteAB[1] && (
        <S.Categories>
          <S.CategoryTitle>메시지 B</S.CategoryTitle>
          <S.CategoryTitle>
            {numberWithCommas(detailCampaign?.messageB?.messageBCnt)}/{detailCampaign?.customerCount}
          </S.CategoryTitle>
          <S.CategoryTitle>
            {detailCampaign?.messageB?.messageSuccessCnt} / {detailCampaign?.messageB?.messageBCnt}
          </S.CategoryTitle>
          <S.CategoryTitle>
            {detailCampaign?.messageB?.uniqueCTR}%({detailCampaign?.messageB?.clickCnt})
          </S.CategoryTitle>
          <S.CategoryTitle>{ctrGap + '%'}</S.CategoryTitle>
        </S.Categories>
      )}
    </>
  );
};

export default Analysis;
