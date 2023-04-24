import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { GNB_SVG } from '../assets/GNB';
import Button from '../components/common/Button';

const SignUpSuccess = () => {
  const navigate = useNavigate();

  const onClickButton = () => {
    navigate('/');
  };

  return (
    <Layout>
      <Header>{GNB_SVG.logo}</Header>
      <Title>
        회원가입이 완료 되었습니다!
        <br />
        카피티를 바로 시작해보세요
      </Title>
      <Button buttonSize="buttonL" title="카피티 시작하기" buttonColor="blue" onButtonClick={onClickButton} borderRadius="24px" width="260px" />
    </Layout>
  );
};

export default SignUpSuccess;

const Layout = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 55px;
`;

const Header = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  padding: 26px 75px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  z-index: 100;
  filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.07));
`;
