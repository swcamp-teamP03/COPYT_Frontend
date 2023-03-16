import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { GNB_SVG } from '../../../assets/GNB';
import Button from '../Button';

const NAV_ITEM = [
  { title: '홈', svg: GNB_SVG.home, url: '/' },
  { title: '고객 그룹', svg: GNB_SVG.client, url: '/clients' },
  { title: '카피 생성', svg: GNB_SVG.copy, url: '/copies' },
  { title: '캠페인', svg: GNB_SVG.campaign, url: '/campaign' },
];

const GNB = () => {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  const handleLogoutClick = () => {
    localStorage.removeItem('accessToken');
    navigate(-1);
  };

  return (
    <GNBContainer>
      <div>
        <Logo>{GNB_SVG.logo}</Logo>
        <Gap />
        <NavWrapper>
          {NAV_ITEM.map((item) => (
            <NavItem key={item.title} onClick={() => handleNavigation(item.url)}>
              {item.svg}
              {item.title}
            </NavItem>
          ))}
        </NavWrapper>
      </div>
      <ButtonWrapper>
        {/* <Button title="MY" buttonSize="buttonS" buttonColor="white" borderRadius="15px" onButtonClick={handleMyClick} isDisabled={true}></Button> */}
        <Button title="로그아웃" buttonSize="buttonM" buttonColor="blue" borderRadius="15px" onButtonClick={handleLogoutClick} isDisabled={true}></Button>
      </ButtonWrapper>
    </GNBContainer>
  );
};

export default GNB;

const GNBContainer = styled.div`
  position: sticky;
  min-width: 200px;
  border-right: 1px solid ${({ theme }) => theme.colors.gray30};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 5;
  top: 0;
`;

const Logo = styled.div`
  margin: 15px 15px 5px;
  display: flex;
  justify-content: center;
  align-items: center;
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
  cursor: pointer;
  padding: 16px 18px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: ${({ theme }) => theme.colors.blue30};
  font-weight: bold;
  text-align: left;
  gap: 15px;
  &:hover {
    background-color: ${({ theme }) => theme.colors.gray30};
    border-radius: 10px;
    color: ${({ theme }) => theme.colors.blue50};
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  padding: 0.8rem;
  gap: 0.3rem;
`;
