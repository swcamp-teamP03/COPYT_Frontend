import React from 'react';
import * as S from './NonCopyGroupList.style';

const MESSAGE_TYPE = [
  { title: '웰컴 메세지', desc: '새롭게 유입된 고객을 위한 메세지를 작성해보세요.' },
  { title: '이벤트 메세지', desc: '이벤트를 위한 메세지를 작성해보세요.' },
  { title: '할인 메세지', desc: '할인을 위한 메세지를 작성해보세요.' },
];

const NonCopyGroupList = () => {
  return (
    <S.Layout>
      <S.Title>
        아직 카피를 생성하지 않았어요
        <br />
        종류별 카피를 추천받고 발송해보세요.
      </S.Title>
    </S.Layout>
  );
};

export default NonCopyGroupList;
