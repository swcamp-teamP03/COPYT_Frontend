import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { HOME } from '../../../assets';
import Button from '../../common/Button';
import * as S from './Onboardig.styles';

const LINKS = [
  {
    title: '목적에 맞는 카피 생성하기',
    content: '좋은 카피를 얻는 방법',
    button: '카피 생성하기',
    url: '/copies/create',
    gif: '../../../../public/GIF/카피생성.gif',
  },
  {
    title: '문자 보낼 대상 업로드하기',
    content: '고객그룹을 잘 활용하는 방법',
    button: '고객 그룹 생성하기',
    url: '/clients/create',
    gif: '../../../../public/GIF/고객업로드.gif',
  },
  { title: '문자 보내기', content: '간편한 문자 발송', button: '새 캠페인 실행하기', url: '/campaign/create', gif: '../../../../public/GIF/캠페인생성.gif' },
];

const Onboarding = () => {
  const navigate = useNavigate();

  const [currentLink, setCurrentLink] = useState('목적에 맞는 카피 생성하기');

  const onMovePage = (url: string) => {
    navigate(url);
  };

  const link = LINKS.find((link) => link.title === currentLink);

  return (
    <>
      <S.WrapperBox>
        <S.LinkContainer>
          {LINKS.map((link) => (
            <S.LinkBox key={link.title} isActive={link.title === currentLink} onClick={() => setCurrentLink(link.title)}>
              {HOME.hoem}
              <S.LinkTitle>{link.title}</S.LinkTitle>
            </S.LinkBox>
          ))}
        </S.LinkContainer>
        {currentLink !== '' && (
          <S.ContentBox>
            <S.Content>{link?.content}</S.Content>
            <S.Explanation src={link?.gif} />
            <S.ButtonContainer>
              {link && <Button title={link.button} buttonColor="blue" borderRadius="10px" buttonSize="buttonM" onButtonClick={() => onMovePage(link.url)} />}
            </S.ButtonContainer>
          </S.ContentBox>
        )}
      </S.WrapperBox>
    </>
  );
};

export default Onboarding;
