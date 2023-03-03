import React from 'react';
import SVG from '../../../assets';
import * as S from './TOS.styles';

const TOS_LIST = [
  { title: '개인정보 처리 방침 및 이용 약관', desc: '', isRequired: true },
  { title: '이메일 수집 동의', desc: '', isRequired: true },
  { title: '제 3자 제공 동의', desc: '', isRequired: true },
  { title: '프로모션 정보 수신(선택)', desc: '', isRequired: false },
];

const AllOfTOs = {
  title: '모두 동의합니다.',
  dsec: '카피티 개인정보 처리방침 및 이용약관, 이메일 수집 동의, 제 3자 제공 동의, 프로모션 정보 수신(선택)에 모두 동의합니다.',
};

const SignUpTOS = () => {
  return (
    <>
      <S.CheckBoxContainer>
        <S.CheckBox type="checkbox" />
        <S.CheckBoxContent>
          <h3>{AllOfTOs.title}</h3>
          <span>{AllOfTOs.dsec}</span>
          <S.ChevronButton>{SVG.closeButton}</S.ChevronButton>
        </S.CheckBoxContent>
      </S.CheckBoxContainer>
      {TOS_LIST.map((list) => (
        <S.CheckBoxContainer key={list.title}>
          <S.CheckBox type="checkbox" />
          <S.CheckBoxContent>
            <h3>{list.title}</h3>
            <span>{list.desc}</span>
          </S.CheckBoxContent>
        </S.CheckBoxContainer>
      ))}
    </>
  );
};

export default SignUpTOS;
