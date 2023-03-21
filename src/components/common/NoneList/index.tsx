import React from 'react';
import { NONE_LIST } from '../../../assets';
import * as S from './NoneList.styles';

interface NoneListProps {
  title: string;
  subTitle: string;
}

const NoneList = ({ title, subTitle }: NoneListProps) => {
  return (
    <S.Container>
      <S.Text>{title}</S.Text>
      <S.Text>{subTitle}</S.Text>
      <S.SVG>{NONE_LIST}</S.SVG>
    </S.Container>
  );
};

export default NoneList;
