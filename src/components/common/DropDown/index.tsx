import React from 'react';
import { CHEVRON } from '../../../assets/Chevron';
import * as S from './DropDown.styles';

interface DorpDownProps {
  list: number[] | string[];
  base: number | string;
  handler: (count: any) => void;
  padding?: string;
}

const DropDwown = ({ list, base, handler, padding = '10px' }: DorpDownProps) => {
  const isSelected = (item: number | string) => {
    return base === item;
  };

  return (
    <>
      <S.Container>
        <S.Base onClick={() => handler(base)} padding={padding}>
          <div>{base}</div>
          <S.Chevron>{CHEVRON.up}</S.Chevron>
        </S.Base>
        {list.map((item) => (
          <S.ListItem key={item} onClick={() => handler(item)} padding={padding}>
            <S.Item isSelected={isSelected(item)}>{item}</S.Item>
          </S.ListItem>
        ))}
      </S.Container>
    </>
  );
};

export default DropDwown;
