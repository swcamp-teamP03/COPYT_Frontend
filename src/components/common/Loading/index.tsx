import React from 'react';
import * as S from './Loading.stlyes';
const Loading = () => {
  return (
    <S.Overlay>
      <S.Layout>
        <S.Spinner src="../../../../public/spinner.gif" />
        <S.LoadingTitle>카피티가 열심히 카피를 생성하고 있어요.</S.LoadingTitle>
        <S.LoadingDesc>
          긴 카피의 경우 최대 5분이 걸릴 수 있어요.
          <br /> 브라우저를 종료할 경우 저장이 되지 않아요.
        </S.LoadingDesc>
      </S.Layout>
    </S.Overlay>
  );
};

export default Loading;
