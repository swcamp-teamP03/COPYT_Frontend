import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Button from '../Button';

const GNB = () => {
  const navigate = useNavigate();

  const handleNavigation = (path: any) => {
    navigate(path);
  };

  const handleMyClick = () => {
    handleNavigation('/my');
  };
  const handleLogoutClick = () => {
    handleNavigation('/');
  };

  return (
    <GNBContainer>
      <Logo>카피티</Logo>
      <Gap />
      <NavWrapper>
        <NavItem onClick={() => handleNavigation('/')}>홈</NavItem>
        <NavItem onClick={() => handleNavigation('/clients')}>고객그룹</NavItem>
        <NavItem onClick={() => handleNavigation('/copies')}>카피생성</NavItem>
        <NavItem onClick={() => handleNavigation('/campaign')}>캠페인</NavItem>
      </NavWrapper>
      <ButtonWrapper>
        <Button title="MY" buttonSize="buttonS" buttonColor="white" borderRadius="15px" onButtonClick={handleMyClick} isDisabled={true}></Button>
        <Button title="로그아웃" buttonSize="buttonM" buttonColor="blue" borderRadius="15px" onButtonClick={handleLogoutClick} isDisabled={true}></Button>
      </ButtonWrapper>
    </GNBContainer>
  );
};

export default GNB;

const GNBContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 200px;
  background-color: ${({ theme }) => theme.colors.gray0};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 1;
`;

const Logo = styled.div`
  margin: 15px 15px 5px;
  font-weight: bold;
  text-align: center;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.gray10};
`;

const Gap = styled.p`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 3px;
`;

const NavWrapper = styled.nav`
  margin-bottom: 10px;
  flex-grow: 1;
`;

const NavItem = styled.div`
  padding: 16px 18px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: ${({ theme }) => theme.colors.black};
  font-weight: bold;
  text-align: left;
  &:hover {
    background-color: ${({ theme }) => theme.colors.gray90};
    border-radius: 10px;
    color: white;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  padding: 0.8rem;
  gap: 0.3rem;
`;
