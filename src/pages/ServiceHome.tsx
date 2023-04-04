import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../components/common/Button';

const LINKS = [
  { title: '좋은 카피를 얻는 방법', button: '카피 생성하기', url: '/copies/create' },
  { title: '고객그룹을 잘 활용하는 방법', button: '고객 그룹 생성하기', url: '/clients/create' },
  { title: '간편한 문자 발송', button: '새 캠페인 실행하기', url: '/campaign/create' },
];

const ServiceHome = () => {
  const navigate = useNavigate();

  const onMovePage = (url: string) => {
    navigate(url);
  };

  return (
    <>
      <TitleContainer>
        <h2>온보딩</h2>
      </TitleContainer>
      <LinkContainer>
        {LINKS.map((link) => (
          <LinkBox key={link.button}>
            <LinkTitle>{link.title}</LinkTitle>
            <Button buttonColor="blue" buttonSize="buttonM" title={link.button} onButtonClick={() => onMovePage(link.url)} />
          </LinkBox>
        ))}
      </LinkContainer>
    </>
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
  align-items: center;
  gap: 30px;
`;

const LinkBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 30px;
  padding-top: 60px;
  background-color: #f9f9fa;
  border-radius: 10px;
`;

const LinkTitle = styled.div`
  margin-top: 10px;
  width: 100%;
  height: 100px;
  font-weight: 700;
  font-size: 20px;
`;
