import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../components/common/Button';
import { Layout } from './Layout.styles';

const LINKS = [
  { title: '간단하게 여러개 카피 먼저 받아보세요', button: '카피 생성하기', url: '/copies/create' },
  { title: '기존에 관리하던 고객을 업데이트하고 메시지를 보내세요.', button: '고객 그룹 추가', url: '/clients/create' },
  { title: '생성한 카피로 \n 메시지 A/B테스트를 진행하세요.', button: '새 캠페인 생성', url: '/campaign/create' },
];

const ServiceHome = () => {
  const navigate = useNavigate();

  const onMovePage = (url: string) => {
    navigate(url);
  };

  return (
    <Layout size="M">
      <TitleContainer>
        <h3>
          처음오셨나요?
          <br />
          상황에 따른 문자 메시지 카피를 AI를 통해 생성 해보세요
        </h3>
        <img src="../../public/example.png" />
      </TitleContainer>
      <LinkContainer>
        {LINKS.map((link) => (
          <LinkBox key={link.button}>
            <LinkTitle>{link.title}</LinkTitle>
            <Button buttonColor="blue" buttonSize="buttonM" title={link.button} onButtonClick={() => onMovePage(link.url)} />
          </LinkBox>
        ))}
      </LinkContainer>
    </Layout>
  );
};

export default ServiceHome;

const TitleContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: flex-end;
  white-space: nowrap;
  margin-bottom: 20px;
`;

const LinkContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 30px;
`;

const LinkBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 30px;
  background-color: #f9f9fa;
  border-radius: 10px;
`;

const LinkTitle = styled.div`
  width: 100%;
  height: 100px;
`;
