import React, { Dispatch } from 'react';
import { ConditionAction } from '../CreateCondition/conditionReducer';

import * as S from './DropDownList.styles';

interface DropDonwList {
  list: string[];
  dispatch: Dispatch<ConditionAction>;
  onClose: () => void;
  type: 'CHANGE_COUNT' | 'CHANGE_LENGTH';
}

const DropwDownList = ({ list, dispatch, onClose, type }: DropDonwList) => {
  const key = type === 'CHANGE_COUNT' ? 'createCount' : 'copyLength';

  const handleDropDown = (value: string) => {
    dispatch({ type, key, value });
    onClose;
  };

  return (
    <>
      <S.Container>
        {list.map((item) => (
          <div onClick={() => handleDropDown(item)} key={item}>
            {item}
          </div>
        ))}
      </S.Container>
    </>
  );
};

export default DropwDownList;
