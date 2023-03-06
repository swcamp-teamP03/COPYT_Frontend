import React, { Dispatch, SetStateAction, useState } from 'react';
import { CHEVRON } from '../../../assets';
import * as S from './ListCount.styles';

const LIST_COUNT = [10, 30, 50];

interface ListCountProps {
  listCount: number;
  setListCount: Dispatch<SetStateAction<number>>;
  totalCopy: number;
}

const ListCount = ({ listCount, setListCount, totalCopy }: ListCountProps) => {
  const [showCountDropDown, setShowCountDropDown] = useState(false);

  const handleCountDropDown = () => {
    setShowCountDropDown((prev) => !prev);
  };

  const handleCount = (count: number) => {
    setListCount(count);
    handleCountDropDown();
  };

  return (
    <S.FlexBox>
      <span>전체 {totalCopy}개</span>
      <S.VerticalHr />
      <S.FlexBox>
        <span>목록 개수</span>
        <S.ListCount>
          <span>{listCount} 개</span>
          <div onClick={handleCountDropDown}>{CHEVRON.down}</div>
          {showCountDropDown && (
            <S.DropDownContainer>
              {LIST_COUNT.map((count) => (
                <div key={count} onClick={() => handleCount(count)}>
                  {count}
                </div>
              ))}
            </S.DropDownContainer>
          )}
        </S.ListCount>
      </S.FlexBox>
    </S.FlexBox>
  );
};

export default ListCount;
