import React, { Dispatch, SetStateAction } from 'react';
import SVG from '../../../assets';
import * as S from './TOS.styles';

export interface TOS {
  id: number;
  title: string;
  desc: string;
  isRequired: boolean;
}

export const TOS_LIST: TOS[] = [
  { id: 1, title: '개인정보 처리 방침 및 이용 약관', desc: '', isRequired: true },
  { id: 2, title: '이메일 수집 동의', desc: '', isRequired: true },
  { id: 3, title: '제 3자 제공 동의', desc: '', isRequired: true },
  { id: 4, title: '프로모션 정보 수신(선택)', desc: '', isRequired: false },
];

const AllOfTOs = {
  title: '모두 동의합니다.',
  dsec: '카피티 개인정보 처리방침 및 이용약관, 이메일 수집 동의, 제 3자 제공 동의, 프로모션 정보 수신(선택)에 모두 동의합니다.',
};

interface SignUPTOSProps {
  selectedTOS: TOS[];
  setSelectedTOS: Dispatch<SetStateAction<TOS[]>>;
  isAllChecked: boolean;
}

const SignUpTOS = ({ selectedTOS, setSelectedTOS, isAllChecked }: SignUPTOSProps) => {
  const checkedItemHandler = (tos: TOS, isChecked: boolean) => {
    if (isChecked) {
      return setSelectedTOS((prev) => [...prev, tos]);
    }
    setSelectedTOS(selectedTOS.filter((checked) => checked.id !== tos.id));
  };

  const checkHandler = (e: React.ChangeEvent<HTMLInputElement>, tos: TOS) => {
    checkedItemHandler(tos, e.target.checked);
  };

  const allCheckHandler = () => {
    if (isAllChecked) {
      setSelectedTOS([]);
    } else {
      setSelectedTOS([...TOS_LIST]);
    }
  };

  return (
    <>
      <S.CheckBoxContainer>
        <S.CheckBox type="checkbox" checked={isAllChecked} onChange={allCheckHandler} />
        <S.CheckBoxContent>
          <h3>{AllOfTOs.title}</h3>
          <span>{AllOfTOs.dsec}</span>
          {/* <S.ChevronButton>{SVG.closeButton}</S.ChevronButton> */}
        </S.CheckBoxContent>
      </S.CheckBoxContainer>
      {TOS_LIST.map((list) => (
        <S.CheckBoxContainer key={list.title}>
          <S.CheckBox type="checkbox" checked={selectedTOS.includes(list)} onChange={(event) => checkHandler(event, list)} />
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
