import React from 'react';
import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';
import { GNB_SVG } from '../../../assets/GNB';
import Button from '../Button';

const NAV_ITEM = [
  { title: '홈', svg: GNB_SVG.home, svg1: GNB_SVG.whitehome, url: '/main' },
  { title: '카피 생성', svg: GNB_SVG.copy, svg1: GNB_SVG.whitecopy, url: '/copies' },
  { title: '고객 그룹', svg: GNB_SVG.client, svg1: GNB_SVG.whiteclient, url: '/clients' },
  { title: '캠페인', svg: GNB_SVG.campaign, svg1: GNB_SVG.whitecampaign, url: '/campaign' },
];

const CATEGORY = [
  { title: '공지사항', svg: GNB_SVG.notice, url: 'https://blushing-lemming-a63.notion.site/8a69c4f21a934e60844b89e34f641110' },
  { title: '가이드', svg: GNB_SVG.guide, url: 'https://blushing-lemming-a63.notion.site/da6056847179483f810a3550da8f6637' },
  { title: '빠른 문의', svg: GNB_SVG.inquiry, url: 'https://open.kakao.com/o/gFCsw0cf' },
];

const GNB = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  const isSelected = (url: string) => {
    return pathname === url;
  };

  const handleLogoutClick = () => {
    localStorage.removeItem('accessToken');
    navigate('/auth');
  };

  return (
    <GNBContainer>
      <Logo>{GNB_SVG.logo}</Logo>
      <Gap />
      <NavWrapper>
        {NAV_ITEM.map((item) => (
          <NavItem key={item.title} onClick={() => handleNavigation(item.url)} isSelected={isSelected(item.url)}>
            {item.svg}
            {item.title}
          </NavItem>
        ))}
      </NavWrapper>

      <CategoryWrapper>
        <div>
          <hr />
          {CATEGORY.map((item) => (
            <CategoryItem
              key={item.title}
              onClick={() => {
                window.open(item.url);
              }}
            >
              {item.svg}
              {item.title}
            </CategoryItem>
          ))}
          <ButtonWrapper>
            {/* <Button title="MY" buttonSize="buttonS" buttonColor="white" borderRadius="15px" onButtonClick={handleMyClick} isDisabled={true}></Button> */}
            <Button title="로그아웃" buttonSize="buttonM" buttonColor="blue" borderRadius="15px" onButtonClick={handleLogoutClick} isDisabled={false}></Button>
          </ButtonWrapper>
        </div>
      </CategoryWrapper>
    </GNBContainer>
  );
};

export default GNB;

const GNBContainer = styled.div`
  position: sticky;
  min-width: 200px;
  height: 100vh;
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

interface NavItemProps {
  isSelected: boolean;
}

const NavItem = styled.div<NavItemProps>`
  cursor: pointer;
  padding: 16px 18px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: ${(props) => (props.isSelected ? props.theme.colors.white : props.theme.colors.blue50)};
  font-weight: bold;
  text-align: left;
  gap: 15px;
  background-color: ${(props) => (props.isSelected ? props.theme.colors.blue30 : props.theme.colors.white)};
  border-radius: 10px;
  margin: 1px 0;

  &:hover {
    background-color: ${({ theme }) => theme.colors.blue30};
    color: ${({ theme }) => theme.colors.white};
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  padding: 0.8rem;
  gap: 0.3rem;
`;

const CategoryWrapper = styled.nav`
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 10px;
  .hr {
    color: ${({ theme }) => theme.colors.blue60};
  }
`;

const CategoryItem = styled.div`
  cursor: pointer;
  padding: 16px 18px;
  display: flex;
  justify-content: flex-start;
  width: 80%;
  align-items: center;
  color: ${({ theme }) => theme.colors.blue60};
  font-weight: bold;
  text-align: left;
  gap: 15px;
  font-size: 15px;
  border-radius: 10px;
  &:hover {
    background-color: ${({ theme }) => theme.colors.gray30};
  }
`;
