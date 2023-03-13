import React, { Dispatch, SetStateAction, useState } from 'react';
import * as S from './TOS.styles';
import { motion } from 'framer-motion';
import { CHEVRON } from '../../../assets/Chevron';

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

const variants = {
  open: { height: 'auto' },
  collapsed: { height: 0 },
};

const transition = {
  duration: 0.8,
  ease: [0.04, 0.62, 0.23, 0.98],
};

interface SignUPTOSProps {
  selectedTOS: TOS[];
  setSelectedTOS: Dispatch<SetStateAction<TOS[]>>;
  isAllChecked: boolean;
}

const SignUpTOS = ({ selectedTOS, setSelectedTOS, isAllChecked }: SignUPTOSProps) => {
  const [open, setOpen] = useState(false);

  const checkedItemHandler = (tos: TOS, isChecked: boolean) => {
    if (isChecked) {
      return setSelectedTOS((prev) => [...prev, tos]);
    }
    setSelectedTOS(selectedTOS.filter((checked) => checked.id !== tos.id));
  };

  const checkHandler = (e: React.ChangeEvent<HTMLInputElement>, tos: TOS) => {
    checkedItemHandler(tos, e.target.checked);
  };

  const handleCollapsed = () => {
    setOpen((prev) => !prev);
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
          <S.ChevronButton onClick={handleCollapsed} open={open}>
            {CHEVRON.up}
          </S.ChevronButton>
        </S.CheckBoxContent>
      </S.CheckBoxContainer>
      <S.MotionWrapper>
        <motion.div variants={variants} transition={transition} initial="collapsed" animate={open ? 'open' : 'collapsed'}>
          {TOS_LIST.map((list) => (
            <S.CheckBoxContainer key={list.title}>
              <S.CheckBox type="checkbox" checked={selectedTOS.includes(list)} onChange={(event) => checkHandler(event, list)} />
              <S.CheckBoxContent>
                <h3>{list.title}</h3>
                <span>{list.desc}</span>
              </S.CheckBoxContent>
            </S.CheckBoxContainer>
          ))}
        </motion.div>
      </S.MotionWrapper>
    </>
  );
};

export default SignUpTOS;
