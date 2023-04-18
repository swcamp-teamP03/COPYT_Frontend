import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { HOME } from '../../assets';
import Button from '../common/Button';

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
      <WrapperBox>
        <LinkContainer>
          {LINKS.map((link) => (
            <LinkBox key={link.title} isActive={link.title === currentLink} onClick={() => setCurrentLink(link.title)}>
              {HOME.hoem}
              <LinkTitle>{link.title}</LinkTitle>
            </LinkBox>
          ))}
        </LinkContainer>
        {currentLink !== '' && (
          <ContentBox>
            <Content>{link?.content}</Content>
            <Explanation src={link?.gif} />

            <ButtonContainer>
              {link && <Button title={link.button} buttonColor="blue" borderRadius="10px" buttonSize="buttonM" onButtonClick={() => onMovePage(link.url)} />}
            </ButtonContainer>
          </ContentBox>
        )}
      </WrapperBox>
    </>
  );
};

export default Onboarding;

const LinkContainer = styled.div`
  margin-right: 60px;
  display: flex;
  flex-direction: column;

  /* justify-content: space-between; */
`;

const LinkBox = styled.div<{ isActive: boolean }>`
  display: flex;
  align-items: center;
  width: 270px;
  padding: 20px;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.blue60};
  background-color: ${({ isActive }) => (isActive ? '#eef2ff' : ' white')};
  border-radius: 10px;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.15);
  cursor: pointer;
`;

const WrapperBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1200px;
`;

const LinkTitle = styled.div`
  margin-left: 10px;
  font-weight: 700;
  font-size: 15px;
  text-align: center;
`;
const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 602px;
  height: 350px;
  padding: 30px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.15);
  overflow: hidden; // 추가
`;

const Explanation = styled.img`
  background-color: ${({ theme }) => theme.colors.gray30};
  width: 100%;
  margin: 5px;
  border-radius: 10px;
  max-height: 290px; // 추가
`;

const Content = styled.div`
  margin-bottom: 10px;
  margin-top: 30px;
  font-size: 15px;
  font-weight: 700;
  text-align: left;
  width: 100%;
  flex: 1;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 30px;
`;
