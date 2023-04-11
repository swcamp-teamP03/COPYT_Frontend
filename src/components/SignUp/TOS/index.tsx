import React, { Dispatch, SetStateAction, useState } from 'react';
import * as S from './TOS.styles';
import { motion } from 'framer-motion';
import { CHEVRON } from '../../../assets/Chevron';
import InfoNoticeModal from '../InfoNotice';

export interface TOS {
  id: number;
  title: string;
  desc: string;
  isRequired: boolean;
  img: string;
}

export const TOS_LIST: TOS[] = [
  { id: 1, title: '개인정보 처리 방침 및 이용 약관', desc: '개인정보 처리 방침', isRequired: true, img: '/public/info.png' },
  { id: 2, title: '이메일 수집 동의', desc: '이용악관', isRequired: true, img: '/public/condition.png' },
];

const AllOfTOs = {
  title: '모두 동의합니다.',
  title1: '개인정보 처리 방침',
  title2: '이메일 수집 동의',
  content: '전문보기',
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
  const [infoOpen, setInfoOpen] = useState(false);

  const checkedItemHandler = (tos: TOS, isChecked: boolean) => {
    if (isChecked) {
      return setSelectedTOS((prev) => [...prev, tos]);
    }
    setSelectedTOS(selectedTOS.filter((checked) => checked.id !== tos.id));
  };

  const checkHandler = (e: React.ChangeEvent<HTMLInputElement>, tos: TOS) => {
    checkedItemHandler(tos, e.target.checked);
  };

  const handleInfo = () => {
    setInfoOpen((prev) => !prev);
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
        <S.CheckBoxLayout>
          <S.CheckBox type="checkbox" id="check_all" checked={isAllChecked} onChange={allCheckHandler} />
          <S.CheckBoxContent>
            <h3>{AllOfTOs.title}</h3>
            <p>
              카피티 개인정보 처리방침, 이용양관에 모두 동의합니다. <br /> 자세한 사항은 약관별 전문에서 고지하고 있습니다.
              <br /> 약관 동의를 거부할 수 있으며, 필수 약관 거부시에는 회원가입이 제한됩니다.{' '}
            </p>
            <S.ChevronButton onClick={handleCollapsed} open={open}>
              {' '}
              {CHEVRON.down}
            </S.ChevronButton>
          </S.CheckBoxContent>
        </S.CheckBoxLayout>
      </S.CheckBoxContainer>

      <S.MotionWrapper>
        <motion.div variants={variants} transition={transition} initial="collapsed" animate={open ? 'open' : 'collapsed'}>
          {TOS_LIST.map((list) => (
            <S.CheckBoxContainer key={list.title}>
              <S.CheckBoxLayout>
                <S.CheckBox type="checkbox" checked={selectedTOS.includes(list)} onChange={(event) => checkHandler(event, list)} />
                <S.CheckBoxContent>
                  <h3>
                    {list.title}
                    <span onClick={handleInfo} style={{ marginLeft: '10px', textDecoration: 'underline' }}>
                      전문보기
                      {infoOpen && <InfoNoticeModal infoOpen={true} handleInfo={handleInfo} personalImg={list.img} personalAlt={list.desc} titleText={list.desc} />}
                    </span>
                  </h3>
                </S.CheckBoxContent>
              </S.CheckBoxLayout>
            </S.CheckBoxContainer>
          ))}
        </motion.div>
      </S.MotionWrapper>
    </>
  );
};

export default SignUpTOS;
