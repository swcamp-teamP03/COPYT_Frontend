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
  return (
    <>
      <S.Container>
        <S.Base onClick={() => handler(base)} padding={padding}>
          <div>{base}</div>
          <div>{CHEVRON.up}</div>
        </S.Base>
        {list.map((item) => (
          <S.ListItem key={item} onClick={() => handler(item)} padding={padding}>
            {item}
          </S.ListItem>
        ))}
      </S.Container>
    </>
  );
};

export default DropDwown;
