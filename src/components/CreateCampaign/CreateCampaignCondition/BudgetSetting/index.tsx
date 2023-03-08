import React from 'react';
import * as S from './BudgetSetting.styles';

const BudgetSetting = () => {
  return (
    <S.Layout>
      <h2>예산 설정</h2>
      <S.NoticeContainer>
        카피티 베타 버전에 한하여 차감 크레딧 없이&nbsp;<span>무료</span> 로 전송됩니다.
      </S.NoticeContainer>
    </S.Layout>
  );
};

export default BudgetSetting;
